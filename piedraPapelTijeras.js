/*
Juego de Piedra, Papel o Tijeras
● Descripción: Implementa el clásico juego de "Piedra, Papel o Tijeras" donde el
usuario juega contra la computadora. Usa prompt para recibir la jugada del usuario
y Math.random() para la jugada de la computadora.
● Requisitos:
○ Usa una función switch para determinar el ganador.
○ Controla la lógica de empate, victoria y derrota con una estructura if-else.
○ Añade validaciones para entradas incorrectas.
● Objetivo: Usar funciones, estructuras de control y manejo de entradas aleatorias.*/


jugador = prompt("Introduzca: papel, tijeras o piedra:");
if (jugador == "piedra" || jugador == "papel"||jugador == "tijeras"){
    ganador(jugador,generar());
}else{
    console.log("No has introducido el dato correcto");
}



function generar(){
    let num= Math.floor(Math.random() * 3) + 1; //genera un número aleatorio de 1 a 3 
    switch (num){
        case 1:
            return"piedra";
            break;
        case 2:
            return"papel";
            break;
        default:
            return "tijeras";        
    }
}

function ganador(jugador,maquina){
     if(jugador==maquina){
        console.log("Empate");
     }else{
        if(jugador=="piedra"){
            if(maquina=="tijeras"){
                console.log("Has ganado");
            }else{
                console.log("Has perdido");
            }
        }
        if(jugador=="tijeras"){
            if(maquina=="papel"){
                console.log("Has ganado");
            }else{
                console.log("Has perdido");
            }
        }
        if(jugador=="papel"){
            if(maquina=="piedra"){
                console.log("Has ganado");
            }else{
                console.log("Has perdido");
            }
        }
     }
     console.log("La máquina habia elegido: "+maquina); //Ver información
}