<?php
class Producto {
    private $codigo;
    private$nombre;
    private $precio;
    private $stock;

    public function __construct(string $nombre, string $codigo, int $precio, int $stock){
        $this->codigo = $codigo;
        $this->nombre = $nombre;
        $this->precio = $precio;
        $this->stock = $stock;
    }
    public function getCodigo(): string{
        return $this->codigo;
    }
    public function getNombre(): string{
        return $this->nombre;
    }
    public function getPrecioCentimos(): int{
        return $this->precio;
    }
    public function getStock(): int{
        return $this->stock;
    }

    public function reponer(int $cantidad):bool {
        if($cantidad <= 0) {
            return false;
        } else {
            $this->stock += $cantidad;
            return true;
        }
    }

    public function vender(int $cantidad):bool{
        if($cantidad <= 0) {
            return false;
        } else if ($this->stock < $cantidad) {
            return false;
        } else {
            $this->stock -= $cantidad;
            return true;
        }
    }

    public function calcularValorStock(): int {
        return $this->stock * $this->precio;
    }
}