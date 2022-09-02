import {webAppView} from './webApp/view.js'
import {webAppModel} from './webApp/model.js'


function main(){

  let wModel = new webAppModel();

  let wView = new webAppView(wModel);
  document.body.appendChild(wView);

};

window.addEventListener("load", main);
