/**
 * 
 * Diccionario
 * 
 * Permiten agrupar datos en forma de clave:valor.
 * A diferencia de un array no es una estructura de datos ordenada.
 * 
 * 
*/

// Definición de un diccionario

let miDiccionario = {
    id: 02314,
    nombre: "Joaquin",
    apellidos: "Sayago",
    altura: 1.72,
    hombre: true
};

// Insertando una clave y un valor al diccionario existente. Notacion de corchete
miDiccionario['color']='Moreno';

// Insertando clave/valor. Notacion de punto
miDiccionario.peso = 80;

console.log(miDiccionario);

// Iterando diccionarios. Forma antigua
console.log("==========================");
console.log("Iterando el objeto");

for (let key in miDiccionario){

    console.log(miDiccionario[key]);
}

// Iterando el diccionario. Nueva forma
console.log("==========================");
console.log(Object.keys(miDiccionario));
console.log(Object.values(miDiccionario));


// Otra forma de obtener las claves de un diccionario
let getKeys = diccionario => {

    let aux =[];

    for (let key in diccionario) {
        aux.push(key);
    }

    return aux;
}

console.log(getKeys(miDiccionario));


// Obteniendo la clave y su valor del diccionario
let getKeysValues = diccionario => {
    
    Object.keys(diccionario).forEach( item => console.log(` ${item} : ${diccionario[item]}`));
}

getKeysValues(miDiccionario);

/**
 * 
 * Ejercicios con diccionarios
 *  
 */

// Crear un objeto con 2 propiedades (nombre y apellido). Imprimir una frase que diga "Hola (nombre aprellido), encantado"
let persona = {
    nombre : "Joaquin",
    apellidos : "Sayago Trujillo"
}

let imprimirDiccionario = function (dictionary) {

   console.log(`Hola ${dictionary.nombre} ${dictionary.apellidos}, encantado!!`);
}

imprimirDiccionario(persona);

// Contar el numero de propiedades que tiene un objeto
s
let contarPropiedades = function (dictionary) {
    
    let contador = 0;

    Object.keys(dictionary).forEach( item => contador+=1 );
}

contarPropiedades(persona);