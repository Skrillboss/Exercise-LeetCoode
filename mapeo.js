// Dada una matriz de enteros  arr y una función de mapeo  fn, devuelve una nueva matriz con una transformación aplicada a cada elemento.

// La matriz devuelta debe crearse de manera que  returnedArray[i] = fn(arr[i], i).

// Resuélvalo sin el Array.mapmétodo incorporado.

function map(arr, fn) {
    const returnedArray = [];
    for (let i = 0; i < arr.length; i++) {
        returnedArray.push(fn(arr[i], i));
    }
    return returnedArray;
}
