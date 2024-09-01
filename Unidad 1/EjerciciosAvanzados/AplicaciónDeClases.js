//Crea una clase `Coche` con propiedades `marca`, `modelo`, y `año`. Añade un método `describir` que imprima una descripción del coche. Luego, crea instancias de la clase y llama al método `describir` para cada instancia.

class Coche {
    constructor(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }   

    describir() {
        console.log(`La marca del coche es ${this.marca}, el modelo es ${this.modelo} y el año es ${this.anio}.`);
    }   
}

const coche = new Coche('Toyota', 'Corolla', 2020);
coche.describir();  
