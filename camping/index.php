<!DOCTYPE html>
<html>
    <head>
        <link type="text/css" rel="stylesheet" href="./css/style.css">
        <script type="text/javascript" src="./js/javascript.js"></script>
    </head>
    <body>

        <div class="container">
            <h1>PRESUPUESTOS CAMPING</h1>
            <form name="caca">
                <p>Seleccione la temporada:
                    <select name="temporada" id="temporada">
                        <option value="0">...</option>
                        <option value="1">Alta</option>
                        <option value="2">Baja</option>
                    </select>
                </p>
                <p>Nº de días:
                    <input type="number" min="0" id="dias" required>
                <p>Número de adultos:
                    <input type="number" min="1" id="adultos">
                </p>
                <p>Número de niños:
                    <input type="number" min="0" id="ninnos">
                </p>
                <p>Número de coches:
                    <input type="number" min="0" id="coches">
                </p>
                <p>Número de caravanas:
                    <input type="number" min="0" id="caravanas">
                </p>
                <p>Número de autocaravanas:
                    <input type="number" min="0" id="autocaravanas">
                </p>
                <p>Número de tiendas:
                    <input type="number" min="0" id="tiendas">
                </p>
                <p>Número de autocares:
                    <input type="number" min="0" id="autocares">
                </p>
                <p>Número de motos:
                    <input type="number" min="0" id="motos">
                </p>
                <p>
                    ¿Electricidad?
                    <a style="margin-left:20px">Si</a> <input type="checkbox" id="luz" name="gender" value="1"><br>
                </p>
                <p>
                    ¿Agua desagüe?
                    <a style="margin-left:20px">Si</a> <input type="checkbox" id="agua" name="gender" value="1"><br>
                </p>
                <input id="boton" type="button" value="Calcular" onclick="calcular()">
            </form>
            <div id="precioSinIva"></div>
            <div id="precioConIva"></div>
        </div>
    </body>
</html>

<!-- Pide filas y columnas. Esos 2 numeros si o si, deben ser impares
(si es par le sumas 1).
Eso imprimirá un nº de cuadrados de esas dimensiones. La fila y la columna central la
debe pintar de otro color, junto con sus adyacentes. Si clickas en los cuadrados que sobran,
desaparece el cuadrado(solo ese). Al darle al cuadrado pintado, saca aleatoriamente una foto
de un compañero. Cuando se repita la foto de un compañero ganas. Y se pierde si en vez de
salir un compañero, sale una bomba -->

