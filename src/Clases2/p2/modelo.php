<?php
interface Canal {
    public function enviar(string $mensaje):string;
}

interface CanalConHistorial extends Canal{
    public function historial(): array;
}

interface Reiniciable {
    public function reiniciar(): void;
}

class CanalMemoria implements CanalConHistorial, Reiniciable {
    private array $mensajes = [];
    public function enviar(string $mensaje):string {
        array_push($this->mensajes, $mensaje);
        return "MEMORIA: " . $mensaje;
    }
    public function historial(): array
    {
        return $this->mensajes;
    }

    function reiniciar(): void {
        $this->mensajes = [];
    }
}

class CanalPantalla implements Canal {
    public function enviar(string $mensaje):string {
        return "PANTALLA: " . $mensaje;
    }
}

class ServiciosAvisos{
    private Canal $canal;

    public function __construct(Canal $canal){
        $this->canal = $canal;
    }

    public function enviar(string $mensaje):string {
        return $this->canal->enviar($mensaje);
    }

}










