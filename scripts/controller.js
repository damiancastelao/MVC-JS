/**
 * Clase Controller
 * se encarga de enlazar los datos con la interface de usuario
 * en nuestro caso, enlaza los objetos del Model con el HTML
 * 
 * @field model encargado de los datos
 * @field view encargada del html
 */
class Controller {

    constructor(model, view) {
        // recojemos el objeto que maneja los datos
        this.model = model

        // recojemos el objeto que maneja el html
        this.view = view

        // instanciamos un coche en particular
        // y lo añadimos al array del model
        const fiatNuevo = this.model.addCar("Fiat")

        // construimos los mandos
        this.view.creaMandos(fiatNuevo);

    }

    /* Estos son los manejadores (handle) que se encargan de utilizar el Model */

    /**
     * Acelera el coche, para eso usamos el Model
     * @param modelo coche que queremos acelerar
     * @param valor incremento de velocidad
     */
    handleAumentaVelocidad(modelo, valor) {
        // recojemos el coche que queremos acelerar
        // y utilizamos su método acelerar para cambiar la velocidad
        this.model.getCar(modelo).acelerar(valor)
    }

    /**
     * Frena el coche, para eso usamos el Model
     * @param modelo coche que queremos frenar
     * @param valor decremento de velocidad
     */
    handleDisminuyeVelocidad(modelo, valor) {
        // recojemos el coche que queremos frenar
        // y utilizamos su método frenar para cambiar la velocidad
        this.model.getCar(modelo).frenar(valor)
    }

}

// lanzamos la aplicacion, el objeto app de la clase controller
const app = new Controller(new Model, new View)