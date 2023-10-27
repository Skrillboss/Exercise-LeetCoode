// Dada una matriz de enteros arry una función de filtrado fn, devuelve una matriz filtrada filteredArr.

// La fnfunción toma uno o dos argumentos:

// arr[i]- número delarr
// i - índice dearr[i]
// filteredArrsolo debe contener los elementos de los  arrcuales la expresión fn(arr[i], i)se evalúa como un valor verdadero . Un  valor veraz  es un valor donde  Boolean(value) regresa  true.

// Resuélvalo sin el Array.filtermétodo incorporado.

var filter = function (arr, fn) {

    returnedArray = [];

    for (let i = 0; i < arr.length; i++) {

        if (fn(arr[i], i)) {
            returnedArray.push(arr[i]);
        }
    }

    return returnedArray;

};