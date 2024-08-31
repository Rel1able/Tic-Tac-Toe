function gameBoard() {
    let board = ["", "", "", "", "", "", "", "", ""];

    let isPlayer1Turn = true;
    let marker;
    let winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    const getBoard = () => board;

    const showBoard = function (arr) {
        for (let i = 0; i < arr.length; i += 3) {
            console.log(arr.slice(i, i + 3));

        }
        console.log("Type move() to make a move");
    }

    const replaceValueInArray = function (value, arr, marker) {
        if (arr[value - 1] === "") {
            arr[value - 1] = marker;
        } else {
            console.log("Cell is already taken. Try again");
            return false;
        }
        return true;


    }

    const checkWinner = function () {
        for (let condition of winConditions) {
            const [a, b, c] = condition;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                console.log(`Player ${board[a]} wins!`);
                return true;
            }
        }
        if (!board.includes("")) {
            console.log("It's a draw!");
            return true;
        }
        return false;
    }

    const makeMove = function (ask) {
        if (isPlayer1Turn) {
            marker = "X";
            while (true) {
                ask = prompt(`Player 1 make your move.Enter the cell from 1 to 9`);
                ask = parseInt(ask, 10);
                if (ask > 0 && ask < 10) {
                    const success = replaceValueInArray(ask, board, marker);
                    if (success) break;
                } else {
                    console.log("Invalid input. Try again. ")
                }

            }
        } else {
            marker = "O";
            while (true) {
                ask = prompt(`Player 2 make your move.Enter the cell from 1 to 9`);
                ask = parseInt(ask, 10);
                if (ask > 0 && ask < 10) {
                    const success = replaceValueInArray(ask, board, marker);
                    if (success) break;
                } else {
                    console.log("Invalid input. Try again. ")
                }
            }


        }

        console.log("----------------------")
        console.log("----------------------")

        showBoard(getBoard());

        if (checkWinner()) {
            console.log("Game over! Type playAgain() to restart.");


        }

        isPlayer1Turn = !isPlayer1Turn;

        return `Player ${marker} made a move`;
    }

    const playAgain = function () {
        board = getBoard();
        board = ["", "", "", "", "", "", "", "", ""];
        showBoard(getBoard());
    }


    return { getBoard, showBoard, makeMove, playAgain };
}

const game = gameBoard();

game.showBoard(game.getBoard());

const move = game.makeMove;
const playAgain = game.playAgain;




