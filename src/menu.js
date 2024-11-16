

export function Menu() {
    let container = document.querySelector("#content");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let p5 = document.createElement("p");
    let p6 = document.createElement("p");
    container.innerText = "";
    let div = document.createElement("div");
    let div2 = document.createElement("div");
    div.classList.add("menu__list-description");
    div2.classList.add("menu__menu");
    p.classList.add("menu__items-p");
    p2.classList.add("menu__items-p");
    p3.classList.add("menu__items-p");
    p4.classList.add("menu__items-p");
    p5.classList.add("menu__items-p");
    p6.classList.add("menu__items-p");
    // div2.innerText = "This is Menu";
    container.appendChild(div);
    div.appendChild(div2);
    div2.appendChild(p);
    div2.appendChild(p2);
    div2.appendChild(p3);
    div2.appendChild(p4);
    div2.appendChild(p5);
    div2.appendChild(p6);
    p.innerText = " Pizza        ..........................................................................        2.44$";
    p2.innerText = "Taco        ..........................................................................        1.42$";
    p3.innerText = "Chips        ..........................................................................        1.20$";
    p4.innerText = "Chicken      ..........................................................................        4.60$";
    p5.innerText = "Fries        ..........................................................................       \s .99$";
    p6.innerText = "Cola        ..........................................................................        1.48$";
}