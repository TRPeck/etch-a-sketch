function createGrid(x) {
    const container = document.querySelector("#container");
    container.style.height = window.innerHeight.toString() + "px";
    container.style.width = container.style.height;
    const sideLength = getComputedStyle(container).width.replace("px", "") / x;
    for(let i = 0; i < x ** 2; i++) {
        let square = document.createElement("div");
        square.style.boxSizing = "border-box";
        square.style.width = sideLength + "px";
        square.style.height = sideLength + "px";
        square.style.border = "1px solid black";
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });
        container.appendChild(square);
    }
}

window.addEventListener("load", () => {
    createGrid(16);
});