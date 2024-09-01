let a = [1,2,3,4,5,6,7,8,9,10];

function filtrarPares(a){
    return a.filter(function(a){
        return a%2===0;
    });
    
}

let numerosPares = filtrarPares(a);
console.log(numerosPares);
