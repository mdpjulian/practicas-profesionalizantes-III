import {FormModel} from './form/model.js';
import {FormView} from './form/view.js';

class ModalDialog extends HTMLElement
{ 
  constructor(){
    super();
    this.innerContext = document.createElement('div');
    this.innerContext.className = "w3-container";

    this.openFormButton = document.createElement('button');
    this.openFormButton.innerText = 'Open Form';
    this.openFormButton.classList.add('w3-button', 'w3-black');
    
    this.divModal = document.createElement('div');
    this.divModal.id = "id01";
    this.divModal.className ="w3-modal";

    this.innerModalContent = document.createElement('div');
    this.innerModalContent.classList.add( "w3-modal-content", "w3-blue", 'w3-display-topmiddle', 'w3-center');

    this.innerModalContentContainer = document.createElement('div');
    this.innerModalContentContainer.className = "w3-container";
    
    this.innerExitSpan = document.createElement('span');
    this.innerExitSpan.innerText = "x";
    this.innerExitSpan.classList.add('w3-button', 'w3-display-topright');

    

    

    this.innerContext.appendChild(this.divModal);
    this.divModal.appendChild(this.innerModalContent);
    this.innerModalContent.appendChild(this.innerModalContentContainer);
    this.innerModalContentContainer.appendChild(this.innerExitSpan);
    
    this.innerFormModel = new FormModel();
    this.innerFormView = new FormView(this.innerFormModel);
    this.innerModalContentContainer.appendChild(this.innerFormView);

    
  }
    
  connectedCallback() {
    this.appendChild(this.innerContext);
    this.appendChild(this.openFormButton);
      
    this.openFormButton.addEventListener('click', () => this.showModal());

    this.innerFormView.submitButton.addEventListener('click', () => this.exitModal());
    this.innerExitSpan.addEventListener('click', () => this.exitModal());
  }
  showModal(){
      this.divModal.style.display = 'block';
      this.openFormButton.style.display = 'none';
  }
  exitModal(){
    this.divModal.style.display = 'none';
    this.openFormButton.style.display = 'block';
  }
  
}
customElements.define('x-dialog', ModalDialog);
export {ModalDialog}
