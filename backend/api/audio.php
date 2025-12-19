<?php
require_once '../config.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // Dohvati sve audio fajlove
        handleGet();
        break;
        
    case 'POST':
        // Upload audio fajl
        handlePost();
        break;
        
    case 'DELETE':
        // Obriši audio fajl
        handleDelete();
        break;
        
    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
        break;
}

function handleGet() {
    try {
        $db = getDBConnection();
        $stmt = $db->query("SELECT * FROM audio_files ORDER BY created_at DESC");
        $files = $stmt->fetchAll();
        
        echo json_encode([
            'status' => 'success',
            'data' => $files
        ]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => $e->getMessage()]);
    }
}

function handlePost() {
    try {
        // Upload handling
        if (!isset($_FILES['audio'])) {
            throw new Exception('No file uploaded');
        }
        
        $file = $_FILES['audio'];
        
        // Proveri da li ima grešaka pri uploadu
        if ($file['error'] !== UPLOAD_ERR_OK) {
            throw new Exception('Upload error: ' . $file['error']);
        }
        
        // Validacija tipa fajla
        $allowedTypes = ['audio/mpeg', 'audio/wav', 'audio/mp3', 'audio/x-wav', 'audio/wave'];
        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mimeType = finfo_file($finfo, $file['tmp_name']);
        finfo_close($finfo);
        
        if (!in_array($mimeType, $allowedTypes)) {
            throw new Exception('Invalid file type. Only audio files are allowed.');
        }
        
        // Proveri veličinu fajla (max 50MB)
        $maxSize = 50 * 1024 * 1024; // 50MB
        if ($file['size'] > $maxSize) {
            throw new Exception('File too large. Maximum size is 50MB.');
        }
        
        $uploadDir = '../uploads/';
        
        if (!file_exists($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }
        
        $filename = uniqid() . '_' . basename($file['name']);
        $filepath = $uploadDir . $filename;
        
        if (move_uploaded_file($file['tmp_name'], $filepath)) {
            $db = getDBConnection();
            $stmt = $db->prepare("INSERT INTO audio_files (filename, filepath, size, status) VALUES (?, ?, ?, 'pending')");
            $stmt->execute([$filename, $filepath, $file['size']]);
            $fileId = $db->lastInsertId();
            
            echo json_encode([
                'status' => 'success',
                'message' => 'File uploaded successfully',
                'data' => [
                    'id' => $fileId,
                    'filename' => $filename,
                    'size' => $file['size']
                ]
            ]);
        } else {
            throw new Exception('Failed to upload file');
        }
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => $e->getMessage()]);
    }
}

function handleDelete() {
    try {
        $data = json_decode(file_get_contents('php://input'), true);
        $id = $data['id'] ?? null;
        
        if (!$id) {
            throw new Exception('ID is required');
        }
        
        $db = getDBConnection();
        
        // Prvo dohvati filepath da bi obrisao fajl sa diska
        $stmt = $db->prepare("SELECT filepath FROM audio_files WHERE id = ?");
        $stmt->execute([$id]);
        $file = $stmt->fetch();
        
        if ($file && file_exists($file['filepath'])) {
            unlink($file['filepath']);
        }
        
        // Obriši iz baze
        $stmt = $db->prepare("DELETE FROM audio_files WHERE id = ?");
        $stmt->execute([$id]);
        
        echo json_encode([
            'status' => 'success',
            'message' => 'File deleted successfully'
        ]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => $e->getMessage()]);
    }
}
?>
