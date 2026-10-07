import img from "../assets/images/home.jpg";

const TITLE = "Lorem Ipsum.";
const P_TEXT = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Cras convallis ac lorem vitae congue. Phasellus porttitor risus quis ex posuere, id elementum nisl imperdiet. In sem lacus, finibus vel rhoncus a, scelerisque eget tellus. Curabitur sed vestibulum erat, id vulputate eros. Phasellus dictum sollicitudin felis, non dictum elit molestie non. Proin aliquam sit amet nibh id eleifend. Aliquam nec arcu erat. Vestibulum suscipit massa a lorem pulvinar elementum.",
    "Integer id sapien dictum, hendrerit ipsum sit amet, egestas elit. Ut non justo tincidunt, tristique nulla in, mollis tellus. Suspendisse non sapien tortor. Proin lobortis tempor ipsum vitae placerat. In pulvinar feugiat arcu, ut mattis nisi scelerisque non. Etiam eleifend elementum lacus at efficitur. Mauris tempor ipsum sed mauris fringilla, eu vehicula nisl accumsan."
];

function createHome() {
    const home = document.createElement("div");
    home.id = "home";

    const imgContainer = document.createElement("div");
    imgContainer.id = "img-container";
    home.appendChild(imgContainer);

    const homeImg = document.createElement("img");
    homeImg.src = img;
    imgContainer.appendChild(homeImg);

    const homeText = document.createElement("div");
    homeText.id = "home-text";
    home.appendChild(homeText);

    const h1 = document.createElement("h1");
    h1.textContent = TITLE;
    homeText.appendChild(h1);

    for (let text of P_TEXT) {
        const p = document.createElement("p");
        p.textContent = text;
        homeText.appendChild(p);
    }

    return home;
}


export default createHome;
