import { CalculatorModel } from "./model.js";
import { CalculatorView } from "./view.js";


function startApplicationGUI() {
    let calculatorModel = new CalculatorModel()
    let calculatorView = new CalculatorView(calculatorModel);
    document.body.appendChild(calculatorView);
}
window.addEventListener("load", startApplicationGUI)
