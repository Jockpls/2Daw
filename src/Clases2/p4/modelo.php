<?php
class Direccion{
    public string $ciudad;
    public function __construct(string $ciudad){
        $this->ciudad = $ciudad;
    }

}

class Ficha extends Direccion{
    public string $nombre;

    public function __construct(string $nombre, string $ciudad){
        $this->nombre = $nombre;
        parent::__construct($ciudad);
    }

    public function __toString(){
        return "$this->nombre $this->ciudad";
    }

}