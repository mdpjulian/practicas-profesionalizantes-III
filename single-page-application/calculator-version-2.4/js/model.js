class CalculatorModel {
    constructor(){}

    calculate(expression) {
      try{
        return fetch('./backend/calculate.php', { method:'post', body: JSON.stringify(expression) } ).then( response => response.json() );
      } catch (e) {
        console.log('error');
        alert('operacion invalida');
        return '';
      }
    }
}
export {CalculatorModel};