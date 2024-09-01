let a = [1,2,3,4,5]
function sumarElementos(a){
    let suma = 0;
    for (let i = 0; i < a.length; i++){
        suma+=a[i];
    }
    return suma;
}

let resultado = sumarElementos(a);
console.log(resultado);