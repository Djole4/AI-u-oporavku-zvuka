<?php
require_once '../config.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'POST':
        // Startuj procesiranje
        handleProcess();
        break;
        
    case 'GET':
        // Proveri status procesiranja
        handleGetStatus();
        break;
        
    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
        break;
}

function handleProcess() {
    try {
        $data = json_decode(file_get_contents('php://input'), true);
        $audioFileId = $data['audio_file_id'] ?? null;
        
        if (!$audioFileId) {
            throw new Exception('audio_file_id is required');
        }
        
        $db = getDBConnection();
        
        // Proveri da li audio fajl postoji
        $stmt = $db->prepare("SELECT * FROM audio_files WHERE id = ?");
        $stmt->execute([$audioFileId]);
        $audioFile = $stmt->fetch();
        
        if (!$audioFile) {
            throw new Exception('Audio file not found');
        }
        
        // Kreiraj processing job
        $stmt = $db->prepare("INSERT INTO processing_jobs (audio_file_id, status, progress) VALUES (?, 'queued', 0)");
        $stmt->execute([$audioFileId]);
        $jobId = $db->lastInsertId();
        
        // Update status audio fajla
        $stmt = $db->prepare("UPDATE audio_files SET status = 'processing' WHERE id = ?");
        $stmt->execute([$audioFileId]);
        
        echo json_encode([
            'status' => 'success',
            'message' => 'Processing job created',
            'data' => [
                'job_id' => $jobId,
                'audio_file_id' => $audioFileId
            ]
        ]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => $e->getMessage()]);
    }
}

function handleGetStatus() {
    try {
        $jobId = $_GET['job_id'] ?? null;
        $audioFileId = $_GET['audio_file_id'] ?? null;
        
        $db = getDBConnection();
        
        if ($jobId) {
            // Dohvati specifični job
            $stmt = $db->prepare("SELECT * FROM processing_jobs WHERE id = ?");
            $stmt->execute([$jobId]);
            $job = $stmt->fetch();
            
            if (!$job) {
                throw new Exception('Processing job not found');
            }
            
            echo json_encode([
                'status' => 'success',
                'data' => $job
            ]);
        } elseif ($audioFileId) {
            // Dohvati sve jobove za audio fajl
            $stmt = $db->prepare("SELECT * FROM processing_jobs WHERE audio_file_id = ? ORDER BY created_at DESC");
            $stmt->execute([$audioFileId]);
            $jobs = $stmt->fetchAll();
            
            echo json_encode([
                'status' => 'success',
                'data' => $jobs
            ]);
        } else {
            // Dohvati sve jobove
            $stmt = $db->query("SELECT pj.*, af.filename FROM processing_jobs pj 
                               LEFT JOIN audio_files af ON pj.audio_file_id = af.id 
                               ORDER BY pj.created_at DESC LIMIT 50");
            $jobs = $stmt->fetchAll();
            
            echo json_encode([
                'status' => 'success',
                'data' => $jobs
            ]);
        }
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => $e->getMessage()]);
    }
}
?>
