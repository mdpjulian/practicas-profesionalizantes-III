import {FormController} from './controller.js';

class FormView extends HTMLElement {
    constructor(model) {
      super();
      this.innerModel = model;
      this.innerController = new FormController(this,this.innerModel);

      this.innerMenuTitle = document.createElement('p');
      this.innerMenuTitle.innerText = "LOGIN MENU";

      this.usernameInput = document.createElement('input');
      this.usernameInput.type = 'text';
      this.usernameInput.placeholder = 'Username';
    
      this.passwordInput = document.createElement('input');
      this.passwordInput.type = 'password';
      this.passwordInput.placeholder = 'Password';

      this.submitButton = document.createElement('button');
      this.submitButton.innerText = 'submit';


      /*
      this.remwmberPassword= document.createElement('input');
      this.usernameInput.type='checkbox';
      this.usernameInput.placeholder = 'Password';
      mal implementado
      */
    
    }
    connectedCallback() {
      this.appendChild(this.innerMenuTitle);
      this.appendChild(this.usernameInput);
      this.appendChild(this.passwordInput);
      this.appendChild(this.submitButton);

      this.submitButton.addEventListener('click', () => this.innerController.onsubmit());
      
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
customElements.define('x-form-view', FormView);

export {FormView};
