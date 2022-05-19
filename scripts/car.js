/**
 * Clase para construir coches
 */
class Car {
    /**
     * Constructor de la clase
     * @param marca del coche
     */
    constructor(marca) {
        this.marca = marca
            // inicializamos la velocidad a cero
        this.velocity = 0
    }

    // obtenemos la velocidad
    getVelocity() {
        return this.velocity
    }

    // obtenemos el modelo
    getMarca() {
        return this.marca
    }

    // aumentamos la velocidad en un valor
    acelerar(valor) {
        this.velocity = this.velocity + valor
    }

    // disminuimos la velocidad en un valor
    frenar(valor) {
        this.velocity = this.velocity - valor
    }
}