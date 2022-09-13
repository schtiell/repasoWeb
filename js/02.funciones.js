// Funciones

/**
 * Bloque de codigo que se ejecuta de forma secuencial y realiza una tarea en concreto.
 * Consta de un nombre y su scope está definido por el uso de llaves {}
 * 
 * Declaracion:
 * 
 * function nombre_de_la_funcion (){
 *  
 *  cuerpo de la funcion;
 * 
 * }
 * 
 *  Los nombres de las funciones utilizan el estilo camelCase.
 * 
 *  Utilizar el inglés
 * 
 *  js trabaja con unico hilo, eso quiere decir que no inicia una tarea hasta haber completado la actual.
 * 
 *  Trabaja de forma secuencias
 */

// Declaracion de la función tradicional
function sayHello(){

    console.log("Hello world!!");
}

// Invocar función
sayHello();


// Declaración de función anonima en una variable
let printHello = function () {

    //Retorno de un valor
    return "Hello world from anonimous function!!";
}

// Imprimiendo en consola el resultado retornado por la función anonima
console.log(printHello());


/**
 * Las funciones pueden tener parametros, que son datos enviados la función para que realice su tarea.
 * 
 * */

// Funcion que recibe un nombre para imprimir un mensaje personalizado
let sayMeHello = function (name) {
    console.log(`Hello: ${name}`);
}

sayMeHello('Jst!!');

// name y age son parametros
let printMessage = function (name, age) {
    console.log(`Hello: ${name}, your age is ${age} years old`);
}

//Jsayago y 36 son argumentos
printMessage('Jsayago', 36);


/** Ambito (SCOPE)
 * 
 * Es el conjunto de variables, objetos y funciones a las que se tiene acceso.
 * Existe el ambito global y el ambito local
 * Lo definido fuera de una funcion pertenece al ambito global. Es accesible desde dentro de una funcion.
 * Lo definido dentro de una funcion pertenece al ambito local. Es inaccesible fuera de la función
 */

let saludo = "Hola";

let printScope = function () {
    let mensaje = "Nuevo saludo";
    console.log(saludo);
    console.log(mensaje);
}

printScope();
// console.log(mensaje); // Error: mensaje is not defined. Ya que el scope de la variable es local no global


/**
 * Sentencia de control if else
 */

let compararNumeros = function (numero) {
    if (numero > 5) {
        return true;
    } else {
        return false;
    }
}

console.log(compararNumeros(6));
console.log(compararNumeros(2));
console.log(compararNumeros(5));


/**
 * 
 * Ejercicios
 * 
 **/
 
// Suma de numeros
let sumarNumeros = function (a,b) {  
    return a + b;
}

console.log(sumarNumeros(5,7));


// Concatenar 2 cadenas
let concatenarMensaje = function (cadena1, cadena2) {
    console.log (`El mensaje es: ${cadena1} ${cadena2}!!`);
}

concatenarMensaje("Hola", "Mundo");

//Devuelva true o false si un numero es mayor que otro. Ademas retorne el mayor
let compararNums = function (a,b){
    if (a != b){
        if (a > b){
            console.log(`${a} es mayor`);
        }else{
            console.log(`${a} es mayor`);
        }
        return true;

    }else{
        return false;
    }
}

console.log(compararNums(5,3));
console.log(compararNums(2,2));
console.log(compararNums(4,8));


/**
 * 
 * Arrow functions
 * 
 * Introducidas en ES6 las funciones flecha permiten escribir la sintaxis de una función de manera más corta
 * 
 * Si el cuerpo de una función solo tiene una linea no se ponen las {}
 * 
 * Si es una sola linea no se utiliza la palabra reservada return
 * 
 * Si la funcion no tiene parametros, se ponen los ()
 * 
 * Si la funcion solo tiene un parametro no lleva ()
 * 
 * Si la funcion tienes mas de 2 parametros se ponen los ()
 * 
 */

// Definición de una función tradicional
let funcionAnom = function (){
    return "Hello world from traditional function!!";
}

// Definición de una funcion flechaS
let funcionFlecha = () => "Hello world from Arrow function!!";

console.log(funcionAnom());
console.log(funcionFlecha());

// Funcion flecha con 2 parametros y mas de una linea de cuerpo de la función
let operacionesMath = (a,b) => {
    let resultado = a * b;
    console.log(`El resultado de la multiplicación es: ${resultado}`);
}

operacionesMath(3,4);