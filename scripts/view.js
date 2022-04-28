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
        this.debug1.textContent = 'Prueba crear un coche, mandos y que todo funcione'


        // los añado al div raiz
        this.app.append(this.aviso, this.debug1)
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

    /**
     * Cada vez que creamos un coche vamos a crear un mando
     * serán dos botones uno para acelerar, otro para frenar
     * Usamos desestructuración, ya que solo necesitamos el 'model'
     * @param {Car} car coche del que queremos crear el mando
     */

    creaMandos({ model }) {
        // creamos un contenedor para los dos botones
        // utilizamos el modelo del coche como clase, asi lo tenemos identificado
        const contenedor = this.createElement('div', model)
        contenedor.innerHTML = '<h2>' + model + ' - velocidad: <span>0</span><h2>'
        this.app.append(contenedor)
            // cada boton tambien lo identificamos con la clase
            // lo adjuntamos al contenedor
        const acelerarButton = this.createElement('button', 'acelerar')
        acelerarButton.textContent = 'Acelerar'
        const frenarButton = this.createElement('button', 'frenar')
        frenarButton.textContent = 'Frenar'
        contenedor.append(acelerarButton, frenarButton)

    }

    /**
     * Creamos los event listeners para lanzar eventos según interacción con la interface de usuario(HTML) 
     *  usamos el prefijo 'bind', ya que seran enlaces 
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

    /**
     * Mostramos la velocidad
     * @param model coche del que queremos mostrar la velocidad
     * @param velocity nueva velocidad
     */

    displayVelocity(model, velocity) {
        // recojemos el elemento para actualizar la velocidad
        const spanVelocity = this.getElement('.' + model + ' span')
        spanVelocity.textContent = velocity
    }

}