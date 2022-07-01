class ModelDialog extends HTMLElement
{ 
  constructor()
  {
    super();
    this.innerContext = document.createElement('div');
    this.confirm = document.createElement('button');
    this.confirm.innerText = 'Confirm';
    
    this.cancel = document.createElement('button');
    this.cancel.InnerText= 'Cancel';
  }
    
    
  connectCallback() {
      this.appendChild(this.innerContext);
      this.appendChild(this.confirm);
      this.appendChild(this.cancel);
      
      this.cancel.addEventListener('click', ()=>this.hide())
      this.cancel.addEventListener('click', ()=>this.hide())
    }
  disconnectCallback(){
      
    }
  show(){
      this.style.display= 'black';
    }
  hide(){
      this.style.display= 'none';
    }
  
}
  customElements.define('x-dialog', ModelDialog);
  
export {ModelDialog}
