// Utiliza el paquete lodash para encontrar la intersección de dos arrays y ordenarlos de manera ascendente. Instrucciones:Instala lodash usando npm: npm install lodash.Escribe una función interseccionYOrdenar que reciba dos arrays y devuelva un array con la intersección de ambos, ordenado de manera ascendente.

const interseccionYOrdenar = (array1, array2) => {
    const interseccion = _.intersection(array1, array2);
    return _.sortBy(interseccion);
}

console.log(interseccionYOrdenar([1, 2, 3], [3, 2, 1])); // Output: [1, 2, 3]   
