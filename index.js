function gameBoard() {
    const board = ["", "", "", "", "", "", "", "", ""];
    const player1 = "X";
    const player2 = "O";
    let isPlayer1Turn = true;
    let marker;

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

        isPlayer1Turn = !isPlayer1Turn;


    }


    return { getBoard, player1, player2, showBoard, makeMove };
}

const game = gameBoard();

game.showBoard(game.getBoard());

const move = game.makeMove;

//game.makeMove(game.isPlayer1Turn, game.isPlayer2Turn);


