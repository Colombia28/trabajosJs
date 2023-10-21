let matriz = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

let sumaFilas = [];
let sumaColumnas = [];

// Sumar elementos por fila
for (let fila = 0; fila < 3; fila++) {
    let sumaFila = 0;
    for (let columna = 0; columna < 4; columna++) {
        sumaFila += matriz[fila][columna];
    }
    sumaFilas.push(sumaFila);
}

// Sumar elementos por columna
for (let columna = 0; columna < 4; columna++) {
    let sumaColumna = 0;
    for (let fila = 0; fila < 3; fila++) {
        sumaColumna += matriz[fila][columna];
    }
    sumaColumnas.push(sumaColumna);
}

// Mostrar resultados
console.log("Suma de elementos por fila:");
for (let fila = 0; fila < 3; fila++) {
    console.log("Fila", fila + 1, ":", sumaFilas[fila]);
}

console.log("Suma de elementos por columna:");
for (let columna = 0; columna < 4; columna++) {
    console.log("Columna", columna + 1, ":", sumaColumnas[columna]);
}
