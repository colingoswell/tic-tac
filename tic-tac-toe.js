const currentPlayerSymbol = "x";
const squareValues = ["", "", "", "", "", "", "", "", ""];

window.addEventListener("DOMContentLoaded", (event) => {

    const grid = document.getElementById("tic-tac-toe-board");
    grid.addEventListener("click", event => {
        if (!event.target.id.includes("square-")) {
            return

        } else {
            const square = event.target.id.split("-")[1];
            squareNum = Number.parseInt(square);

            if (squareValues[squareNum] !== "") {
                return;
            }
        }
})


})
