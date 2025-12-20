<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once '../config.php';

try {
    // Dobij konekciju sa bazom
    $pdo = getDBConnection();
    
    // GET - Dohvati 10 nasumičnih pitanja sa odgovorima
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $stmt = $pdo->query("
            SELECT q.id, q.question 
            FROM quiz_questions q 
            ORDER BY RAND()
            LIMIT 10
        ");
        $questions = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        $result = [];
        foreach ($questions as $question) {
            $stmt = $pdo->prepare("
                SELECT id, answer_text, is_correct 
                FROM quiz_answers 
                WHERE question_id = ? 
                ORDER BY id
            ");
            $stmt->execute([$question['id']]);
            $answers = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            // Formatiranje za frontend
            $formattedAnswers = [];
            foreach ($answers as $answer) {
                $formattedAnswers[] = [
                    'text' => $answer['answer_text'],
                    'correct' => (bool)$answer['is_correct']
                ];
            }
            
            $result[] = [
                'id' => (int)$question['id'],
                'question' => $question['question'],
                'answers' => $formattedAnswers
            ];
        }
        
        echo json_encode([
            'success' => true,
            'questions' => $result,
            'total' => count($result)
        ]);
        exit();
    }
    
    // POST - Dodaj novo pitanje sa odgovorima
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $data = json_decode(file_get_contents('php://input'), true);
        
        if (!isset($data['question']) || !isset($data['answers']) || count($data['answers']) !== 3) {
            http_response_code(400);
            echo json_encode([
                'success' => false,
                'message' => 'Pitanje mora imati tačno 3 odgovora'
            ]);
            exit();
        }
        
        // Proveri da li tačno jedan odgovor ima is_correct = true
        $correctCount = 0;
        foreach ($data['answers'] as $answer) {
            if (isset($answer['correct']) && $answer['correct'] === true) {
                $correctCount++;
            }
        }
        
        if ($correctCount !== 1) {
            http_response_code(400);
            echo json_encode([
                'success' => false,
                'message' => 'Tačno jedan odgovor mora biti označen kao tačan'
            ]);
            exit();
        }
        
        // Započni transakciju
        $pdo->beginTransaction();
        
        try {
            // Unesi pitanje
            $stmt = $pdo->prepare("INSERT INTO quiz_questions (question) VALUES (?)");
            $stmt->execute([$data['question']]);
            $questionId = $pdo->lastInsertId();
            
            // Unesi odgovore
            $stmt = $pdo->prepare("INSERT INTO quiz_answers (question_id, answer_text, is_correct) VALUES (?, ?, ?)");
            foreach ($data['answers'] as $answer) {
                $isCorrect = isset($answer['correct']) && $answer['correct'] === true ? 1 : 0;
                $stmt->execute([$questionId, $answer['text'], $isCorrect]);
            }
            
            $pdo->commit();
            
            echo json_encode([
                'success' => true,
                'message' => 'Pitanje uspešno dodato',
                'question_id' => (int)$questionId
            ]);
        } catch (Exception $e) {
            $pdo->rollBack();
            throw $e;
        }
        
        exit();
    }
    
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Metoda nije podržana'
    ]);
    
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Greška u bazi podataka: ' . $e->getMessage()
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Greška: ' . $e->getMessage()
    ]);
}
?>
