<?php
//$ahora = time();
//$caducidad = gmdate("D, d M Y G:i:s", $ahora + 365 * 86440) . " GMT";
//header("Expires: {$caducidad}");



header("Expires: " . gmdate("D, d M Y G:i:s", time() + 60) . " GMT"); //cache-control pisa a expires
header("Last modified: " . gmdate("D, d M Y G:i:s") . " GMT");
header("cache-control: must-revalidate, public");

//si en expires introducimos un valor negativo borramos toda la cache
//privado que no se almacene la respuesta en la caché y publico permite que si se almacene
//no-store y no-cache se usan cuando el modo es privado
//must-revalidate: Obliga al navegador a verificar con el servidor si hay una versión más nueva antes de mostrar una copia guardada.
//max-age=0: Indica que el tiempo máximo que la página es válida es 0 segundos. (Caduca inmediatamente).
//post-check=0, pre-check=0: Son directivas obsoletas que se usaban específicamente para forzar a las versiones antiguas de Internet Explorer a no guardar caché.

?>

