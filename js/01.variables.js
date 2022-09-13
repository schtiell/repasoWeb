
// Definicion de variables


// Let declara variables de ambito global o local. No pueden ser declaradas nuevamente dentro del ambito en el que sean usadas. Solo pueden ser actualizado su valor.

let mi_variable = 0;

/**
 *  let saludo = "Hola";
 * 
 *  function saludar (){
 * 
 *      let saludo = "Hola nuevamente !!!!";
 * 
 *      console.log (saludo); // Salida: Hola nuevamente !!!!
 * 
 *   }
 * 
 *  console.log(saludo); // Salida: Hola
 * 
 * **/

// Las variables declaradas con const mantienen valores constantes. No pueden modificarse ni volver a declararse
const mi_varible1 = 0;




// Var declara variables de ambito global o local. Pueden ser declaradas multiples veces en el mismo codico pero su valor será reemplazado.

var mi_variable2 = 0;

/**
 * var saludo = "Hola";
 * 
 * function saludar (){
 * 
 *      var saludo = "Nuevamente saludando"
 * }
 * 
 * console.log(saludo); // Salida: "Nuevamente saludando"
 * 
 **/

// Tipos de datos primivitivos
let numero = 1; //Number
let cadena = "Texto"; //String
let boleano = true; //Boolean
let flotante = 1.2; //Float

// Otros tipos
let nulo = null; //Valor vacio, variable sin valor;
let indefinida = undefined; // Variable declarada sin asignarse valor;

// Operadores

/**
 *  + suma
 *  - resta
 *  * multiplicacion
 *  / division
 *  % resto o modulo
 *  ++ incremento en 1
 *  -- decremento en 1
 *  > mayor
 *  >= mayor o igual que
 *  = igual
 *  == comparacion
 *  < menor
 *  <= menor o igual que
 *  != negacion
 *  === exactamente igual (valor y tipo de dato)
 *  !==  diferente de (valor y tipo de dato)
 *  && and
 *  || o
 * 
*/

// Concatenar cadenas
let cadena1 = "Hello";
let cadena2 = "World!!";

// Mensajes por consola
console.log("El saludo de ambas variables es: " + cadena1 + " " + cadena2);
console.log(`El salido de ambas variables es: ${cadena1} ${cadena2}`); 

// Comentarios:

/* Ejemplo 
de
comentario
multilinea */





