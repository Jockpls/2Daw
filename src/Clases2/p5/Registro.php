<?php
class Registro{
    private const DATOS_PERMITIDOS = ["tema", "idioma"];
    private array $datos = [];


    public static function __callStatic(string $nombre, array $datos): self{
        if($nombre === "crear"){
            return new self();
        }
        throw new BadMethodCallException("No es un campo valido");
    }

    public function __call($nombre, array $argumentos): mixed{
        if($nombre === "obtener" && count($argumentos) === 1 && is_string($argumentos[0])){
            return $this->datos[$argumentos[0]] ?? null;
        }
        throw new BadMethodCallException("Llamada a la instancia no permitida");
    }

    public function __get(string $valor){
        return $this->datos[$valor] ?? null;
    }

    public function __set(string $nombre, mixed $valor): void
    {
        if (!in_array($nombre, self::DATOS_PERMITIDOS, true)) {
            throw new InvalidArgumentException("Faltan campos");
        }
        if (!is_string($valor) || trim($valor) === "") {
            throw new InvalidArgumentException("No me seas pillín");
        }
        $this->datos[$nombre] = trim($valor);
    }
    public function __isset(string $valor): bool{
        return isset($this->datos[$valor]);
    }

    public function __unset(string $valor): void{
        unset($this->datos[$valor]);
    }
    public function __toString(): string{
        return json_encode($this->datos, JSON_UNESCAPED_UNICODE);
    }

    public function __debugInfo(): array{
        return [$this->datos];
    }
    public function __invoke(string $clave):mixed {
        return $this->datos[$clave] ?? null;
    }

    //public function __set_state(array $datos): self{
    //    $obj = new self();
//
//
    //}


}