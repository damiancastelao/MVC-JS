/**
 * Clase encargada de crear, editar y borrar los elementos del DOM
 */
class View {
    // creamos la vista inicial
    constructor() {
        // recojo el elemento raiz. Un div que contendrá todos los elementos
        this.app = this.getElement('#root')
            // creo un elemento de tipo h1
        this.aviso = this.createElement('h1', 'orange')
            // le pongo contenido al elemento
        this.aviso.textContent = 'Mira en la consola (<h1> creado en el View)'
        this.debug = this.createElement('h2')
        this.debug.textContent = 'Prueba a ver los objetos: app.fiat, app.citroen, app.view'
            // los añado al div raiz
        this.app.append(this.aviso)
        this.app.append(this.debug)
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