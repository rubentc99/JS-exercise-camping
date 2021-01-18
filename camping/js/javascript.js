function calcular() {
    //precios ordenados
    preciosalta = [7.15, 4.1, 7.25, 7.25, 14.5, 7.25, 18, 4];
    preciosbaja = [5.75, 3.5, 5.75, 5.75, 8.5, 5.75, 16, 3];
    //creo variables para capturar los valores que introduzca el usuario
    temporada = document.getElementById('temporada').value;
    dias = document.getElementById('dias').value;
    adultos = document.getElementById('adultos').value;
    ninno = document.getElementById('ninnos').value;
    coche = document.getElementById('coches').value;
    caravana = document.getElementById('caravanas').value;
    autocaravana = document.getElementById('autocaravanas').value;
    tienda = document.getElementById('tiendas').value;
    autocar = document.getElementById('autocares').value;
    moto = document.getElementById('motos').value;
    electricidad = document.getElementById('luz').checked;
    agua = document.getElementById('agua').checked;
    cantidad = [adultos, ninno, coche, caravana, autocaravana, tienda, autocar, moto];
    let precio = 0; //creo la variable que llevará el precio
    //compruebo si la luz y el agua están seleccionados y asigno el precio según estén o no
    if (electricidad == false) {
        luz = 0;
    }else {
        luz = 5;
    }
    if (agua == false) {
        agua = 0;
    }else {
        agua = 3.5;
    }
    //compruebo si la temporada no está seleccionada(0), es alta(1) o es baja(2)
    if (temporada == 0 && dias <= 0) {
        alert("Debe elegir una temporada y el nº de días.");
    }
    if (temporada == 0 && dias > 0) {
        alert("Debe elegir una temporada.");
    }
    if (dias <= 0 && temporada != 0) {
        alert("El número mínimo de días es 1.");
    }

    let contadorError = 0; //variable que lleva el numero de valores menores a 0
    for (let i = 0; i < cantidad.length; i++) {
        if(cantidad[i] < 0){
            contadorError++;
        }
    }
    /*si contador de error es distinto de 0,
    significa que hay algun error, por lo que no me hará el calculo del precio*/
    if(contadorError!=0){
        alert("Los valores introducidos deben ser mayores a 0.")
    }else{
        if (temporada != 0 && dias > 0) { //si la temporada está elegida, y los días son mayores que 0
            if (temporada == 1) { //si la temporada es alta
                for (let i = 0; i < 8; i++) {
                    precio += (dias * (cantidad[i] * preciosalta [i])); //multiplico los dias, por el resultante de la multiplicacion de los arrays
                }
            }else{ //si la temporada es baja
                for (let i = 0; i < 8; i++) {
                    precio += (dias * (cantidad[i] * preciosbaja [i]));
                }
            }
            //compuebo las 2 condiciones concretas, para aplicar o no el descuento
            if (dias > 20) {
                precio = (precio + (precio * 0.1) + luz + agua);
            } else if (temporada = 2 && dias > 10) {
                precio = (precio + (precio * 0.1) + luz + agua);
            } else {
                precio = precio + luz + agua;
            }
            //aplico el iva al precio final
            precioConIva = 0;
            precioConIva = precio + (precio * (0.07));
            //devuelvo la info al documento
            document.getElementById("precioSinIva").innerHTML = ("PRECIO SIN IVA: ") + precio + ("€");
            document.getElementById("precioConIva").innerHTML = ("PRECIO CON IVA: ") + precioConIva + ("€");
        }
    }
}