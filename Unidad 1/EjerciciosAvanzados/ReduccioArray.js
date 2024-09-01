// Descripción: Escribe una función `contarCaracteres` que reciba un array de strings y devuelva el número total de caracteres de todos los strings utilizando `reduce`.

const contarCaracteres = (array) => {
    return array.reduce((acumulador, valorActual) => acumulador + valorActual.length, 0);
}

console.log(contarCaracteres(['hola', 'mundo', 'en', 'javascript'])); // Output: 17