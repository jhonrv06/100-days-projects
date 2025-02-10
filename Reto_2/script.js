let button = document.querySelector(".container");
let interations = document.querySelector(":root");
let changeVars = document.querySelector(".chec")

function GetAtributes (){
    
    changeVars.classList.toggle("change");

}

button.addEventListener("dblclick", GetAtributes);