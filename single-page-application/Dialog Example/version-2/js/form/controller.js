class FormController{
  
    constructor( formView, formModel ){
          this.view = formView;
          this.model = formModel;
    }
    onsubmit(){
        this.model.submit(this.view.getFormValue()).then( response => {console.log(JSON.stringify(response))});
    }    
}

export {FormController};
