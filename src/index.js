import "./styles.css";
import createHome from "./modules/home.js";
import createMenu from "./modules/menu.js";
import createAbout from "./modules/about.js";

const content = document.querySelector("#content");

// const home = createHome();
// content.appendChild(home);

// const menu = createMenu();
// content.appendChild(menu);

const about = createAbout();
content.appendChild(about);