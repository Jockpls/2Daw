<?php
abstract class Envio {

    private $destino;
    protected $peso;
    protected const BASE = 3.0;

    public function __construct(string $destino, float $peso) {
    if (trim($destino) === '' || $peso <= 0 || $peso === '') {
        throw new InvalidArgumentException("Parámetros invalidos.");
    }    
        $this->destino = trim($destino);
        $this->peso = $peso;
        }

    abstract public function coste(): float;

    final public function resumen(): string {
        return "Destino: {$this->destino}, Coste: " . number_format($this->coste(), 2, ',', '.') . "€";
    }

}


class EnvioNormal extends Envio {

    public function coste(): float {
        return self::BASE + 1.5 * $this->peso;
    }

}

final class EnvioUrgente extends EnvioNormal {

    private int $recargo;

    public function __construct(string $destino, float $peso, float $recargo) {
        parent::__construct($destino, $peso);
        if ($recargo < 0) {
            throw new InvalidArgumentException("Recargo no puede ser negativo.");
        }
        $this->recargo = $recargo;
    }

    public function coste(): float {
        return parent::coste() + $this->recargo;
    }
}

function imprimirEnvio(Envio $envio): void {
    echo $envio->resumen() . "\n\n";
}