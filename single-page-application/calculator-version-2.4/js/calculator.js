import { CalculatorModel } from "./model";
import { CalculatorView } from "./view";

function posicionarElementoEnTabla(tablaObj, nroFila, nroColumna, elemento) {
    tablaObj.childNodes[0].childNodes[nroFila].childNodes[nroColumna].appendChild(elemento);
}

function startApplicationGUI() {
    let calculatorModel = new CalculatorModel()
    let calculatorView = new CalculatorView(calculatorModel);
    document.body.appendChild(calculatorView);
}

