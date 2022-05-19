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
        this.model.addCar("fiat")

    }

    /**
     * Acelera el coche, para eso usamos el Model
     * @param marca coche que queremos acelerar
     * @param valor incremento de velocidad
     */
    aumentaVelocidad(marca, valor) {
        this.model.getCar(marca).acelerar(valor)
    }

    /**
     * Frena el coche, para eso usamos el Model
     * @param mmarca coche que queremos frenar
     * @param valor decremento de velocidad
     */
    disminuyeVelocidad(marca, valor) {
        this.model.getCar(marca).frenar(valor)
    }

}

// lanzamos la aplicacion, el objeto app de la clase controller
const app = new Controller(new Model, new View)