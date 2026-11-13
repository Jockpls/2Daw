<?php
class Carrito{
    private $producto;
    private $cantidad;
    public function __construct(array $producto, int $cantidad){
        $this->producto = $producto;
        $this->cantidad = $cantidad;
    }

}