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

class Testigo {
    public string $nombre;
    public function __construct(string $nombre){
        $this->nombre = $nombre;
    }
    public function __toString(){
        return "$this->nombre";
    }
    public function __destruct(){
        echo 'Testigo de ' . $this->nombre. ' destruido<br>';
    }
}