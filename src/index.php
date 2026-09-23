<?php 
$script = $_GET['script'] ?? null;

if ($script) {
    $script = basename($script);
    $searchDirs = [
        "../Servidor/60 ejercicios",
        "../Servidor/other_folder",  // Add more directories here
    ];
    
    $filePath = null;
    foreach ($searchDirs as $dir) {
        if (file_exists("$dir/$script.php")) {
            $filePath = "$dir/$script.php";
            break;
        }
    }
    
    if ($filePath) {
        include $filePath;
    } else {
        echo "Script not found: $script";
    }
} else {
    echo "<h1>PHP Scripts Router</h1><ul>";
    
    $searchDirs = [
        "../Servidor/60 ejercicios",
        "../Servidor/other_folder",
    ];
    
    foreach ($searchDirs as $dir) {
        $files = glob($dir . "/*.php");
        foreach ($files as $file) {
            $name = basename($file, ".php");
            echo "<li><a href='?script=$name'>$name</a></li>";
        }
    }
    
    echo "</ul>";
}
?>

