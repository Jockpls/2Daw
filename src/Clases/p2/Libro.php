<?php

class Libro {
    private $titulo;
    private $autor;
    private $prestado;

    public function __construct(string $titulo, string $autor, bool $prestado=false) {
        $this->titulo = $titulo;
        $this->autor = $autor;
    }

    public function getTitulo() : string {
        return $this->titulo;
    }
    public function getAutor() : string {
        return $this->autor;
    }

    public function estaPrestado() : bool {
        return $this->prestado;
    }

    public function prestar(): bool{
        if (!$this->prestado){
            $this->prestado = true;
            return true;
        } else {
            return false;
        }
    }

    public function devolver(): bool{
        if ($this->prestado){
            $this->prestado = false;
            return true;
        } else {
            return false;
        }
    }


    public function obtenerFicha(): string{
        return "Titulo: " . $this->titulo . " Autor: " . $this->autor . " Prestado: " . $this->prestado ? "Prestado" : "Disponible";
    }

}
