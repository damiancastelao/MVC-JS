/**
 * La clase Model es la encargada de almacenar los datos y de modificarlos
 */
class Model {
    constructor() {
        // un arrays de coches van a ser nuestros datos
        // lo inicializamos con un coche
        this.cars = [
            new Car('seat'),
        ]
    }

    // Añadimos un coche a nuestro array
    addCar(marca) {
        this.cars.push(new Car(marca))
    }

    // obtenemos un coche según el modelo
    getCar(marca) {
        // buscando en el array el objeto
        // cuya propiedad marca coincida con el parámetro que le estamos pasando
        return this.cars.find(_car => _car.marca === marca)
    }

}