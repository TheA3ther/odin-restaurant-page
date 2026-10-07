import "./styles.css";
import createHome from "./modules/home.js";
import createMenu from "./modules/menu.js";
import createAbout from "./modules/about.js";

const content = document.querySelector("#content");
const buttonList = document.querySelector("#button-list");


function onButtonListClick(e){
    const button = e.target.closest("button");
    if (button === null) return;

    let contentChild;

    switch (button.id){
        case "button-home":
            contentChild = createHome();
            break;
        case "button-menu":
            contentChild = createMenu();
            break;
        case "button-about":
            contentChild = createAbout();
            break;
    }

    content.textContent = "";
    content.appendChild(contentChild);
}

buttonList.addEventListener("click", onButtonListClick);

content.appendChild(createHome());