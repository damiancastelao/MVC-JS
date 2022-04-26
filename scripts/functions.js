/**
 * Creamos un coche, un modelo en concreto
 * @param model tipo de coche
 */
function creaCoche(model) {
    // crea un coche
    return new Car(model);
}

/**
 * Acelerar el coche
 * @param {Car} car coche que queremos acelerar
 * @param valor incremento de velocidad
 */
function aumentaVelocidad(car, valor) {
    car.acelerar(valor)
}

/**
 * Frena el coche
 * @param {Car} car coche que queremos frenar
 * @param valor decremento de velocidad
 */
function disminuyeVelocidad(car, valor) {
    car.frenar(valor)
}

/**
 * Función principal
 */
function controller() {
    // instanciamos un coche en particular
    fiat = creaCoche("Fiat")

    // aumentamos la velocidad
    aumentaVelocidad(fiat, 2)
    console.log(fiat.getModel() + ": " + fiat.getVelocity())
    aumentaVelocidad(fiat, 5)
    console.log(fiat.getModel() + ": " + fiat.getVelocity())

    // instanciamos otro coche
    citroen = creaCoche("Citroen")
        // aumentamos la velocidad
    aumentaVelocidad(citroen, 10)
    console.log(citroen.getModel() + ": " + citroen.getVelocity())

    // disminuimos la velocidad del fiat
    disminuyeVelocidad(fiat, 3)
    console.log(fiat.getModel() + ": " + fiat.getVelocity())

}

// lanzamos la aplicacion, la función controller
const app = controller()