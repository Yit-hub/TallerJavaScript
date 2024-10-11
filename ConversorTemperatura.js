/**
 * ● Descripción: Crea una función que convierta una temperatura dada en grados
Celsius a Fahrenheit y viceversa. Usa el parámetro de una función para determinar
la dirección de la conversión.
● Requisitos:
○ Usa switch para elegir entre las conversiones.
○ Utiliza typeof para verificar que las entradas sean números.
○ Añade manejo de errores para valores no válidos usando try...catch.
● Objetivo: Trabajar con parámetros, manejo de tipos y estructuras de control.
 */

function conversorTemperatura(grado,tipo){
   
switch (tipo){  
    case "Tipo1":
        return (grado *9/5 ) +32;
        break;
    case "Tipo2":
        return (grado - 32)*5/9;
        break;
    default:
        return -1;
}
}
console.log(conversorTemperatura(12,"Tipo1"));