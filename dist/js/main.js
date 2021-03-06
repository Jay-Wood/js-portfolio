//Select items from DOM
const menuBtn = document.querySelector(".menu-button")
const menu = document.querySelector(".menu")
const menuNav = document.querySelector(".menu-nav")
const menuHeadshot = document.querySelector(".menu-headshot")
const portrait = document.querySelector(".portrait")
const navItems = document.querySelectorAll(".nav-item")


let showMenu = false;

menuBtn.addEventListener("click", toggleMenu)


function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuHeadshot.classList.add("show");
        portrait.classList.add("show");
        navItems.forEach(item => item.classList.add("show"))

        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuHeadshot.classList.remove("show");
        portrait.classList.remove("show");
        navItems.forEach(item => item.classList.remove("show"))

        showMenu = false;

    }

}