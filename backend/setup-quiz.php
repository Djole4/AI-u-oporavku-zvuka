<?php
// Script za kreiranje tabela i ubacivanje podataka za kviz

// Database config
define('DB_HOST', 'localhost');
define('DB_PORT', '8889');
define('DB_NAME', 'ai_oporavak_zvuka');
define('DB_USER', 'root');
define('DB_PASS', 'root');

try {
    echo "Povezivanje sa bazom...\n";
    
    $dsn = "mysql:host=" . DB_HOST . ";port=" . DB_PORT . ";dbname=" . DB_NAME . ";charset=utf8mb4";
    $pdo = new PDO($dsn, DB_USER, DB_PASS);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Kreiranje tabela
    echo "\nKreiranje tabela...\n";
    
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS quiz_questions (
            id INT AUTO_INCREMENT PRIMARY KEY,
            question TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci
    ");
    echo "✓ Tabela quiz_questions kreirana\n";
    
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS quiz_answers (
            id INT AUTO_INCREMENT PRIMARY KEY,
            question_id INT NOT NULL,
            answer_text TEXT NOT NULL,
            is_correct BOOLEAN DEFAULT FALSE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (question_id) REFERENCES quiz_questions (id) ON DELETE CASCADE
        ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci
    ");
    echo "✓ Tabela quiz_answers kreirana\n";
    
    // Proveri da li već postoje pitanja
    $stmt = $pdo->query("SELECT COUNT(*) FROM quiz_questions");
    $count = $stmt->fetchColumn();
    
    if ($count > 0) {
        echo "\n⚠️  Baza već sadrži $count pitanja. Želite li da ih obrišete i ubacite nova? (y/n): ";
        $handle = fopen("php://stdin", "r");
        $line = fgets($handle);
        if (trim($line) !== 'y') {
            echo "Operacija otkazana.\n";
            exit(0);
        }
        
        echo "Brisanje postojećih podataka...\n";
        $pdo->exec("DELETE FROM quiz_answers");
        $pdo->exec("DELETE FROM quiz_questions");
        echo "✓ Podaci obrisani\n";
    }
    
    echo "\nUbacivanje pitanja...\n";
    
    // Čitaj i izvršavaj SQL fajl
    $sqlFile = __DIR__ . '/quiz-data.sql';
    if (!file_exists($sqlFile)) {
        throw new Exception("Fajl quiz-data.sql ne postoji!");
    }
    
    $sql = file_get_contents($sqlFile);
    $pdo->exec($sql);
    
    // Proveri broj ubačenih pitanja
    $stmt = $pdo->query("SELECT COUNT(*) FROM quiz_questions");
    $count = $stmt->fetchColumn();
    
    echo "\n✓ Uspešno ubačeno $count pitanja!\n";
    
    $stmt = $pdo->query("SELECT COUNT(*) FROM quiz_answers");
    $answerCount = $stmt->fetchColumn();
    
    echo "✓ Uspešno ubačeno $answerCount odgovora!\n";
    
    echo "\n🎉 Setup završen uspešno!\n";
    
} catch (PDOException $e) {
    echo "\n❌ Greška u bazi: " . $e->getMessage() . "\n";
    exit(1);
} catch (Exception $e) {
    echo "\n❌ Greška: " . $e->getMessage() . "\n";
    exit(1);
}
?>
