let horaVeinteCuatro, horaDoce;

horaVeinteCuatro = prompt("Ingrese la hora en notación de 24 horas:");

if (horaVeinteCuatro >= 0 && horaVeinteCuatro <= 23) {
    if (horaVeinteCuatro >= 12) {
        if (horaVeinteCuatro > 12) {
            horaDoce = horaVeinteCuatro - 12;
            console.log("La hora en notación de 12 horas es:", horaDoce, "p.m.");
        } else {
            console.log("La hora en notación de 12 horas es:", horaVeinteCuatro, "p.m.");
        }
    } else {
        if (horaVeinteCuatro == 0) {
            horaDoce = 12;
        } else {
            horaDoce = horaVeinteCuatro;
        }
        console.log("La hora en notación de 12 horas es:", horaDoce, "a.m.");
    }
} else {
    console.log("Hora inválida. Por favor, ingrese una hora válida.");
}
