export function About() {
    let container = document.querySelector("#content");
    container.innerText = "";
    let div = document.createElement("div");
    div.innerText = "This is About";
    container.appendChild(div);
}