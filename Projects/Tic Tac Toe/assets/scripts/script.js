const gameBoard = document.querySelector('.game .board')
const gameWindow = document.querySelector('.game');
const mainWindow = document.querySelector('.main');
const scoreWindow = document.querySelector('.game .score')
const startButton = document.querySelector('.starter button');
const startGameButton = document.querySelector('.starter .startGame');
const startSettings = document.querySelector('.starter form');
const startWindow = document.querySelector('.starter')

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
    let board = newBoard();

    function getBoard() {
        return board;
    }

    function newBoard() {
        let arr = Array(3).fill(null);

        for (let a in arr) {
            arr[a] = Array(3).fill(null);
        }

        return arr;
    }

    function updateBoard(x, y, symbol) {
        board[x][y] = symbol;
    }

    return {
        getBoard,
        newBoard,
        updateBoard
    }
})();

/* Controls DOM content */
const displayController = (() => {
    const gamemode = startWindow.querySelector('.gamemode');

    /* Disable difficulty option if the gamemode is 2-player */
    gamemode.addEventListener('click', (e) => {
        let difficultySetting = startWindow.querySelector('.difficulty');
        if (e.target.id === 'two_player') {
            difficultySetting.classList.add('disabled');
        }
        else {
            difficultySetting.classList.remove('disabled');
        }
    });

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

        let radioButtons = startWindow.querySelectorAll(`input[type="radio"]`);

        for (let r of radioButtons) {
            r.checked = false;
        }
    }

    function drawBoard(dimensions) {
        let xCoord = dimensions;
        let yCoord = dimensions;

        for (let x = 0; x < xCoord; x++) {
            for (let y = 0; y < yCoord; y++) {
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

    function markCell(cell, symbol) {
        cell.textContent = symbol;
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
        openGame,
        closeGame,
        openMenu,
        closeMenu,
        drawBoard,
        getBoardCell,
        clearBoard,
        updateCell,
        markCell,
        updateMessage,
        updateScore
    };
})();

const director = (() => {
    let players = [];

    function gameReset() {
        startSettings.reset();
    }

    // gameLoop
    // start game
    // checkWinner
    // declareWinner(playeObj)
    // update player turn
    // isGameover return winner

    return {
        gameReset,
    }
})();