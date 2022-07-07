import {ModalDialog} from './modalDialog.js'


function main(){

  let dialogModal = new ModalDialog();
  document.body.appendChild(dialogModal);

};

window.addEventListener("load", main);
