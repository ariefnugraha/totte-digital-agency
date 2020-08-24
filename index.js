"use strict";

let openMenu = false;

const buttonMenu = document.querySelector(".btn-bar");
const menu = document.querySelector(".menu");


function scrollToTop(scrollPosition) {
    const scrollTop = document.querySelector(".scroll-to-top");
    scrollPosition >= 65 ? scrollTop.style.display = "block" : scrollTop.style.display = "none";
}

function scroll() {
    let scrollPosition = document.documentElement.scrollTop;
    const navbar = document.querySelector(".navbar");

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

buttonMenu.addEventListener("click", () => {
    const navbar = document.querySelector(".navbar");
    if (openMenu === false) {
        openMenu = true;
        menu.style.display = "block";
        navbar.style.backgroundColor = "#26848d";
    } else {
        openMenu = false;
        menu.style.display = "none";
    }
})