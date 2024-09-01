function gameBoard() {
    let board = ["", "", "", "", "", "", "", "", ""];


    let isPlayer1Turn = true;
    let winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];


    const cells = document.querySelectorAll(".cell");
    const statusElem = document.querySelector(".status");
    const resetButton = document.querySelector(".reset-button");


    function updateStatus(message) {
        statusElem.textContent = message;
    }

    const checkWinner = function () {
        for (let condition of winConditions) {
            const [a, b, c] = condition;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                updateStatus(`Player ${board[a]} wins!`);
                return true;
            }
        }
        if (!board.includes("")) {
            updateStatus("It's a draw!");
            return true;
        }
        return false;
    }

    function handleCellClick(event) {
        const index = event.target.dataset.index;
        if (board[index] !== "" || statusElem.textContent.includes("wins")) {
            return;
        }
        board[index] = isPlayer1Turn ? "X" : "O";
        event.target.textContent = board[index];

        if (checkWinner()) return;

        isPlayer1Turn = !isPlayer1Turn;
        updateStatus(`Player ${isPlayer1Turn ? "X" : "O"}'s turn`);
    }

    function resetGame() {
        board = ["", "", "", "", "", "", "", "", ""];
        cells.forEach(cell => (cell.textContent = ""));
        isPlayer1Turn = true;
        updateStatus("Player X's turn");
    }

    cells.forEach(cell => cell.addEventListener("click", handleCellClick));
    resetButton.addEventListener("click", resetGame);

    updateStatus("Player X's turn");
};

gameBoard();




