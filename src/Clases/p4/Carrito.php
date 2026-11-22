<?php
class Carrito{

    private array $lineas;

    public function __construct(array $lineas){
        $this->lineas = [];
    }

    public function add(Producto $producto, int $cantidad): bool{
        $codigo = $producto -> getCodigo();
        $stockAlmacen = $producto -> getStock();

        if ($cantidad <= 0 || $cantidad > $stockAlmacen){
            return false;
        }
        
        $cantidadActual = isset($this->lineas[$codigo]) ? $this->lineas[$codigo]['amount'] : 0;
        if ($cantidadActual + $cantidad > $stockAlmacen){
            return false;
        }
        $cantidadFinal = $cantidadActual + $cantidad;
        $this->lineas[$codigo]= [
                'producto' => $producto,
                'amount' => $cantidadFinal
            ];
            return true;
    }

    public function eliminar(string $codigo): bool {
        if (isset($this->lineas[$codigo])){
            unset($this->lineas[$codigo]);
            echo "se elimina";
            return true;
        }
        echo "No se elminia";
        return false;
    }

    public function contarUnidades(): int{
        $contador = 0;
        foreach ($this->lineas as $linea){
            $contador += $linea['amount'];
        }
        return $contador;
    }

    public function calcularTotal(): int{
        $total = 0;
        foreach ($this->lineas as $linea){
            $total += $linea['amount'] * $linea['producto']->getPrecio();
        }
        return $total;
    }






}