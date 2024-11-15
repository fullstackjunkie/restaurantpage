
import { HomePage } from "./home.js";
import { Menu } from "./menu.js";
import { About } from "./about.js";
HomePage();

document.querySelector("#home").addEventListener("click", (e) => {
    e.preventDefault();
    HomePage();
});
document.querySelector("#menu").addEventListener("click", (e) => {
    e.preventDefault();
    Menu();
});
document.querySelector("#about").addEventListener("click", (e) => {
    e.preventDefault();
    About();
});


