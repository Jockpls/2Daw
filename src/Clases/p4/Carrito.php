<?php
class Carrito{

    private array $lineas;

    public function __construct(array $lineas){
        $this->lineas = [];
    }

    public function add(Producto $producto, int $cantidad): bool{
        $codigo = $producto -> getCodigo();

        if($cantidad <= 0 || $cantidad > $producto->getStock()){
            return false;
        } else if (isset($this->lineas[$codigo])){
            $producto->vender($cantidad);
            $this->lineas[$codigo]['stock'] += $cantidad;
            return true;
        } else {
            $producto->vender($cantidad);
            $this->lineas[$codigo] = [
                'codigo' => $codigo,
                'stock' => $cantidad
            ];
            return true;
        }
    }

    public function eliminar(Producto $producto, $cantidad): bool {
        $codigo = $producto -> getCodigo();

        if (isset($this->lineas[$codigo]) && $cantidad > 0 && $this->lineas[$codigo]['stock'] <= $cantidad) {
            $producto->reponer($cantidad);
            unset($this->lineas[$codigo]);
            return true;
        }else if ($cantidad > 0 && $this->lineas[$codigo]['stock'] > $cantidad) {
            $producto->reponer($cantidad);
            return true;
        } else {
            return false;
        }
    }

    public function contarUnidades(): int{
        $contador = 0;
        foreach ($this->lineas as $linea){
            $contador += $linea['stock'];
        }
        return $contador;
    }

    public function calcularTotal(): int{
        $total = 0;
        foreach ($this->lineas as $linea){
            $total += $linea['stock'];
        }
        return $total;
    }






}