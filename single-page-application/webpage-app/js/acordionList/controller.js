class acordionListController
{
	constructor( view )
	{
		this.innerView = view;
	}
	
	onclick()
	{
	  let x = this.innerView.container;
	  if (x.className.indexOf("w3-show") == -1) {
		x.className += " w3-show";
		x.previousElementSibling.className += " w3-theme";
		this.innerView.button.style.backgroundColor = '#009688';
		this.innerView.button.style.color = '#ffffff';
	  } else { 
		x.className = x.className.replace("w3-show", "");
		//x.previousElementSibling.className = 
		x.previousElementSibling.className.replace(" w3-theme", "");
		this.innerView.button.style = 'background-color: none';
	  }
	}
	
}
export {acordionListController}