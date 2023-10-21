let numeroUno, numeroDos, numeroTres, resultado;

numeroUno = parseFloat(prompt("Inserte el primer Numero: "));
numeroDos = parseFloat(prompt("Inserte el segundo Numero: "));
numeroTres = parseFloat(prompt("Inserte el tercero Numero: "));

if (numeroUno > 0) {
    producto = numeroDos * numeroTres;
    console.log("El producto del segundo y tercer número es:", producto);
} else {
    resultado = numeroUno + numeroDos + numeroTres;
    console.log("La suma de los números es:", resultado);
}
