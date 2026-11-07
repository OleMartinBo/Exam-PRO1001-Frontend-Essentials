//Variables for the nav buttons
const navBtnOpen = document.getElementById("navBtnOpen");
const navBtnClose = document.getElementById("navBtnClose");
const navMenu = document.getElementById("navMenu");

//Event listeners on the buttons that triggers the function navToggleOpen/Close
navBtnOpen.addEventListener("click", navToggleOpen)
navBtnClose.addEventListener("click", navToggleClose)

/*
Functions that toggle the nav menu from close to open.
*/
function navToggleOpen() {
    navMenu.style.width = "33%";

};

function navToggleClose() {
    navMenu.style.width = "0%";
};




async function loadJSON(file) {
  const response = await fetch(file);


  const products = await response.json();

  console.log(products)

}


loadJSON("JSON/products.json");

