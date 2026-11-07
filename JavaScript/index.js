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
    try {
        const response = await fetch(file);
        if(!response.ok){
            throw new Error ("HTTP Error " + response.status)
        }
        const products = await response.json();
        console.log(products);

        const prodContainer = document.getElementById("prodContainer")
        console.log(prodContainer);

        products.forEach(product => {
            const cardItem = document.createElement("li");
            cardItem.classList.add("cardItem")
            cardItem.innerHTML=
            `
                <div class="cardPreview">
                    <img src="${product.prodImg}" alt="Oats">
                    <button class="cardBtn">Add to basket <span>&#8593;</span></button>
                </div>

                <div class="cardInfo">
                    <h3>${product.prod_title}</h3>
                    <p>${product.prod_price} Kr / kg</p>
                </div>

                <p class="cardAmount">${product.prod_amount} kg</p>
            `
            prodContainer.appendChild(cardItem);
   
        });


    }   
    catch(err){
        console.log(err)
    }
}

loadJSON("JSON/products.json");

