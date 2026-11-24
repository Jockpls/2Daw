<?php
class Usuario{
    public readonly string $nombre;
    const string ROL = "alumno";
    private static int $contador = 0;

    public function __construct(string $nombre = "Joseca", $contador)
    {
        $this->nombre = $nombre;
        self::$contador++;
    }

    public static function totalCreados(): int{
        return Usuario::$contador;
    }
}