import "./home.css";
import logo from "./restaurant.jpg";
export function HomePage() {
    let container = document.querySelector("#content");
    let img = document.createElement("img");
    container.innerText = "";
    let div = document.createElement("div");
    img.src = logo;
    img.classList.add("main__img");
    div.classList.add("main__image-description");
    div.appendChild(img);
    container.appendChild(div);

}