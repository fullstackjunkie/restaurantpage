import "./home.css";

export function HomePage() {
    let container = document.querySelector("#content");
    container.innerText = "";
    let div = document.createElement("div");
    div.innerText = "This is Home";
    container.appendChild(div);

}