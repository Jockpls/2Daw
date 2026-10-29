<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $tipo = $_GET["tipo"] ?? null;
    switch ($tipo) {
        case "html":
        header("content-type: text/html, charset=utf-8");
            echo '
            <!DOCTYPE html>
            <h1>Hola, soy Joseca</h1>
            </html>';
        ;
        break;
        case "json":
        header("content-type: application/json, charset=utf-8");
            echo json_encode([
                "name"=> "Joseca",
                "tipo"=> "pringao"
            ], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE); //Flags separadas por pipes
        break;
        case "texto":
            header("content-type: text/plain, charset=utf-8");
            echo "Soy Joseca";
            break;

        default:
        http_response_code(400);
        echo "Error 400, petición o parametro incorrectos";
    }
}
//Sin las cabeceras indicando el tipo de contenido que devuelven, el navegador las devuelve como texto html
?>