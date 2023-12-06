// var active = false;
// const menuTopSize = '30px';
// const menuTextTopSize = '2px';
// const doubleSpaceInText = "&nbsp;&nbsp;";
// const menuBar = "<strong class='menuText' id='menuTextId'>";

// const menu = ["<a href='./index.html'>Home</a>", "<a href='./products.html'>Products</a>", "<a href='./Contacts.html'>Contacts</a>", "<a href='./about.html'>About Us</a>"];

// const menuBarEnd = "</strong>";

const weddingCakes = [
  {
    Id: "Cake1",
    name: "4-TierRoseCake",
    file: "./img/4-TierRoseCake.jpg",
    price: 3442,
    description: "Description",
    generateHtml: function() {
      return "<div Id = '" + this.Id + "'><img src='" + this.file + "' title = '" + this.name + "'></div>"
    }},
    {
    Id: "Cake2",
    name: "8-tierFlowerCake",
    file: "./img/8-tierFlowerCake.jpg",
    price: 6420,
    description: "Description",
    generateHtml: function() {
      return "<div Id = '" + this.Id + "'><img src='" + this.file + "' title = '" + this.name + "'></div>"
  }},
  {
    Id: "Cake3",
    name: "catcake",
    file: "./img/catcake.jpg",
    price: 3220,
    description: "Description",
    generateHtml: function() {
      return "<div Id = '" + this.Id + "'><img src='" + this.file + "' title = '" + this.name + "'></div>"
  }},  
  {
    Id: "Cake4",
    name: "Elisa",
    file: "./img/Elisa.png",
    price: 3420,
    description: "Description",
    generateHtml: function() {
      return "<div Id = '" + this.Id + "'><img src='" + this.file + "' title = '" + this.name + "'></div>"
  }},  
  {
    Id: "Cake5",
    name: "Torta Belén",
    file: "./img/TortaBelen.jpg",
    price: 4420,
    description: "Description",
    generateHtml: function() {
      return "<div Id = '" + this.Id + "'><img src='" + this.file + "' title = '" + this.name + "'></div>"
  }},  
  {
    Id: "Cake6",
    name: "TortaGabriela",
    file: "./img/TortaGabriela.png",
    price: 3420,
    description: "Description",
    generateHtml: function() {
      return "<div Id = '" + this.Id + "'><img src='" + this.file + "' title = '" + this.name + "'></div>"
  }},
  {
    Id: "Cake7",
    name: "Tropical5-TierFlowerCake",
    file: "./img/Tropical5-TierFlowerCake.jpg",
    price: 6420,
    description: "Description",
    generateHtml: function() {
      return "<div Id = '" + this.Id + "'><img src='" + this.file + "' title = '" + this.name + "'></div>"
  }},
  {
    Id: "Cake8",
    name: "White6-tierFlowerCake",
    file: "./img/White6-tierFlowerCake.jpg",
    price: 6420,
    description: "Description",
    generateHtml: function() {
      return "<div Id = '" + this.Id + "'><img src='" + this.file + "' title = '" + this.name + "'></div>"
  }},
  {
  Id: "Cake9",
  name: "White 3-tierFlower cake",
  file: "./img/White3-tierFlowerCake.jpg",
  price: 6420,
  description: "Description",
  generateHtml: function() {
    return "<div Id = '" + this.Id + "'><img src='" + this.file + "' title = '" + this.name + "'></div>"
}}];

const menuIcons = ["<img class='menu' id='menuInactiveID' src='./img/menu2.png' title='Menu'>", 
                   "<img class='menuMouseOver' id='menuActiveID' src='./img/menu.png' title='Menu' onmousedown='showMenu()'>"];

const menuIconActive = "<img class='menuMouseOver' id='menuActiveID' src='./img/menu.png' title='Menu' onmousedown='showMenu()'>";

const header   =  ["<div><img class='logo' src='./img/munamii.gif' title='Munamii Webshop'>",
                   "<div class='imageBox' id=imageBoxId'>",
                   "<img class='menu' id='menuInactiveID' src='./img/menu2.png' title='Menu'>",
                   "<img class='menuMouseOver' id='menuActiveID' src='./img/menu.png' title='Menu'onmousedown='showMenu()'>",
                   "<div id='myDropdown' class='dropdown-content'>"];

const headerMenuLink = ["<a href='./index.html' target='_self'>Home</a>",
                        "<a href='./products.html' target='_self'>Products</a>",
                        "<a href='./contacts.html' target='_self'>Contact</a>",
                        "<a href='./about.html' target='_self'>About us</a>",
                        "<a href='./newSide.html' target='_self'>newSide</a>"];
                        
const headerEnd = "</div></div></div>";                      

const footerBegins = "<div class='imgbox-SocialMedia'>";
const footerLinks = ["<a href='mailto'><img class = 'img-Mail' src='./img/mail.png' title='mail'></a>",
                     "<a href='https://www.facebook.com/munamiicupcakes/'><img class = 'img-Facebook' src='./img/facebook.png' title='Facebook'></a>",
                     "<a href='https://www.instagram.com/munamii.cakery/'><img class = 'img-Instagram' src='./img/instagram.png' title='Instagram'></a>"];
const footerEnds =   "</div>";


function onLoadPage(){
  const screenWidth  = window.screen.width;
  const screenHeight = window.screen.height;
  var Width = "Width: " + screenWidth + " Height: " + screenHeight;
//  alert(document.title);
  // alert(cake);
//  alert(Hscreen.availHeight);
    createHeader();
    createFooter();

    switch(document.title.toLowerCase()){
      case "munamii cakery":
        break;
    case "munamii cakery products":
        showProducts();
        break;
    case "munamii cakery contacts":
        break;
    case "munamii cakery - about us":
        break;
    }
}

function showMenu() {
        document.getElementById("myDropdown").classList.toggle("show");
        document.getElementById("imageBox").innerHTML = menuIconActive;
  }

function showProducts(){
  var result = "";

  weddingCakes.forEach((element) => {
      result += element.generateHtml();
  });

  document.getElementById("mainProductId").innerHTML = result;

}

  // Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.menuMouseOver')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;

      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
   
function createHeader(){
    let result="";
      
    header.forEach((element)=>{
        result += element;
    });
    headerMenuLink.forEach((element)=>{
        result += element;
    });
      result += headerEnd;
      document.getElementById("headerId").innerHTML = result;
}

function createFooter(){
  let result =  footerBegins;

  footerLinks.forEach((element)=>{
    result += element;
  });
  result += footerEnds;
  document.getElementById("footerId").innerHTML = result;
}

// function menuActive(){
//     if(active == true){
// //alert("test");
//         document.getElementById("headerId").style.top = '0px';
//         document.getElementById("imageBoxId").style.top = '0px';
//         active = false;
//     }
//     else{
//         document.getElementById("menuBarId").style.border = '5px solid #fffff';
//         document.getElementById("menuBarId").style.height = menuTopSize;
//         document.getElementById("menuTextId").innerHTML = menu[0] + doubleSpaceInText + menu[1] + doubleSpaceInText + menu[2] + doubleSpaceInText + menu[3] ;
//         document.getElementById("menuTextId").style.marginLeft = '100px';
        
//         document.getElementById("headerId").style.top = menuTopSize;
//         document.getElementById("imageBoxId").style.top = '0px';
//         active = true;
//         }
//   }
  
 