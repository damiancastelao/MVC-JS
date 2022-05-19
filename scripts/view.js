/**
 * Clase encargada de crear, editar y borrar los elementos del DOM
 */
class View {
    // creamos la vista inicial
    constructor() {
        // recojo el elemento raiz. Un div que contendrá todos los elementos
        this.contenedorHTML = this.getElement('#root')

        // creo elemento y le pongo contenido
        this.aviso = this.createElement('h1', 'orange')
        this.aviso.textContent = 'Utiliza la consola'
        this.debug1 = this.createElement('h2')
        this.debug1.textContent = 'Prueba crear un coche:'
        this.debug2 = this.createElement('p')
        this.debug2.textContent = 'const nuevo = app.model.addCar("Beach")'
        this.debug3 = this.createElement('h2')
        this.debug3.textContent = "Luego crea los mando de ese coche:"
        this.debug4 = this.createElement('p')
        this.debug4.textContent = 'app.view.creaMandos(nuevo)'

        // los añado al div raiz
        this.contenedorHTML.append(this.aviso, this.debug1, this.debug2, this.debug3, this.debug4)
    }

    /**
     * Crea un elemento, opcionalmente con una clase
     * @param tag etiqueta del elemento a crear
     * @param className estilo de la etiqueta
     * @return el elemento creado
     */

    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)

        return element
    }

    /**
     * Retorna el primer elemento que coincide con la búsqueda
     * @param selector elemento que queremos recuperar
     * @returns 
     */
    getElement(selector) {
        const element = document.querySelector(selector)

        return element
    }

    // Cada vez que creamos un coche vamos a crear un mando
    // serán dos botones uno para acelerar, otro para frenar

    creaMandos(car) {
        // creamos un contenedor para los dos botones
        // utilizamos el modelo del coche como clase, asi lo tenemos identificado
        const contenedor = this.createElement('div', car.getMarca())
        contenedor.innerHTML = '<h2>' + car.getMarca() + '<h2>'
        this.contenedorHTML.append(contenedor)
            // cada boton tambien lo identificamos con la clase
            // lo adjuntamos al contenedor
        const acelerarButton = this.createElement('button', 'acelerar')
        acelerarButton.textContent = 'Acelerar'
        const frenarButton = this.createElement('button', 'frenar')
        frenarButton.textContent = 'Frenar'
        contenedor.append(acelerarButton, frenarButton)

    }

    /** 
     * Este metodo lo lanzamos en el constructor del Controller
     * Creamos los event listeners para lanzar eventos
     * Vamos a usar el evento "click"
     * El listener está en el elemento contenedorHTML, que contiene todos los elementos 
     * Por lo tanto función del listener se ejecutará siempre que el usuario 
     * haga un click en un elemento, en un elemento cualquiera 
     * usamos el prefijo 'bind', ya que sera un enlace entre el controller y el listener 
     * @param handler función que le pasamos desde el controller
     */

    bindAceleraCoche(handler) {
        this.contenedorHTML.addEventListener(
            // evento que vamos a observar
            'click',
            // función que vamos a lanzar al hacer 'click'
            // recibe como parametro el evento 
            // con este objeto (event) podremos distinguir donde el usuario hizo click
            function(event) {
                // debug: mostramos el event que recibe el listener
                console.log(event)

                // si la clase del elemento es "acelerar" 'algo'
                // podríamos en este listener tener todas las funcionalidades
                if (event.target.className === 'acelerar') {
                    // recojemos la clase del div contenedor
                    // de esta manera tenemos una identificación del mando
                    const marca = event.target.parentElement.className

                    // debug, para poder ver donde el usuario hace click
                    console.log('Evento acelerar por: ' + event.target.parentElement.className)

                    // ejecutamos la funcion que le hemos pasado por referencia
                    // Esta funcion se la estamos pasando desde el controller
                    handler(marca, 1)
                }
            }
        )
    }

    /**
     * Lo mismo que la anterior pero sin arrow functions
     * @param {*} handler funcion pasada por el controller
     */
    bindFrenaCoche(handler) {
        this.contenedorHTML.addEventListener('click', event => {
            if (event.target.className === 'frenar') {
                // recojemos la clase del div contenedor
                // de esta manera tenemos una identificación del mando
                const marca = event.target.parentElement.className

                // debug
                console.log('Evento frenar por: ' + event.target.parentElement.className)

                // ejecutamos la funcion que le hemos pasado por referencia
                handler(marca, 1)
            }
        })
    }

}