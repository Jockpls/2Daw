<?php
class Rectangulo {
    private int $base;
    private int $altura;

    public function __construct(int $base, int $altura) {
        $this->base = $base;
        $this->altura = $altura;
    }

    public function getBase() : int {
        return $this->base;
    }
    public function getAltura() : int {
        return $this->altura;
    }

    public function calcularArea(): int {
        return $this->base * $this->altura;
    }

    public function calcularPerimetro(): int {
        return ($this->base + $this->altura) * 2;
    }

    public function cambiarMedidas($base, $altura): bool {
        if ($base > 0 && $altura > 0) {
            $this->base = $base;
            $this->altura = $altura;
            return true;
        } else {
            return false;
        }
    }
}