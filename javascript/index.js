// Constants for menu icons, header, and footer
const menuIcons = ["<img class='menu' id='menuInactiveID' src='./img/menu2.png' title='Menu'></a>", 
                   "<img class='menuMouseOver' id='menuActiveID' src='./img/menu.png' title='Menu' onmousedown='showMenu()'>"];

const menuIconActive = "<img class='menuMouseOver' id='menuActiveID' src='./img/menu.png' title='Menu' onmousedown='showMenu()'>";

const header   =  ["<div><a href='./index.html' target='_self'><img class='logo' src='./img/munamii.gif' title='Munamii Webshop'></a>",
                   "<div class='imageBox' id=imageBoxId'>",
                   "<img class='menu' id='menuInactiveID' src='./img/menu2.png' title='Menu'>",
                   "<img class='menuMouseOver' id='menuActiveID' src='./img/menu.png' title='Menu'onmousedown='showMenu()'>",
                   "<div id='myDropdown' class='dropdown-content'>"];

const headerMenuLink = ["<a href='./index.html' target='_self'>Home</a>",
                        "<a href='./products.html' target='_self'>Products</a>",
                        "<a href='./contact.html' target='_self'>Contact</a>",
                        "<a href='./about.html' target='_self'>About us</a>"];
                        
const headerEnd = "</div></div></div>";                      

const footerBegins = "<div class='imgbox-SocialMedia'>";
const footerLinks = ["<a href='mailto:phoenix.firecoding@gmail.com'><img class = 'img-Mail' src='./img/mail.png' title='mail'></a>",
                     "<a href='https://www.facebook.com/munamiicupcakes/'><img class = 'img-Facebook' src='./img/facebook.png' title='Facebook'></a>",
                     "<a href='https://www.instagram.com/munamii.cakery/'><img class = 'img-Instagram' src='./img/instagram.png' title='Instagram'></a>"];
const footerEnds =   "</div>";

// eventlistner to get anchor on product side working better
window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 167);
});

// Function to execute on page load
function onLoadPage(){
  const screenWidth  = window.screen.width;
  const screenHeight = window.screen.height;

    // Create header and footer
    createHeader();
    createFooter();

    // Switch based on the page title to show cupcakes and weddingcakes on product page
    // those other (case) is for common use Product is only one in use right now.
    switch(document.title.toLowerCase()){
        case "munamii cakery":
            break;
        case "munamii cakery products":
            showProductAnchor();
             insertCupCakeAnchor();
            showCupCakes();
             insertWeddingCakeAnchor();
            showWeddingCakes();
            break;
        case "munamii cakery contacts":
            break;
        case "munamii cakery - about us":
            break;
    }
}

// Functions for show products, insert Anchors
function showProductAnchor(){
    var result = "";
    result += "<a href='#Cupcakes'><img class = 'imgAnchorCupcake' src='./img/cupcakes/Choklate.jpg' title='Cupcakes'></a><br>";
    result += "<a href='#Weddingcakes'><img class = 'imgAnchorCake' src='./img/cakes/Belen.jpg' title='Cakes'></img></a>";
    document.getElementById("productAnchorId").innerHTML = result;
}

function insertCupCakeAnchor(){
    var result = "";
    result += "<h1 id='Cupcakes'>Cupcake</h1>";
    document.getElementById("cupCakeAnchorId").innerHTML = result;
}

function insertWeddingCakeAnchor(){
    var result = "";
    result += "<h1 id='Weddingcakes'>Wedding cakes</h1>";
    document.getElementById("weddingCakeAnchorId").innerHTML = result;
}

function showCupCakes(){
    var result = "";

    cupCakes.forEach((element) => {
        result += element.generateHtml();
    });

    document.getElementById("mainProductCupCakesId").innerHTML = result;
}


function showWeddingCakes(){
    var result = "";

    weddingCakes.forEach((element) => {
        result += element.generateHtml();
    });

    document.getElementById("mainProductCakesId").innerHTML = result;
}

function ShowTheProduct(){

}

// functions for menu
function showMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("imageBox").innerHTML = menuIconActive;
}

// function for dopdown mwnu
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

// Function to create the header   
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

// functions för showing footer
function createFooter(){
  let result =  footerBegins;

  footerLinks.forEach((element)=>{
    result += element;
  });
  result += footerEnds;
  document.getElementById("footerId").innerHTML = result;
}
