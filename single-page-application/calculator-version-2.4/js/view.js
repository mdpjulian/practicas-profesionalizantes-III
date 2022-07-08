import {CalculatorController} from './controller.js'

class CalculatorView extends HTMLElement {
    constructor(model) {
        super();

        this.innerModel = model;
		this.innerController = new CalculatorController(this,this.innerModel);


        this.boton0 = document.createElement("input");
        this.boton1 = document.createElement("input");
        this.boton2 = document.createElement("input");
        this.boton3 = document.createElement("input");
        this.boton4 = document.createElement("input");
        this.boton5 = document.createElement("input");
        this.boton6 = document.createElement("input");
        this.boton7 = document.createElement("input");
        this.boton8 = document.createElement("input");
        this.boton9 = document.createElement("input");
        this.botonSuma = document.createElement("input");
        this.botonResta = document.createElement("input");
        this.botonMultiplicacion = document.createElement("input");
        this.botonDivision = document.createElement("input");
        this.botonIgual = document.createElement("input");
        this.botonDecimal = document.createElement("input");
        this.botonBorrar = document.createElement("input");
        this.display = document.createElement("input");

        this.botonesNumericos = [this.boton0, this.boton1, this.boton2, this.boton3, this.boton4,
        this.boton5, this.boton6, this.boton7, this.boton8, this.boton9]

        this.botonesALL = [this.boton0, this.boton1, this.boton2, this.boton3, this.boton4,
        this.boton5, this.boton6, this.boton7, this.boton8, this.boton9, this.botonSuma, this.botonResta, this.botonMultiplicacion, this.botonDivision, this.botonIgual,
        this.botonDecimal, this.botonBorrar]



        //todos los botones
        for (let i = 0; i < 17; i++) {
            this.botonesALL[i].className = "btn";
            this.botonesALL[i].setAttribute("type", "button");
        }

        //botones numericos unicamente
        for (let i = 0; i < 10; i++) {
            this.botonesNumericos[i].id = `btn${i}`
            this.botonesNumericos[i].value = i;
        }

        this.botonSuma.id = "botonSuma";
        this.botonSuma.value = "+";

        this.botonResta.id = "botonResta";
        this.botonResta.value = "-";

        this.botonMultiplicacion.id = "botonMultiplicacion";
        this.botonMultiplicacion.value = "*";

        this.botonDivision.id = "botonDivision";
        this.botonDivision.value = "/";

        this.botonIgual.id = "botonIgual";
        this.botonIgual.value = "=";

        this.botonDecimal.id = "botonDecimal";
        this.botonDecimal.value = ".";

        this.botonBorrar.id = "botonBorrar";
        this.botonBorrar.value = "C";

        this.display.id = "display";
        this.display.setAttribute("disabled", "disabled");



        //Creación de los elementos de layout
        this.tabla = document.createElement("table");
        this.tabla.id = "calc";
        this.tabla.setAttribute("cellspacing", 1);

        let primeraFila = this.tabla.insertRow();
        let displaybox = primeraFila.insertCell();
        displaybox.setAttribute("colspan", 3);
        let Clearbox = primeraFila.insertCell();


        for (let i = 0; i < 4; i++) {
            let filaActual = this.tabla.insertRow();

            for (let j = 0; j < 4; j++) {
                filaActual.insertCell();
            }
        }
        //EVENTS
        for (let i = 0; i < 10; i++) {
            this.botonesNumericos[i].addEventListener("click", () => this.innerController.writevalue(this.botonesNumericos[i].id) );
        }
        this.botonSuma.addEventListener('click', () => this.innerController.writevalue(botonSuma.id) );
        this.botonResta.addEventListener("click", () => this.innerController.writevalue(botonResta.id) );
        this.botonMultiplicacion.addEventListener("click", () =>  this.innerController.writevalue(botonMultiplicacion.id) );
        this.botonDivision.addEventListener("click",  () =>  this.innerController.writevalue(botonDivision.id) );
        this.botonDecimal.addEventListener("click",  () =>  this.innerController.writevalue(botonDecimal.id) );
        this.botonIgual.addEventListener("click", ()=> this.innerController.onButtonCalculateClick());
        this.botonBorrar.addEventListener("click", function () { display.value = ""; });

        

        
    }
    connectedCallback() {

        // Posicionando elementos en filas y columnas
        function posicionarElementoEnTabla(tablaObj, nroFila, nroColumna, elemento) {
            tablaObj.childNodes[0].childNodes[nroFila].childNodes[nroColumna].appendChild(elemento);
        }

        posicionarElementoEnTabla(this.tabla, 0, 0, this.display);
        posicionarElementoEnTabla(this.tabla, 0, 1, this.botonBorrar);

        posicionarElementoEnTabla(this.tabla, 1, 0, this.boton7);
        posicionarElementoEnTabla(this.tabla, 1, 1, this.boton8);
        posicionarElementoEnTabla(this.tabla, 1, 2, this.boton9);
        posicionarElementoEnTabla(this.tabla, 1, 3, this.botonSuma);

        posicionarElementoEnTabla(this.tabla, 2, 0, this.boton4);
        posicionarElementoEnTabla(this.tabla, 2, 1, this.boton5);
        posicionarElementoEnTabla(this.tabla, 2, 2, this.boton6);
        posicionarElementoEnTabla(this.tabla, 2, 3, this.botonResta);

        posicionarElementoEnTabla(this.tabla, 3, 0, this.boton1);
        posicionarElementoEnTabla(this.tabla, 3, 1, this.boton2);
        posicionarElementoEnTabla(this.tabla, 3, 2, this.boton3);
        posicionarElementoEnTabla(this.tabla, 3, 3, this.botonMultiplicacion);

        posicionarElementoEnTabla(this.tabla, 4, 0, this.boton0);
        posicionarElementoEnTabla(this.tabla, 4, 1, this.botonDecimal);
        posicionarElementoEnTabla(this.tabla, 4, 2, this.botonIgual);
        posicionarElementoEnTabla(this.tabla, 4, 3, this.botonDivision);

        this.appendChild(this.tabla);


    }
}
customElements.define('x-calculator', CalculatorView);
export {CalculatorView};