const gameBoard = document.querySelector('.game .board')
const gameWindow = document.querySelector('.game');
const mainWindow = document.querySelector('.main');
const startWindow = document.querySelector('.starter')
const startButton = document.querySelector('.starter button');

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

    return {
        getName,
        getScore,
        incrementScore,
    }
}

const bot = () => {
    // inherit player
    // pick a move
}

const board = (() => {
    let gBoard = newBoard();

    function getBoard() {
        return gBoard;
    }

    function newBoard() {
        let arr = Array(3).fill(null);

        for (let a in arr) {
            arr[a] = Array(3).fill(null);
        }

        return arr;
    }

    function updateBoard(x, y, symbol) {
        gBoard[x][y] = symbol;
    }

    return {
        getBoard,
        newBoard,
        updateBoard
    }
})();

const display = (() => {
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

        let radioButtons = startWindow.querySelectorAll('input[type="radio"');

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

    function updateCell(x, y, symbol) {
        let cell = getBoardCell(x, y);
        cell.textContent = symbol;
    }

    function updateMessage(message) {
        const messageBox = document.querySelector('.game .message');

        messageBox.textContent = message;
    }

    function updateScores(player) {
        
    }

    return { openGame, closeGame, openMenu, closeMenu, drawBoard, getBoardCell, clearBoard, updateCell };
})();

display.openGame();
display.drawBoard(3);


const director = (() => {
    // start game
    // declareWinner(playeObj)
    // update player turn
    // isGameover return winner
})();