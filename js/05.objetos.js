/**
 * 
 * Objetos js
 * 
 * Se definen de la misma manera que los diccionarios
 * Un diccionario es un objeto
 * Los objetos tienen propiedades y métodos
 * 
 */

// Ejemplo de objeto

let miObjeto = {

    // propiedades del objeto
    nombre: 'Joaquin',
    apellido: 'Sayago',
    edad: 36,

    // metodos del objeto
    imprimirTarjeta: function () {
        console.log(`Los datos del objeto son: ${this.nombre} ${this.apellido} y tiene ${this.edad} años`);
    }
}

miObjeto.imprimirTarjeta();


/**
 * 
 * Métodos Constructores
 * Es un metodo especial para crear e inicializar un objeto creado a partir de una clase.
 * La primera letra es en Mayuscula
 */

//Definicion de un metodo constructor
let Jugador = function (nombre, posicion){

    this.nombre = nombre,
    this.posicion = posicion,

    this.getInfo = function () {
        return `El nombre del jugador es: ${this.nombre} y su posicón es: ${this.posicion}`;
    }
}

let cristianoR = new Jugador('Cristiano Ronaldo', 'Delantero');
let lionelM = new Jugador('Lionel Messi', 'Delantero');
let icasillas = new Jugador('Iker Casillas', 'Portero');

console.log(cristianoR.getInfo());
console.log(lionelM.getInfo());
console.log(icasillas.getInfo());

console.log(" ======================================== ");

// Ejercicio de métodos constructores
let Persona = function (name, lastname, phone, street, num, city) {
    this.nombre = name,
    this.apellido = lastname,
    this.telefono = phone,
    this.direccion = {
        calle: street,
        numero: num,
        ciudad: city
    },

    this.printAllInfo = () => console.log(`Nombre: ${this.nombre} ${this.apellido}, tel: ${this.telefono}`),

    this.printOnlyAddress = () => console.log(`La direccion de ${this.nombre} es: ${this.direccion.calle} ${this.direccion.numero}, ${this.direccion.ciudad}`)
};

//Instancias del método
let persona1 = new Persona('Jorge', 'Hernandez', '2281828384','Av. Ruiz Cortinez', 10, 'Xalapa Ver');
persona1.printAllInfo();
persona1.printOnlyAddress();

let persona2 = new Persona('Luiza', 'Gonzalez', 'Fraccionamiento Issste, Orizaba Ver, Mex');
//persona2.printOnlyAddress();