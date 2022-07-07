class ModalDialog extends HTMLElement
{ 
  constructor(){
    super();
    this.innerContext = document.createElement('div');
    this.confirmButton = document.createElement('button');
    this.confirmButton.innerText = 'Confirm';
    
    this.cancelButton = document.createElement('button');
    this.cancelButton.innerText= 'Cancel';
  }
    
  connectedCallback() {
    this.appendChild(this.innerContext);
    this.appendChild(this.confirmButton);
    this.appendChild(this.cancelButton);
      
    this.confirmButton.addEventListener('click', () => this.hide());
    this.cancelButton.addEventListener('click', () => this.hide());
  }
  disconnectCallback(){
    this.confirmButton.removeEventListener('click', () => this.hide());
    this.cancelButton.removeEventListener('click', () => this.hide());
  }
  show(){
      this.style.display= 'block';
  }
  hide(){
      this.style.display= 'none';
  }
  
}
customElements.define('x-dialog', ModalDialog);
export {ModalDialog}
