import {ModelDialog} from 'js/model.js'
alert('main js')

function main(){
  alert('main function');
  let dialogModel = new ModelDialog();
    document.body.appendChild(dialogModel);
};
