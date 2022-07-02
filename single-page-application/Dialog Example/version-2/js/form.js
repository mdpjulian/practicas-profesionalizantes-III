// JSON.stringify(Form).getFormValue  . .pasarlo a Json para backend.
// metodo post va encriptado, get no. 
class FormModel {
    constructor(){}
    submit(data){
      return fetch('./backend/calculate.php', { method:'post', body: JSON.stringify(data) } ).then( response => response.json() )
    }
    

}

class FormController{
  
  constructor( formView, formModel )
	{
		this.view = formView;
		this.model = formModel;
	}
	onsubmit(){
	    this.model.submit(this.view.getFormValue()).then( response => this.view.display.value=response );
	}
	
}

class FormView extends HTMLElement {
    constructor(model) {
        super();

    this.usernameInput = document.createElement('input');
    this.usernameInput.type='text';
    this.usernameInput.placeholder = 'Username';
    
      this.passwordInput = document.createElement('input');
    this.usernameInput.type='password';
    this.usernameInput.placeholder = 'Password';
    
    this.passwordInput = document.createElement('input');
    this.usernameInput.type='password';
    this.usernameInput.placeholder = 'Password';
    /*
    this.remwmberPassword= document.createElement('input');
    this.usernameInput.type='checkbox';
    this.usernameInput.placeholder = 'Password';
    mal implementado
    */
    
    }
    connectedCallback() {
      appendChild(this.usernameInput);
      appendChild(this.passwordInput);
    }
    getFormValue(){
      let loginData = 
      {
        username : this.usernameInput.value,
        password : this.passwordInput.value
      }
      return loginData;
    }
    
}
customElements.define('x-form', Form);

export {FormView};
export {FormModel};
