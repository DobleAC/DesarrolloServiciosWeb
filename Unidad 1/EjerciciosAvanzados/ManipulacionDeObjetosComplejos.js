//Crea un objeto `curso` que contenga propiedades `nombre`, `alumnos` (un array de objetos con propiedades `nombre` y `calificacion`). Escribe una función `calcularPromedio` que calcule el promedio de calificaciones de los alumnos.

const curso = {
    nombre: "JavaScript Avanzado",
    alumnos: [
        { nombre: "Juan", calificacion: 8.5 },
        { nombre: "Pedro", calificacion: 9.2 },
        { nombre: "Maria", calificacion: 7.8 },
    ],
};                                          

function calcularPromedio() {   
    const promedio = (curso.alumnos[0].calificacion + curso.alumnos[1].calificacion + curso.alumnos[2].calificacion)/3;
    return promedio;
}   

console.log(calcularPromedio());        
    