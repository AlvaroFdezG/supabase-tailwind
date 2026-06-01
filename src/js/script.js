const burgerButton = document.getElementById("burgerButton");
const mobileMenu = document.getElementById("mobileMenu");
const body = document.getElementById("body");
const buttonClose = document.getElementById("buttonClose");


const showMenu = () => {
    mobileMenu.classList.remove("hidden");
    body.style.overflowY = "hidden";
}

const closeMenu = () => {
    mobileMenu.classList.add("hidden");
    body.style.overflowY = "auto";
}

burgerButton.addEventListener("click", showMenu);
buttonClose.addEventListener("click", closeMenu);