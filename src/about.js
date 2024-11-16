export function About() {
    let container = document.querySelector("#content");
    container.innerText = "";
    let div = document.createElement("div");
    let div2 = document.createElement("div");
    let p = document.createElement("p");
    div.classList.add("main__about-description");
    div2.classList.add("main__about-info");
    p.classList.add("main__info-p");
    container.appendChild(div);
    div.appendChild(div2);
    div2.appendChild(p);
    p.innerText = `Welcome to Syntax Bites, where code meets cuisine! Whether you’re debugging your hunger or compiling a great time with friends, we’ve got the perfect recipe for success.

Our mission is simple: deliver byte-sized happiness and full-course satisfaction. Inspired by the creativity of coders and the love of food, Syntax Bites serves up dishes that are as deliciously crafted as your favorite algorithm.

Located in the heart of Maine, Syntax Bites is the perfect hub for techies, foodies, and everyone in between. Whether you're here for a quick grab() or ready to dine_in(), our menu is full of mouthwatering options that’ll leave you saying, "Hello, World!"`;
}