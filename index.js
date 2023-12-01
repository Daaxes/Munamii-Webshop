var active = false;
const menuTopSize = '30px';
const menuTextTopSize = '2px';
var doubleSpaceInText = "&nbsp;&nbsp;";
const menu = ["<a href='./index.html'>Home</a>", "<a href='./index.html'>Products</a>", "<a href='./Contacts.html'>Contacts</a>", "<a href='./about.html'>About Us</a>"];

function onLoad(){

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

function createFooter(){

}

function createHeader(){
    
}
function menuActive(){
    if(active == true){
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
  
   
// function addCar(brand, model, year){
//     cars.push({
//         brand: brand.value,
//         model: model.value,
//         year: year.value
//     });

//     loadMyCar();
//     brand.value="";
//     model.value="";
//     year.value="";
// }

// function loadMyCar(){
//     let result="";

//     result +="<tr>";
//     result +="<th>Brand</th>";
//     result +="<th>Model</th>";
//     result +="<th>Year</th>";
//     result +="</tr>";

//     for(let i =0; i < cars.length; i++){
//         result +="<tr>";
//         result +="<td>" + cars[i].brand + "</td>";
//         result +="<td>" + cars[i].model + "</td>";
//         result +="<td>" + cars[i].year + "</td>";
//         result +="</tr>";

//     }
//     result += "<h3>Totally " + cars.length + " Cars</h3>";
//     document.getElementById("carTable").innerHTML = result;

// }