function operacion(num1, num2, callback){
    return callback(num1,num2);
}

function suma(a,b){
    return(a+b);
}

function resta(a,b){
    return(a-b);
}

function multiplicacion(a,b){
    return(a*b);
}

function division(a,b){
    return a/b;
}

console.log(operacion(5,2,suma));
console.log(operacion(5,2,resta));
console.log(operacion(5,2,multiplicacion));
console.log(operacion(5,2,division));