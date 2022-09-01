import {webAppView} from './web-App/view.js'
import {webAppModel} from './web-App/model.js'


function main(){

  let wModel = new webAppModel();

  let wAppView = new webAppView(wModel);
  document.body.appendChild(wAppView);

};

window.addEventListener("load", main);
