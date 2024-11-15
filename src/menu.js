

export function Menu() {
    let container = document.querySelector("#content");
    container.innerText = "";
    let div = document.createElement("div");
    div.innerText = "This is Menu";
    container.appendChild(div);
}