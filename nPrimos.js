/**
 * Generador de Números Primos
● Descripción: Escribe una función que reciba un número y devuelva un array con
todos los números primos menores o iguales a ese número.
● Requisitos:
○ Usa un bucle anidado para comprobar si un número es primo.
○ Usa una estructura for o while para iterar sobre los números.
○ Utiliza una función isPrime() para verificar si un número es primo.
● Objetivo: Trabajar con bucles anidados y funciones para resolver un problema
matemático.

 */
function generadorPrimos(n){
    if(n>=1){
        for(i=n;i>1;i--){
            if(isPrime(n)){
                console.log(n);
            }
        }
    }else{
        console.log("no hay números primos disponibles");
    }
}

function isPrime(n){

}

generadorPrimos(100);