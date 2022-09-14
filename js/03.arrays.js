/**
 * 
 * Arrays
 * 
 * Es una estructura de datos que permite almacenar mas de un valor
 * 
 * Tiene forma de lista ordenada, puede almacenar tipos primitivos, arrays u objetos
 * 
 * Tienen una propiedad llamada length para conocer su tamaño o longitud
 *  
 */

// Declaración de una variable

let arreglo = [];

console.log(arreglo);
console.log(`El elemento es de tipo: ${typeof arreglo}`);
console.log(`La longitud del arreglo es: ${arreglo.length}`);

arreglo = [1,2,3];

console.log(`La longitud del arreglo es: ${arreglo.length}`);

// Añadir un elemento al final de la lista
let agregarElemento = item => arreglo.push(item);

agregarElemento(4);
console.log(arreglo);

// Quitar el ultimo elemento de un arrelgo
let quitarElemento = () => arreglo.pop();

quitarElemento()
console.log(arreglo);

/**
 * 
 * Iteracion de arreglos
 * 
 * ciclo for
 * 
 */
 
let arregloNumeros = [1,2,3,4,5/*,[a,b,c,d,e]*/,6,7,8,9];

let recorrerArreglo = () => {

    // Ciclo for para recorrer el arreglo
    for (let index = 0; index < arregloNumeros.length; index++) {
        console.log(`Posicio del arrelgo es: ${index}, su valor es: ${arregloNumeros[index]}`);

    //     for (let i = 0; i < arregloNumeros[index].length; i++) {
    //         console.log(`Posicio del arrelgo es: ${i}, su valor es: ${arregloNumeros[index].[i]}`);
    //     }
    }
}

recorrerArreglo();


/**
 * 
 * Ejercicios de arrays
 * 
 */

// Contar el numero de enteros positivos del arreglo

let numeros = [1,3,4,5,-2,-2,-4,false];

let contarPositivos = function () {

    // Definicion de un contador
    let contador = 0;

    for (let i = 0;  i < numeros.length; i++) {
        
        if (numeros[i] > 0) {

            // Incrementando el contador en 1
            contador+=1;
        } 
    }

    return contador;
}

// Ejercicio. Contar el numero de enteros que es divisible entre 2

let numeroDivisible = () => {

    let contador = 0;

    for (let i = 0; i < numeros.length; i++) {
        
        if (Number(numeros[i]) % 2 == 0){
            contador++;
            console.log(numeros[i]%2);
        }
        
    }

    return contador;
}

// Buscar la cantidad de booleanos en el arreglo
let buscarBooleanos = function () {
    
    let contador = 0;

    for (let i = 0; i < numeros.length; i++) {
        
        if( typeof(numeros[i]) === 'boolean'){
            contador+=1;
        }
        
    }

    return contador;
}


console.log(`El arreglo tiene ${contarPositivos()} elementos positivos`);
console.log(`La cantidad de elementos divisibles entre 2 es: ${numeroDivisible()}`);
console.log(`El arreglo tiene ${buscarBooleanos()} elementos de tipo boolean`);