//GLOBAL VARIABLES

const sketchScreen = document.querySelector("#sketchScreen");
const button = document.querySelector("#create");

//EVENT LISTENERS

button.addEventListener("click", event => {
    let gridSize;
    do {
        const promptResult = (prompt("Please enter a number between 1 - 100."));
        if (promptResult === null) {
            return;
        };
        gridSize = parseInt(promptResult, 10);
    } while ((gridSize < 1) || (gridSize > 100) || (Number.isNaN(gridSize)));
    while (sketchScreen.firstChild) {
        sketchScreen.removeChild(sketchScreen.firstChild);
    }
    makeGrid(gridSize);
});

sketchScreen.addEventListener("mouseover", event => {
    const randomColor = randomColorGen();
    if (event.target.classList.contains("col")) {
        event.target.style.backgroundColor = randomColor;
        event.target.style.opacity = Number(event.target.style.opacity) + 0.1; 
    }
})

//FUNCTIONS

function makeGrid(size) {
    for (i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.className = "row";
        sketchScreen.appendChild(row);

        for (j = 0; j < size; j++) {
            const col = document.createElement("div");
            col.className = "col";
            row.appendChild(col);
        }
    }
}

function randomColorGen() {
    let value1 = Math.floor(Math.random() * 256);
    let value2 = Math.floor(Math.random() * 256);
    let value3 = Math.floor(Math.random() * 256);
    return `rgb(${value1}, ${value2}, ${value3})`;
}
