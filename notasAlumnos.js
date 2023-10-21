let notas = new Array(5);
let sumaNotas = 0;
let notaMaxima, notaMinima;

alert("Ingrese las 5 notas del alumno:");

for (let i = 0; i < 5; i++) {
    notas[i] = parseFloat(prompt(`Ingrese la nota ${i + 1}:`));
    if (notas[i] < 0 || notas[i] > 10) {
        alert("Error: La nota debe estar entre 0 y 10. Ingrese nuevamente:");
        //console.log("Error: La nota debe estar entre 0 y 10. Ingrese nuevamente:");
        i--;  
    } else {
        sumaNotas += notas[i];
    }
}

notaMaxima = notas[0];
notaMinima = notas[0];

console.log("Las notas del alumno son:");
for (let i = 0; i < 5; i++) {
    console.log(notas[i]);
    if (notas[i] > notaMaxima) {
        notaMaxima = notas[i];
    }
    if (notas[i] < notaMinima) {
        notaMinima = notas[i];
    }
}

console.log("La nota promedio del alumno es:", sumaNotas / 5);
console.log("La nota más alta del alumno es:", notaMaxima);
console.log("La nota más baja del alumno es:", notaMinima);


