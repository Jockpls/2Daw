<?php
class Registro{
    private array $datos;

    public function __construct(private string $tema, private string $idioma)
    {
        if (!$tema || !$idioma) {
            throw new Exception("Faltan campos");
        }
        if (trim($tema) === "" || trim($idioma) === "") {
            throw new InvalidArgumentException("No me seas pillín");
        }
        $this->datos = [$tema, $idioma];
    }

}