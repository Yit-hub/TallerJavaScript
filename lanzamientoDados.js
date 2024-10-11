// Simulación de Lanzamiento de Dados 
// ● Descripción: Crea una función que simule el lanzamiento de dos dados (números aleatorios entre 1 y 6). El programa debe contar cuántas veces se obtiene un total de 7 al lanzar los dados 100 veces. 
// ● Requisitos: 
// ○ Usa un bucle for para realizar las simulaciones. 
// ○ Utiliza Math.random() para generar los números aleatorios. 
// ○ Usa una función para encapsular la lógica del lanzamiento de dados. ● Objetivo: Trabajar con números aleatorios, bucles y funciones. 

function lanzamiento(){
    function tirarDados(){
        return Math.floor(Math.random() * 6) + 1;
    }
    var veces7=0;
    for(let i=1;i<=100;i++){
        let a= tirarDados();
        let b= tirarDados();
        if(a+b==7){
            veces7++;
        }
    }
    return veces7;
}
var siete = lanzamiento();
console.log("En 100 lanzamientos de dados, han salido: "+siete+" veces siete");