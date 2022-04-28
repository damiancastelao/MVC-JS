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

    /**
     * Añadimos un coche a nuestro array
     * @param model identificacion del coche
     * @return {Car} objeto coche creado
     */
    addCar(model) {
        const newCar = new Car(model)
        this.cars.push(newCar)
        return newCar
    }

    // obtenemos un coche según el modelo
    getCar(model) {
        // buscando en el array el objeto
        // cuya propiedad model coincida con el parámetro que le estamos pasando
        return this.cars.find(_car => _car.model === model)
    }

}