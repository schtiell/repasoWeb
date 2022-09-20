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
let contarPropiedades = function (dictionary) {
    
    let contador = 0;

    Object.keys(dictionary).forEach( item => contador+=1 );

    console.log(`La cantidad de propiedades del objeto son: ${contador}`);
}

contarPropiedades(persona);

//
let contarPropsDict = function (dict) {
    
    let contador = 0;

    for (i in dict) {
        contador++;
    }

    return contador;
}

console.log(`El arreglo tiene ${contarPropsDict(persona)}`);

// Diccionario/Objeto
let automovil = {
    marca: "Nissan",
    modelo: "Tiguan",
    ano: 2020,
    puertas: 4,
    combustible: "Diesel"
}

//
let uniendoDiccionarios = function (person, auto){

    let diccionarioFinal = {};

    Object.keys(person).forEach( item => {
        diccionarioFinal[item] = person[item];
    })

    Object.keys(auto).forEach(item => {
        diccionarioFinal[item] = auto[item];
    })

    return diccionarioFinal
}

console.log(`diccionarioFinal = ${uniendoDiccionarios(persona,automovil)}`);
console.log(uniendoDiccionarios(persona,automovil));

// Impresión del objeto utilizando plantillas literales
let objetoFinal = uniendoDiccionarios(persona,automovil);
Object.keys(objetoFinal).forEach( item => {
    console.log(`${item} = ${objetoFinal[item]}`);
});

//Juego piedra, papel y tijera
let juego = function (jugador1, jugador2){

    let reglas = {
        piedra : "tijeras",
        papel: "piedra",
        tijeras: "papel"
    }

    //console.log(reglas[jugador1]);

    if (jugador1 === jugador2) {
        console.log("Empate");

    }else if (reglas[jugador1] === jugador2){
        console.log("Jugador1 gana");

    }else{
        console.log("Jugador2 gana");
    }
}

juego('tijeras','piedra');
juego('tijeras','papel');
juego('piedra','tijeras');

// Funcion para generar numero en un rango estipulado
let generarNumerosRango = function (inicio,fin,salto) {

    let arreglo = [];

    if (salto === undefined || salto === 0) {   

        salto = 1;

    } else if (salto > 0) {
        
        for (let i = inicio; i <= fin; i += salto) {
        
            arreglo.push(i);
        }

    } else {

        for (let i = fin; i >= inicio; i += salto) {
        
            arreglo.push(i);
        }
    }

    return arreglo;
}

let resultado = generarNumerosRango(1,8,2);
console.log(resultado);
console.log(generarNumerosRango(10,100,4));
console.log(generarNumerosRango(1,20,-3));

// Funcion para sumar los valores de una array
let sumarValoresArreglos = function (longitud) {
    
    let arreglo = [];

    for (let i = 0; i < longitud; i++) {
        arreglo[i] = Math.round((Math.random()*10));
    }

    console.log(arreglo);
    console.log(`El arreglo generado con numero aleatorios: ${arreglo}`);

    // El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
    let sumaElementosArray = arreglo.reduce((a,b) => a + b,0);
    console.log(`La suma de los elementos dle array es: ${sumaElementosArray}`);
}

sumarValoresArreglos(10);
sumarValoresArreglos(5);

// Filtrando un array
let filtrarArray = function (arreglo) {
    
    let arrayFiltrado = [];

    arrayFiltrado = arreglo.filter(item => {

        if ( typeof(item) === "number") {
            return item;
        }
    })

    // Elevando los elementos numericos filtrados al cubo
    let elementosAlCubo = arrayFiltrado.map(item => Math.pow(item,3));

    //return arrayFiltrado;
    return elementosAlCubo;
}

let arregloFiltrado = filtrarArray([1,3,5,6,'alpha','beta',5,2]);
console.log(arregloFiltrado);

// Saber el numero de elementos repetidos generando un diccionario

let contadorElementosRepetidos = function (arreglo) {
    
    let diccionario = {};

    for (let i = 0; i < arreglo.length; i++) {
        
        if (!diccionario.hasOwnProperty(arreglo[i])){
            diccionario[arreglo[i]] = 0;
        }

        diccionario[arreglo[i]]+=1;
        
    }

    console.log(diccionario);
}

let crearNumsAleatorios = function () {

    let arreglo = new Array(10);

    for (let i = 0;  i < arreglo.length; i++) {
        arreglo[i] = Math.round(Math.random()*10);
    }

    console.log(`Arreglo generado aleatoriamente: ${arreglo}`);

    return arreglo;
}

contadorElementosRepetidos(crearNumsAleatorios());