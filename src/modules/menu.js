const HEADERS = [
    "Food",
    "Price",
    "Description"
]

const ITEMS = [
    [
        "Cogito",
        "$10",
        "Aspernatur veniam iste pariatur sequi ipsam asperiores sint quam, blanditiis ex similique."
    ],
    [
        "Ergo",
        "$20",
        "Maxime, error architecto pariatur dolore ut aspernatur labore vero quaerat eveniet."
    ],
    [
        "Sum",
        "$30",
        "Necessitatibus odit, placeat animi, libero quia corporis aliquam esse ratione ducimus."
    ]
]

function createMenu(){
    const menu = document.createElement("div");
    menu.id = "menu";

    const table = document.createElement("table");
    menu.appendChild(table);

    const header = document.createElement("tr");
    for (let h of HEADERS){
        const th = document.createElement("th");
        th.textContent = h;
        header.appendChild(th);
    }
    table.appendChild(header);

    for (let item of ITEMS){
        const tr = document.createElement("tr");
        for (let d of item){
            const td = document.createElement("td");
            td.textContent = d;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    return menu;
}

export default createMenu;