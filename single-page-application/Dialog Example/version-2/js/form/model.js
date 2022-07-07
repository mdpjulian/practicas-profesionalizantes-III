// JSON.stringify(Form).getFormValue  . .pasarlo a Json para backend.
// metodo post va encriptado, get no. 
class FormModel {
  
  constructor(){}
    
  submit(data){
      return fetch('./backend/calculate.php', { method:'post', body: JSON.stringify(data) } ).then( response => response.json() )
  }
}

export {FormModel};