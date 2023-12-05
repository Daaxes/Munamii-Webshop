var active = false;
const menuTopSize = '30px';
const menuTextTopSize = '2px';
const doubleSpaceInText = "&nbsp;&nbsp;";
const menuBar = "<strong class='menuText' id='menuTextId'>";

const menu = ["<a href='./index.html'>Home</a>", "<a href='./products.html'>Products</a>", "<a href='./Contacts.html'>Contacts</a>", "<a href='./about.html'>About Us</a>"];

const menuBarEnd = "</strong>";

const menuIcons = ["<img class='menu' id='menuInactiveID' src='./img/menu2.png' alt='Menu'>", 
                   "<img class='menuMouseOver' id='menuActiveID' src='./img/menu.png' alt='Menu' onmousedown='showMenu()'>"];

const menuIconActive = "<img class='menuMouseOver' id='menuActiveID' src='./img/menu.png' alt='Menu' onmousedown='showMenu()'>";

const header   =  ["<div><img class='logo' src='./img/munamii.gif' alt='Munamii Webshop'>",
                   "<div class='imageBox' id=imageBoxId'>",
                   "<img class='menu' id='menuInactiveID' src='./img/menu2.png' alt='Menu'>",
                   "<img class='menuMouseOver' id='menuActiveID' src='./img/menu.png' alt='Menu'onmousedown='showMenu()'>",
                   "<div id='myDropdown' class='dropdown-content'>"];

const headerMenuLink = ["<a href='./index.html' target='_self'>Home</a>",
                        "<a href='./products.html' target='_self'>Products</a>",
                        "<a href='./contacts.html' target='_self'>Contact</a>",
                        "<a href='./about.html' target='_self'>About us</a>",
                        "<a href='./newSide.html' target='_self'>newSide</a>"];
                        
const headerEnd = "</div></div></div>";                      

const footerBegins = "<div class='imgbox-SocialMedia'>";
const footerLinks = ["<a href='mailto'><img class = 'img-Mail' src='./img/mail.png' alt='mail'></a>",
                     "<a href='https://www.facebook.com/munamiicupcakes/'><img class = 'img-Facebook' src='./img/facebook.png' alt='Facebook'></a>",
                     "<a href='https://www.instagram.com/munamii.cakery/'><img class = 'img-Instagram' src='./img/instagram.png' alt='Instagram'></a>"];
const footerEnds =   "</div>";


function onLoadPage(){
  const screenWidth  = window.screen.width;
  const screenHeight = window.screen.height;
  var Width = "Width: " + screenWidth + " Height: " + screenHeight;
//  alert(Width);
//  alert(Hscreen.availHeight);
    createHeader();
    createFooter();
}

function showMenu() {
        document.getElementById("myDropdown").classList.toggle("show");
        document.getElementById("imageBox").innerHTML = menuIconActive;
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
  
 