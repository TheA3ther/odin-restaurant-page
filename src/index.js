import "./styles.css";
import createHome from "./modules/home.js";

const content = document.querySelector("#content");

const home = createHome();
content.appendChild(home);