function cargar(arreglo) {
    arreglo[0] = 10;
    arreglo[1] = 80;
    arreglo[2] = 2000;
    arreglo[3] = 700;
    arreglo[4] = 110;
}

function mayor(arreglo) {
    let mayor = arreglo[0]
    for (let i = 1; i < arreglo.length; i++){
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }
    console.log(mayor)
}

const arreglo = new Array(5)
console.log(arreglo);

cargar(arreglo);
console.log(arreglo);

mayor(arreglo);