var active = false;
const menuTopSize = '30px';
const menuTextTopSize = '2px';
const doubleSpaceInText = "&nbsp;&nbsp;";
//<div class='menuBar' id='menuBarId'></div>
const menuBar = "<strong class='menuText' id='menuTextId'>";

const menu = ["<a href='./index.html'>Home</a>", "<a href='./products.html'>Products</a>", "<a href='./Contacts.html'>Contacts</a>", "<a href='./about.html'>About Us</a>"];
const menuBarEnd = "</strong>";

const MenuIcons = ["<img class='menu' id='menuInactiveID' src='./img/menu2.png' alt='Menu'>", 
                   "<img class='menuMouseOver' id='menuActiveID' src='./img/menu.png' alt='Menu' onmousedown='showMenu()'>"];

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

// const header = ["<div><img class='logo' src='./img/munamii.gif' alt='Munamii Webshop'>",
//                 "<div class='imageBox' id='imageBoxId'>",
//                 "<img class='menu' id='menuInactiveID' src='./img/menu2.png' alt='Menu' onmousedown='menuActive()'>",
//                 "<img class='menuMouseOver' id='menuActiveID' src='./img/menu.png' alt='Menu' onmousedown='menuActive()'>",
//                 "</div><div class='headerText' class='headerTextId'>Welcome to Munamii cakery</div>"];

function onLoadPage(){
    createHeader();
    createFooter();

}
// // let cars=[];
// // var menuIcon = document.getElementById('headerTextId');
// // function onClickMenu(){
// //     headerTextId.addEventListener('click', function(){
// //     document.getElementById("headerTextId").innerHTML = "Homecoming";
// // })

// function showMenu(){
//     document.getElementById('headerTextId').innerHTML = "Homecoming";
// }

//function myFunction() {
function showMenu() {
        document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
//    if (!event.target.matches('.dropbtn')) {
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
//    result +=  menuBar + menuBarEnd;
    
  header.forEach((element)=>{
    result += element;
  });
  headerMenuLink.forEach((element)=>{
    result += element;
  });
  result += headerEnd;
  
document.getElementById("headerId").innerHTML = result;
//  alert(result);


}

function createFooter(){
}

function menuActive(){
    if(active == true){
alert("test");
        document.getElementById("headerId").style.top = '0px';
        document.getElementById("imageBoxId").style.top = '0px';
        //        document.getElementById("headerId").innerHTML = "red";
        active = false;
    }
    else{
//        document.getElementById("menuBarId").style.top = '0px';
        document.getElementById("menuBarId").style.border = '5px solid #fffff';
        document.getElementById("menuBarId").style.height = menuTopSize;
        document.getElementById("menuTextId").innerHTML = menu[0] + doubleSpaceInText + menu[1] + doubleSpaceInText + menu[2] + doubleSpaceInText + menu[3] ;
        document.getElementById("menuTextId").style.marginLeft = '100px';
        
        document.getElementById("headerId").style.top = menuTopSize;
        document.getElementById("imageBoxId").style.top = '0px';
        active = true;
        }
  }
  
 