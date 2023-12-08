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
                        "<a href='./about.html' target='_self'>About us</a>"];
                        
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
            showProductAnchor();
            insertProductCupCakeAnchor();
            showCupCakes();
            insertProductWeddingCakeAnchor();
            showWeddingCakes();
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

function showProductAnchor(){
    var result = "";
    result += "<a href='#CupCakes'>CupCakes</a>&emsp;<a href='#Wedding Cakes'>Wedding Cakes</a>";
    document.getElementById("productAnchorId").innerHTML = result;
}

function insertProductCupCakeAnchor(){
  var result = "";
  result += "<h1 id='CupCake'>CupCake</h1>";
//    result += "<h1>" + anchorcategory + "</h1>";
//alert(result);
    document.getElementById("mainProductCupCakeAnchorId").innerHTML = result;
}

function insertProductWeddingCakeAnchor(anchorcategory){
  var result = "";
  result += "<h1 id='Wedding Cake'>Wedding cake</h1>";
//    result += "<h1>" + anchorcategory + "</h1>";
//alert(result);
    document.getElementById("mainProductWeddingCakeAnchorId").innerHTML = result;
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
