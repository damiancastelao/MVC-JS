/**
 * Clase encargada de crear, editar y borrar los elementos del DOM
 */
class View {
    // creamos la vista inicial
    constructor() {
        // recojo el elemento raiz. Un div que contendrá todos los elementos
        this.app = this.getElement('#root')

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
        this.app.append(this.aviso, this.debug1, this.debug2, this.debug3, this.debug4)
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
        const contenedor = this.createElement('div', car.getModel())
        contenedor.innerHTML = '<h2>' + car.getModel() + '<h2>'
        this.app.append(contenedor)
            // cada boton tambien lo identificamos con la clase
            // lo adjuntamos al contenedor
        const acelerarButton = this.createElement('button', 'acelerar')
        acelerarButton.textContent = 'Acelerar'
        const frenarButton = this.createElement('button', 'frenar')
        frenarButton.textContent = 'Frenar'
        contenedor.append(acelerarButton, frenarButton)

    }

    /* Creamos los event listeners para lanzar eventos según interacción con la interface de usuario (HTML)
     * usamos el prefijo 'bind', ya que seran enlaces 
     */

    bindAceleraCoche(handler) {
        this.app.addEventListener('click', event => {
            if (event.target.className === 'acelerar') {
                // recojemos la clase del div contenedor
                // de esta manera tenemos una identificación del mando
                const modelo = event.target.parentElement.className

                // debug
                console.log('Evento acelerar por: ' + event.target.parentElement.className)

                // ejecutamos la funcion que le hemos pasado por referencia
                handler(modelo, 1)
            }
        })
    }

    bindFrenaCoche(handler) {
        this.app.addEventListener('click', event => {
            if (event.target.className === 'frenar') {
                // recojemos la clase del div contenedor
                // de esta manera tenemos una identificación del mando
                const modelo = event.target.parentElement.className

                // debug
                console.log('Evento frenar por: ' + event.target.parentElement.className)

                // ejecutamos la funcion que le hemos pasado por referencia
                handler(modelo, 1)
            }
        })
    }

}