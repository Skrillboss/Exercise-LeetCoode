// Escribe una función  createCounter. Debería aceptar un número entero inicial  init. Debería devolver un objeto con tres funciones.

// Las tres funciones son:

// increment() aumenta el valor actual en 1 y luego lo devuelve.
// decrement() reduce el valor actual en 1 y luego lo devuelve.
// reset() establece el valor actual  init y luego lo devuelve.


function createCounter(init) {

    let counter = init;

    return {
        increment: function () {

            return ++counter;
        },

        decrement: function () {

            return --counter;
        },

        reset: function () {
            counter = init;
            return counter;
        }
    }
}
const counter = createCounter(5);

counter.increment();
counter.reset();
counter.decrement();
