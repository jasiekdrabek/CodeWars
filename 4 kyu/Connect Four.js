// Take a look at wiki description of Connect Four game:

// Wiki Connect Four

// The grid is 6 row by 7 columns, those being named from A to G.

// You will receive a list of strings showing the order of the pieces which dropped in columns:

//   piecesPositionList = ["A_Red",
//                         "B_Yellow",
//                         "A_Red",
//                         "B_Yellow",
//                         "A_Red",
//                         "B_Yellow",
//                         "G_Red",
//                         "B_Yellow"]
// The list may contain up to 42 moves and shows the order the players are playing.

// The first player who connects four items of the same color is the winner.

// You should return "Yellow", "Red" or "Draw" accordingly.

function whoIsWinner(piecesPositionList) {
    let i;
    const grid = [...Array(6)].map(() => [...Array(7)].fill('_'));

    for (const move of piecesPositionList) {
        // Parse the move string to get the column and color
        const [column, color] = move.split('_');
        const columnIndex = column.charCodeAt(0) - 'A'.charCodeAt(0);

        // Place the piece on the grid
        for (i = 0; i < 6; i++) {
            if (grid[i][columnIndex] === '_') {
                grid[i][columnIndex] = color;
                break;
            }
        }

        // Check for a winning condition
        if (checkForWin(grid, i, columnIndex, color)) {
            return color;
        }
    }

    // If no winning condition was found, return "Draw"
    return "Draw";
}

function checkForWin(grid, row, column, color) {
    // Check the row
    let count = 0;
    for (let i = column - 3; i < column + 4; i++) {
        if (i >= 0 && i < 7 && grid[row][i] === color) {
            count++;
        } else {
            count = 0;
        }
        if (count === 4) {
            return true;
        }
    }

    // Check the column
    count = 0;
    for (let i = row - 3; i < row + 4; i++) {
        if (i >= 0 && i < 6 && grid[i][column] === color) {
            count++;
        } else {
            count = 0;
        }
        if (count === 4) {
            return true;
        }
    }

    // Check the diagonal
    count = 0;
    for (let i = -3; i < 4; i++) {
        if (
            row + i >= 0 &&
            row + i < 6 &&
            column + i >= 0 &&
            column + i < 7 &&
            grid[row + i][column + i] === color
        ) {
            count++;
        } else {
            count = 0;
        }
        if (count === 4) {
            return true;
        }
    }

    // Check the other diagonal
    count = 0;
    for (let i = -3; i < 4; i++) {
        if (
            row + i >= 0 &&
            row + i < 6 &&
            column - i >= 0 &&
            column - i < 7 &&
            grid[row + i][column - i] === color
        ) {
            count++;
        } else {
            count = 0;
        }
        if (count === 4) {
            return true;
        }
    }

    return false;
}
