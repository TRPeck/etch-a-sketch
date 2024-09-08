function createGrid(x) {
    const bdy = document.querySelector("body");
    const newBtn = document.createElement("button");
    newBtn.setAttribute("id", "newBtn");
    newBtn.textContent = "New Sketch";
    newBtn.style.padding = "8px";
    newBtn.style.margin = "4px auto";
    newBtn.addEventListener("click", () => {
        newGrid();
    });
    const container = document.querySelector("#container");
    bdy.insertBefore(newBtn, container);
    bdy.style.display = "flex";
    bdy.style.flexDirection = "column"
    bdy.style.justifyContent = "center";
    // set height of grid div to window height (usually smaller) so grid will fit user's screen
    const gridSize = window.innerHeight - 50;
    container.style.height = gridSize + "px";
    // set width of grid div equal to its height to make grid square
    container.style.width = container.style.height;
    // divide by number of number of squares in row to get their required dimensions
    container.style.margin = "auto";
    const sideLength = gridSize / x;
    for(let i = 0; i < x ** 2; i++) {
        let square = document.createElement("div");
        // ensure border does not mess with previous calculations
        square.style.boxSizing = "border-box";
        square.style.width = sideLength + "px";
        square.style.height = sideLength + "px";
        square.style.border = "1px solid black";
        // change square color on hover
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
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
        console.log(newSize);
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

window.addEventListener("load", () => {
    createGrid(16);
});