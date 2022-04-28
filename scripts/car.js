/**
 * Clase para construir coches
 */
class Car {
    /**
     * Constructor de la clase
     * @param model modelo del coche
     */
    constructor(model) {
        this.model = model
            // inicializamos la velocidad a cero
        this.velocity = 0
    }

    // obtenemos la velocidad
    getVelocity() {
        return this.velocity
    }

    // obtenemos el modelo
    getModel() {
        return this.model
    }

    // aumentamos la velocidad en un valor
    // devolvemos el valor para que el controlador se lo pueda pasar el View
    acelerar(valor) {
        this.velocity = this.velocity + valor
        return this.velocity
    }

    // disminuimos la velocidad en un valor
    // devolvemos el valor para que el controlador se lo pueda pasar el View
    frenar(valor) {
        this.velocity = this.velocity - valor
        return this.velocity
    }
}