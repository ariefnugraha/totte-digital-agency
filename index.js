"use strict";

let showMenu = false;
const btnMenu = document.querySelector(".btn-bar");
const menu =  document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

function detectScreen() {

}

function scrollToTop(scrollPosition) {
    const scrollTop = document.querySelector(".scroll-to-top");

    scrollPosition >= 65 ? scrollTop.style.display = "block" : scrollTop.style.display = "none";
}

function scroll(navbar) {
    let scrollPosition = document.documentElement.scrollTop;
    console.log(scrollPosition);
    if (scrollPosition >= 65 || document.body.scrollTop >= 65) {
        navbar.style.backgroundColor = "#26848d";
        navbar.style.transition = "0.5s";
    } else {
        navbar.style.background = "none";
        navbar.style.transition = "0.5s";
    }

    scrollToTop(scrollPosition);
}

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
}

btnMenu.addEventListener("click", () => {
    if(showMenu === false) {
        showMenu = true;
        menu.style.display = "block";
        navbar.style.backgroundColor = "#26848d";
    } else {
        showMenu = false;
        menu.style.display = "none";
    }
})

//UNTUK SCREEN Smartphone;
const screenWidth = screen.width;
console.log("Ukuran screen : " + screenWidth)