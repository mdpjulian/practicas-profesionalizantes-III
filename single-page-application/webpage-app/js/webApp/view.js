import { webAppController } from "./controller.js";
import {acordionList} from "../acordionList/view.js"

class webAppView extends HTMLElement {
  constructor(model) {
      super();
      this.innerModel = model;
      this.innerController = new webAppController(this,this.innerModel);

      //  new Acordion list class instance
      this.innerAcordionList = new acordionList();
      this.innerAcordionList.addItem("Item 1");
      this.innerAcordionList.addItem("Item 2");
      let acordion2 = this.innerAcordionList.addAcordionList();
      acordion2.addItem("SubItem 1");
      acordion2.addItem("SubItem 2");
      this.innerAcordionList.addItem("Item 3");

      // ...
      // .....
      

      this.nav = document.createElement('nav');
      this.nav.className = "w3-sidebar w3-bar-block w3-collapse w3-animate-left w3-card";
      this.nav.style = "z-index:3;width:250px;"
      this.nav.id = "mySidebar";

      this.logoLink = document.createElement('a');
      this.logoLink.className = "w3-bar-item w3-button w3-border-bottom w3-large";
      this.logoLink.href = "#";
      this.logoImg = document.createElement('img');
      this.logoImg.src = "https://www.w3schools.com/images/w3schools.png";
      this.logoImg.style = "width:80%";

      this.closeLink = document.createElement('a');
      this.closeLink.className = "w3-bar-item w3-button w3-hide-large w3-large";
      this.closeLink.href = "javascript:void(0)"
      this.closeLink.addEventListener("click", w3_close)
      this.closeLink.innerText = "Close";
      this.closeImg = document.createElement('i');
      this.closeImg.className = "fa fa-remove"

      this.homeLink = document.createElement('a');
      this.homeLink.className = "w3-bar-item w3-button w3-teal";
      this.homeLink.href = "#";
      this.homeLink.innerText = "Home";

      this.Link1 = document.createElement('a');
      this.Link1.className = "w3-bar-item w3-button";
      this.Link1.href = "#";
      this.Link1.innerText = "Link 1";
      this.Link2 = document.createElement('a');
      this.Link2.className = "w3-bar-item w3-button";
      this.Link2.href = "#";
      this.Link2.innerText = "Link 2";
      this.Link3 = document.createElement('a');
      this.Link3.className = "w3-bar-item w3-button";
      this.Link3.href = "#";
      this.Link3.innerText = "Link 3";
      this.Link4 = document.createElement('a');
      this.Link4.className = "w3-bar-item w3-button";
      this.Link4.href = "#";
      this.Link4.innerText = "Link 4";

      

      this.w3overlay = document.createElement('div');
      this.w3overlay.className = "w3-overlay w3-hide-large w3-animate-opacity";
      this.w3overlay.addEventListener('click', w3_close);
      this.w3overlay.style = "cursor:pointer";
      this.w3overlay.id = "myOverlay";

      this.w3main = document.createElement('div');
      this.w3main.className = "w3-main";
      this.w3main.style = "margin-left:250px;";

      this.mytop = document.createElement('div');
      this.mytop.className = "w3-container w3-top w3-theme w3-large";
      this.mytop.id = "myTop";

      this.pItem = document.createElement('p');
      
      this.iItem = document.createElement('i');
      this.iItem.className = "fa fa-bars w3-button w3-teal w3-hide-large w3-xlarge";
      this.iItem.addEventListener('click', w3_open);
      
      this.spanItem = document.createElement('span');
      this.spanItem.id = "myIntro";
      this.spanItem.className = "w3-hide";
      this.spanItem.innerText = "W3 CSS INTRODUCTION";

      this.headerItem = document.createElement('header');
      this.headerItem.className = "w3-container w3-theme";
      this.headerItem.style = "padding:64px 32px";

      this.h1Item = document.createElement('h1');
      this.h1Item.innerText = "W3.CSS";
      this.h1Item.className = "w3-xxxlarge"

      this.contentDiv = document.createElement('div');
      this.contentDiv.className = "w3-container";
      this.contentDiv.style = "padding:32px";
    }



    connectedCallback(){
      document.body.appendChild(this.nav);

      this.nav.appendChild(this.logoLink);
      this.logoLink.appendChild(this.logoImg);

      this.nav.appendChild(this.closeLink);
      this.closeLink.appendChild(this.closeImg);

      this.nav.appendChild(this.homeLink);
      this.nav.appendChild(this.Link1);
      this.nav.appendChild(this.Link2);
      this.nav.appendChild(this.Link3);
      this.nav.appendChild(this.Link4);


      this.nav.appendChild(this.innerAcordionList);

      document.body.appendChild(this.w3overlay);
      document.body.appendChild(this.w3main);

      this.w3main.appendChild(this.mytop);
      this.mytop.appendChild(this.pItem);
      this.pItem.appendChild(this.iItem);

      this.mytop.appendChild(this.spanItem);

      this.w3main.appendChild(this.headerItem);
      this.headerItem.appendChild(this.h1Item);

      this.w3main.appendChild(this.contentDiv);


    }
}    
customElements.define('x-customwebview', webAppView);

// Open and close the sidebar on medium and small screens
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// Change style of top container on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("myTop").classList.add("w3-card-4", "w3-animate-opacity");
    document.getElementById("myIntro").classList.add("w3-show-inline-block");
  } else {
    document.getElementById("myIntro").classList.remove("w3-show-inline-block");
    document.getElementById("myTop").classList.remove("w3-card-4", "w3-animate-opacity");
  }
}

export {webAppView};
