function createGrid(x) {
    const bdy = document.querySelector("body");
    bdy.style.margin = "0";
    bdy.style.padding = "0";
    bdy.style.display = "flex";
    bdy.style.flexDirection = "column"
    bdy.style.justifyContent = "center";

    const newBtn = document.createElement("button");
    newBtn.setAttribute("id", "newBtn");
    newBtn.textContent = "New Sketch";
    newBtn.style.padding = "8px";
    newBtn.style.margin = "4px auto";
    newBtn.addEventListener("click", () => {
        newGrid();
    });

    const container = document.querySelector("#container");
    container.style.display = "flex";
    container.style.flexWrap = "wrap";

    bdy.insertBefore(newBtn, container);

    // set height of grid div to window height (usually smaller) so grid will fit user's screen and subtract space for new grid button
    const gridSize = window.innerHeight - 50;
    container.style.height = gridSize + "px";
    // set width of grid div equal to its height to make grid square
    container.style.width = container.style.height;
    container.style.margin = "auto";
    // divide by number of number of squares in row to get their required dimensions
    const sideLength = gridSize / x;
    
    // populate grid div with squares
    for(let i = 0; i < x ** 2; i++) {
        let square = document.createElement("div");
        // ensure border does not mess with previous calculations
        square.style.boxSizing = "border-box";
        square.style.width = sideLength + "px";
        square.style.height = sideLength + "px";
        square.style.border = "1px solid black";
        square.setAttribute("class", "empty");
        // change square color or opacity on hover
        square.addEventListener("mouseover", () => {
            if(square.getAttribute("class") == "empty") {
                square.style.background = randomColor();
                square.setAttribute("class", "full");
            }
            else {
                let colorLength = square.style.background.length;
                let opacity = square.style.background.substring(colorLength-4, colorLength-1);
                // check if opacity is still part of background string
                if(opacity.includes(".")) {
                    let newOpacity = parseFloat(opacity) + 0.1;
                    square.style.background = square.style.background.replace(opacity, newOpacity.toString());
                }
            }
        });
        container.appendChild(square);
    }
}

function newGrid() {
    let newSize = prompt("Enter the number of squares per side of new sketch: (2-100)");
    if((!Number.isInteger(parseFloat(newSize)) || newSize <= 1 || newSize > 100) && newSize !== null) {
        alert("Please enter a whole number between 2 and 100.");
    }
    else if(newSize !== null) {
        removeGrid();
        document.querySelector("#newBtn").remove();
        createGrid(newSize);
    }
}

function removeGrid() {
    const container = document.querySelector("#container");
    while(container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
}

function randomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red} ${green} ${blue} / 0.1)`;
}

window.addEventListener("load", () => {
    createGrid(16);
});