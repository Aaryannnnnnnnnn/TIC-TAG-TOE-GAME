let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

function resetGame() {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

function disableBoxes() {
    for (let box of boxes) {
        box.disabled = true;
    }
}

function enableBoxes() {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

function showWinner(winner) {
    disableBoxes();
    msgContainer.classList.remove("hide");
    msg.innerText = `Congratulations, the winner is ${winner}`;
}

function checkWinner() {
    for (let pattern of winPattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos1val === pos2val && pos1val === pos3val) {
            showWinner(pos1val);
            return; // Exit the function once a winner is found
        }
    }

    // Check for a draw
    if ([...boxes].every(box => box.innerText !== "")) {
        msgContainer.classList.remove("hide");
        msg.innerText = "It's a draw!";
    }
}

boxes.forEach(function(box) {
    box.addEventListener("click", function() {
        if (box.innerText === "") { // Only allow marking if the box is empty
            box.innerText = turn0 ? "0" : "X";
            box.disabled = true; // Disable the clicked box
            turn0 = !turn0; // Switch turns
            checkWinner(); // Check for a winner after each move
        }
    });
});

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
















