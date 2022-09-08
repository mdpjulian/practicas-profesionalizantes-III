import {acordionListController} from './controller.js'

class acordionList extends HTMLElement{
    constructor(){
        super();

        this.button = document.createElement('a');
		this.button.classList.add("w3-bar-item", "w3-button");
		this.button.innerText = 'Dropdown ▾';
		
		this.container = document.createElement('div');
		this.container.classList.add("w3-hide");
		
		this.appendChild(this.button);
		this.appendChild(this.container);
		
		this.innerController = new acordionListController(this);
	}
	
	addItem(itemName){
		let item = document.createElement('div');
		item.classList.add('w3-bar-item', 'w3-button');	
		item.innerText = itemName;	
		this.container.appendChild(item);
		return item;
	}
	
	addAcordionList(){
		let groupItem = new acordionList();
		this.container.appendChild(groupItem);
		return groupItem;
	}
	
	connectedCallback(){
		this.button.addEventListener('click', () => this.innerController.onclick() );
	}
	
	disconnectedCallback(){
		
	}

    
}
window.addEventListener('load', () =>{
	console.log('DOM Cargado');
	customElements.define('x-acordion-list', acordionList );
	
})
export {acordionList}