/**
 * Clase Controller
 * se encarga de enlazar los datos con la interface de usuario
 * en nuestro caso, enlaza los objetos Car con el HTML
 * 
 * @field fiat un coche en concreto
 * @field citroen otro coche en concreto
 */
class Controller {

    constructor() {


        // instanciamos un coche en particular
        this.fiat = this.creaCoche("Fiat")

        // aumentamos la velocidad
        this.aumentaVelocidad(this.fiat, 2)
        console.log(this.fiat.getModel() + ": " + this.fiat.getVelocity())
        this.aumentaVelocidad(this.fiat, 5)
        console.log(this.fiat.getModel() + ": " + this.fiat.getVelocity())

        // instanciamos otro coche
        this.citroen = this.creaCoche("Citroen")
            // aumentamos la velocidad
        this.aumentaVelocidad(this.citroen, 10)
        console.log(this.citroen.getModel() + ": " + this.citroen.getVelocity())

        // disminuimos la velocidad del fiat
        this.disminuyeVelocidad(this.fiat, 3)
        console.log(this.fiat.getModel() + ": " + this.fiat.getVelocity())

    }

    /**
     * Creamos un coche, un modelo en concreto
     * @param model tipo de coche
     */
    creaCoche(model) {
        // crea un coche
        return new Car(model);
    }

    /**
     * Acelerar el coche
     * @param {Car} car coche que queremos acelerar
     * @param valor incremento de velocidad
     */
    aumentaVelocidad(car, valor) {
        car.acelerar(valor)
    }

    /**
     * Frena el coche
     * @param {Car} car coche que queremos frenar
     * @param valor decremento de velocidad
     */
    disminuyeVelocidad(car, valor) {
        car.frenar(valor)
    }

}

// lanzamos la aplicacion, el objeto app de la clase controller
const app = new Controller()