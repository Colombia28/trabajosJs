let numeroUno, numeroDos, numeroTres, primeraSuma, segundaSuma, terceraSuma;


numeroUno = parseInt(prompt("Ingrese el primer número:"));
numeroDos = parseInt(prompt("Ingrese el segundo número:")); 
numeroTres = parseInt(prompt("Ingrese el tercer número:"));

primeraSuma = numeroUno + numeroDos;
segundaSuma = numeroUno + numeroTres;
terceraSuma = numeroDos + numeroTres;

if (primeraSuma === numeroTres) {
    console.log("La suma del primer número y el segundo coincide con el tercer número");
} else if (segundaSuma === numeroDos) {
    console.log("La suma del primer número y el tercero coincide con el segundo número");
} else if (terceraSuma === numeroUno) {
    console.log("La suma del segundo número y el tercero coincide con el primer número");
} else {
    console.log("Ninguno de los números coincide con la suma de los otros dos");
}
