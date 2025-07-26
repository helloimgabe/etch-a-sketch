//Create 16x16 grid of square divs inside the container div
const sketchScreen = document.querySelector("#sketchScreen");
const button = document.querySelector("#create");


button.addEventListener("click", event => {
    let gridSize;
    do {
        const promptResult = (prompt("What size grid would you like to create? Be sure to enter a valid number between 1 and 100."));
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

sketchScreen.addEventListener("mouseover", event => {
    if (event.target.classList.contains("col")) {
        event.target.style.backgroundColor = "purple";
    }
})

