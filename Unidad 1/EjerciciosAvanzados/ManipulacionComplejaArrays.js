let arreglo = [1,2,3,4,5,6,7,8,9,10];

function duplicarYFiltrar(array){
let duplicados = array.map(function(numero){
    return numero * 2;
});
let filtrados = duplicados.filter(function(numero){
    return numero > 10;
});
return filtrados;
}

let resultado = duplicarYFiltrar(arreglo);
console.log(resultado);