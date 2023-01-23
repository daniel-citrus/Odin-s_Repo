const difficultySetting = document.querySelector('.difficulty');
const gameBoard = document.querySelector('.game .board')
const gamemode = document.querySelector('.gamemode');
const gameWindow = document.querySelector('.game');
const mainWindow = document.querySelector('.main');
const scoreWindow = document.querySelector('.game .score')
const startButton = document.querySelector('.starter form button');
const startGameButton = document.querySelector('.starter .startGame');
const startSettings = document.querySelector('.starter form');
const startWindow = document.querySelector('.starter')
const twoPlayerOption = document.getElementById('two_player');

/* Prevent refresh from enabling difficulty option */
document.addEventListener('DOMContentLoaded', () => {
    if (twoPlayerOption.checked) {
        difficultySetting.classList.add('disabled');
    }
    else {
        difficultySetting.classList.remove('disabled');
    }
})

/* Disable difficulty option if the gamemode is 2-player */
gamemode.addEventListener('click', (e) => {
    if (twoPlayerOption.checked) {
        difficultySetting.classList.add('disabled');
    }
    else {
        difficultySetting.classList.remove('disabled');
    }
});

startButton.addEventListener('click', () => {
    let mode = gamemode.querySelector('input[name="gamemode"]:checked');
    let difficulty = difficultySetting.querySelector('input[name="difficulty"]:checked');

    mode = (mode ? mode.value : null);
    difficulty = (difficulty ? difficulty.value : null);

    director.startGame(mode, difficulty);
});

const player = (name) => {
    let playerObj = {
        name,
        score: 0
    };

    function getName() {
        return playerObj.name;
    }

    function getScore() {
        return playerObj.score;
    }

    function incrementScore() {
        playerObj.score++;
    }

    function setSymbol(symbol) {
        playerObj.symbol = symbol;
    }

    function getSymbol() {
        return playerObj.symbol;
    }

    return {
        getName,
        getScore,
        incrementScore,
        getSymbol,
        setSymbol,
    }
}

const bot = () => {
    // inherit player
    // pick a move
}

const boardBrain = (() => {
    let board = [
        ['O', 'X', 'X'],
        ['X', 'O', 'X'],
        ['X', 'O', 'O']
    ];

    let len = board.length;

    function getBoard() {
        return board;
    }

    function newBoard(dimensions = 3) {
        let arr = Array(dimensions).fill(null);

        for (let a in arr) {
            arr[a] = Array(dimensions).fill(null);
        }

        board = arr;
    }

    function updateBoard(x, y, symbol) {
        if (board[x][y] === null) {
            board[x][y] = symbol;
        }
    }

    function checkRow(x, y, symbol) {
        let boardSymbol = board[x][y];

        if (!boardSymbol || symbol !== boardSymbol) {
            return null;
        }

        if (y === len - 1) {
            return symbol;
        }

        return checkRow(x, y + 1, symbol);
    }

    function checkCol(x, y, symbol) {
        let boardSymbol = board[x][y];

        if (!boardSymbol || symbol !== boardSymbol) {
            return null;
        }

        if (x === len - 1) {
            return symbol;
        }

        return checkCol(x + 1, y, symbol);
    }

    function checkDiag(x, y, symbol) {
        let boardSymbol = board[x][y];

        if (!boardSymbol || symbol !== boardSymbol) {
            return null;
        }

        if (x === len - 1) {
            return symbol;
        }

        return checkDiag(x + 1, y + 1, symbol);
    }

    function checkRevDiag(x, y, symbol) { }

    function checkWinner(symbol) {
        for (let i = 0; i < len; i++) {
            if (checkRow(i, 0, symbol)) {
                return { direction: 'row', value: i };
            }

            if (checkCol(0, i, symbol)) {
                return { direction: 'column', value: i };
            }
        }
        return { direction: null, value: null };
    }


    return {
        getBoard,
        newBoard,
        updateBoard,
        checkWinner,
    }
})();

let { direction, value } = boardBrain.checkWinner('O');
console.log(direction + ' , ' + value);

/* Controls DOM content */
const displayController = (() => {
    function openGame() {
        gameWindow.classList.remove('hidden');
    }

    function closeGame() {
        gameWindow.classList.add('hidden');

        let infoDivs = document.querySelectorAll('.info');

        for (let i of infoDivs) {
            i.textContent = '';
        }
    }

    function openMenu() {
        startWindow.classList.remove('hidden');
    }

    function closeMenu() {
        startWindow.classList.add('hidden');
    }

    function drawBoard(dimensions) {
        for (let x = 0; x < dimensions; x++) {
            for (let y = 0; y < dimensions; y++) {
                gameBoard.appendChild(newBoardCell(x, y));
            }
        }
    }

    function clearBoard() {
        while (gameBoard.hasChildNodes()) {
            gameBoard.removeChild(gameBoard.firstChild);
        }
    }

    function getBoardCell(x, y) {
        return gameBoard.querySelector(`[coordinates="${x},${y}"]`)
    }

    function newBoardCell(x, y) {
        let cell = document.createElement(`div`);

        cell.classList.add('cell');
        cell.setAttribute('coordinates', `${x},${y}`);

        return cell;
    }

    function updateCell(x, y, symbol) {
        let cell = getBoardCell(x, y);
        cell.textContent = symbol;
    }

    function updateMessage(message) {
        const messageBox = document.querySelector('.game .message');

        messageBox.textContent = message;
    }

    function updateScore(player, score) {
        if (player === 1) {
            player = '.player1';
        }
        else {
            player = '.player2';
        }

        gameWindow.querySelector(`${player} .score`).textContent = score;
    }

    return {
        drawBoard,
        openGame,
        closeGame,
        openMenu,
        closeMenu,
        getBoardCell,
        clearBoard,
        updateCell,
        updateMessage,
        updateScore
    };
})();

const director = (() => {
    let players = [];

    function gameReset() {
        startSettings.reset();
        displayController.closeGame();
        displayController.clearBoard();
        displayController.openMenu();
        boardBrain.newBoard();
    }

    function startGame(mode, difficulty) {
        displayController.closeMenu();
        displayController.openGame();
    }

    // gameLoop
    // checkWinner
    // declareWinner(playeObj)
    // update player turn
    // isGameover return winner

    return {
        gameReset,
        startGame,
    }
})();