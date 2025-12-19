<!DOCTYPE html>
<html>
<head>
    <title>Backend Test</title>
    <style>
        body { font-family: Arial; padding: 20px; }
        .success { color: green; }
        .error { color: red; }
        pre { background: #f4f4f4; padding: 10px; }
    </style>
</head>
<body>
    <h1>Backend Test Page</h1>
    
    <h2>PHP Info:</h2>
    <p class="success">✓ PHP verzija: <?php echo phpversion(); ?></p>
    <p class="success">✓ Server: <?php echo $_SERVER['SERVER_SOFTWARE']; ?></p>
    
    <h2>Test API Links:</h2>
    <ul>
        <li><a href="api/simple-test.php" target="_blank">Simple Test (bez baze)</a></li>
        <li><a href="api/test.php" target="_blank">Test sa bazom</a></li>
        <li><a href="api/audio.php" target="_blank">Audio API</a></li>
    </ul>
    
    <h2>Database Test:</h2>
    <?php
    try {
        $host = 'localhost';
        $port = '8889';
        $db = 'ai_oporavak_zvuka';
        $user = 'root';
        $pass = 'root';
        
        $dsn = "mysql:host=$host;port=$port;dbname=$db;charset=utf8mb4";
        $pdo = new PDO($dsn, $user, $pass);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        echo '<p class="success">✓ Database konekcija uspešna!</p>';
        echo '<p>Ime baze: <strong>' . $db . '</strong></p>';
        
        // Proveri tabele
        $stmt = $pdo->query("SHOW TABLES");
        $tables = $stmt->fetchAll(PDO::FETCH_COLUMN);
        
        if (count($tables) > 0) {
            echo '<p>Tabele u bazi:</p><ul>';
            foreach ($tables as $table) {
                echo "<li>$table</li>";
            }
            echo '</ul>';
        } else {
            echo '<p class="error">⚠️ Nema tabela u bazi. Importuj database.sql!</p>';
        }
        
    } catch (PDOException $e) {
        echo '<p class="error">✗ Greška: ' . $e->getMessage() . '</p>';
        echo '<p>Proveri:</p>';
        echo '<ul>';
        echo '<li>Da li je MySQL pokrenut u MAMP-u?</li>';
        echo '<li>Da li je kreirana baza: <strong>ai_oporavak_zvuka</strong>?</li>';
        echo '<li>Da li je MySQL port: <strong>8889</strong>?</li>';
        echo '</ul>';
    }
    ?>
    
    <h2>Project Structure:</h2>
    <pre><?php
    echo "Current directory: " . __DIR__ . "\n";
    echo "\nFiles in this directory:\n";
    $files = scandir(__DIR__);
    foreach ($files as $file) {
        if ($file != '.' && $file != '..') {
            echo "  - $file\n";
        }
    }
    ?></pre>
</body>
</html>
