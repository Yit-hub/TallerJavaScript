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
    if(n>1){
        for(i=n;i>1;i--){
            if(isPrime(n)){
                console.log(n);
            }
        }
    }else{
        console.log("no hay números primos disponibles");
    }
}

function isPrime(num){
    if (num <=1) {
        return false;
    }else if (num<=3) {
        return true;        
    }
    if(num%2==0||num%3==0){
        return false;
    }
    let i = 5;
    while (i*i<=num){
        if(num % i == 0 || num % (i+2)==0){
            return false;
        }
        i+=6;
    }
    return true;
    
}

generadorPrimos(11);