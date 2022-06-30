class CalculatorController{
  
    constructor( calculatorView, calculatorModel )
      {
          this.view = calculatorView;
          this.model = calculatorModel;
      }
      
     writevalue(id) {
      this.view.display.value += document.getElementById(id).value;
      }
      onButtonCalculateClick()
      {
          this.model.calculate(this.view.display.value).then( response => this.view.display.value=response );
      }
  }
export {CalculatorController};