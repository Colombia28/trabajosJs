let vectorOriginal = new Array(5);
let vectorCopia = new Array(5);



for (let i = 0; i < 5; i++) {
    console.log("Ingrese 5 elementos para el vector original:");
    vectorOriginal[i] = prompt(`Ingrese el elemento ${i + 1}:`);
}

console.log("Vector Original:");
for (let i = 0; i < 5; i++) {
    console.log(vectorOriginal[i]);
}

for (let i = 0; i < 5; i++) {
    vectorCopia[i] = vectorOriginal[4 - i];
}

console.log("Vector Copia en Orden Inverso:");
for (let i = 0; i < 5; i++) {
    console.log(vectorCopia[i]);
}
