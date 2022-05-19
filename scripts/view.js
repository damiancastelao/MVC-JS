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
        this.debug1.textContent = 'Prueba a ver los objetos: app.model.cars'
        this.debug2 = this.createElement('h2')
        this.debug2.textContent = "Acelera un coche app.aumentaVelocidad('seat',12)"

        // los añado al div raiz
        this.contenedorHTML.append(this.aviso, this.debug1, this.debug2)
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
}