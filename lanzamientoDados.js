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