function startApplicationGUI() {


    let boton0 = document.createElement("input");
    let boton1 = document.createElement("input");
    let boton2 = document.createElement("input");
    let boton3 = document.createElement("input");
    let boton4 = document.createElement("input");
    let boton5 = document.createElement("input");
    let boton6 = document.createElement("input");
    let boton7 = document.createElement("input");
    let boton8 = document.createElement("input");
    let boton9 = document.createElement("input");
    let botonSuma = document.createElement("input");
    let botonResta = document.createElement("input");
    let botonMultiplicacion = document.createElement("input");
    let botonDivision = document.createElement("input");
    let botonIgual = document.createElement("input");
    let botonDecimal = document.createElement("input");
    let botonBorrar = document.createElement("input");
    let display = document.createElement("input");

    let botonesNumericos = [boton0, boton1, boton2, boton3, boton4,
        boton5, boton6, boton7, boton8, boton9]

    let botonesALL = [boton0, boton1, boton2, boton3, boton4,
        boton5, boton6, boton7, boton8, boton9, botonSuma, botonResta, botonMultiplicacion, botonDivision, botonIgual,
        botonDecimal, botonBorrar]

    //todos los botones
    for (let i = 0; i < 17; i++) {
        botonesALL[i].className = "btn";
        botonesALL[i].setAttribute("type", "button");
    }
    //botones numericos
    for (let i = 0; i < 10; i++) {
        botonesNumericos[i].id = `btn${i}`
        botonesNumericos[i].value = i;
    }


    botonSuma.id = "botonSuma";
    botonSuma.value = "+";

    botonResta.id = "botonResta";
    botonResta.value = "-";

    botonMultiplicacion.id = "botonMultiplicacion";
    botonMultiplicacion.value = "*";

    botonDivision.id = "botonDivision";
    botonDivision.value = "/";

    botonIgual.id = "botonIgual";
    botonIgual.value = "=";

    botonDecimal.id = "botonDecimal";
    botonDecimal.value = ".";

    botonBorrar.id = "botonBorrar";
    botonBorrar.value = "C";

    display.id = "display";
    display.setAttribute("disabled", "disabled");




    //Creación de los elementos de layout
    let tabla = document.createElement("table");
    tabla.id = "calc";
    tabla.setAttribute("cellspacing", 1);

    let primeraFila = tabla.insertRow();
    let displaybox = primeraFila.insertCell();
    displaybox.setAttribute("colspan", 3);
    let Clearbox = primeraFila.insertCell();

    posicionarElementoEnTabla(tabla, 0, 0, display);
    posicionarElementoEnTabla(tabla, 0, 1, botonBorrar);


    for (let i = 0; i < 4; i++) {
        let filaActual = tabla.insertRow();

        for (let j = 0; j < 4; j++) {
            filaActual.insertCell();
        }
    }

    // Posicionando elementos en filas y columnas

    posicionarElementoEnTabla(tabla, 1, 0, boton7);
    posicionarElementoEnTabla(tabla, 1, 1, boton8);
    posicionarElementoEnTabla(tabla, 1, 2, boton9);
    posicionarElementoEnTabla(tabla, 1, 3, botonSuma);

    posicionarElementoEnTabla(tabla, 2, 0, boton4);
    posicionarElementoEnTabla(tabla, 2, 1, boton5);
    posicionarElementoEnTabla(tabla, 2, 2, boton6);
    posicionarElementoEnTabla(tabla, 2, 3, botonResta);

    posicionarElementoEnTabla(tabla, 3, 0, boton1);
    posicionarElementoEnTabla(tabla, 3, 1, boton2);
    posicionarElementoEnTabla(tabla, 3, 2, boton3);
    posicionarElementoEnTabla(tabla, 3, 3, botonMultiplicacion);

    posicionarElementoEnTabla(tabla, 4, 0, boton0);
    posicionarElementoEnTabla(tabla, 4, 1, botonDecimal);
    posicionarElementoEnTabla(tabla, 4, 2, botonIgual);
    posicionarElementoEnTabla(tabla, 4, 3, botonDivision);



    for (let i = 0; i < 10; i++) {
        botonesNumericos[i].addEventListener("click", function () { writevalue(this.id) })
    }
    botonSuma.addEventListener("click", function () { writevalue(this.id) });
    botonResta.addEventListener("click", function () { writevalue(this.id) });
    botonMultiplicacion.addEventListener("click", function () { writevalue(this.id) });
    botonDivision.addEventListener("click", function () { writevalue(this.id) });
    botonDecimal.addEventListener("click", function () { writevalue(this.id) });
    botonIgual.addEventListener("click", function () { display.value = eval(display.value); });
    botonBorrar.addEventListener("click", function () { display.value = ""; });

    function writevalue(id) {
        display.value += document.getElementById(id).value;
    }

    //Ubicar los elementos de la interfaz gráfica dentro del layout
    //document.body.appendChild(display);
    document.body.appendChild(tabla);

    function posicionarElementoEnTabla(tablaObj, nroFila, nroColumna, elemento) {
        /*Acceso a una posición específica de la tabla (fila,columna)
        tabla.childNodes[0].childNodes[nroFila]
        tabla.childNodes[0].childNodes[nroFila].childNodes[nroColumna]*/

        //Añade el elemento recibido
        tablaObj.childNodes[0].childNodes[nroFila].childNodes[nroColumna].appendChild(elemento);
    }

}









