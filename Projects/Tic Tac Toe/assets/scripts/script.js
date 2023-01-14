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

    function getSymbol() {
        return playerObj.symbol;
    }

    function incrementScore() {
        playerObj.score++;
    }

    function setSymbol(sym) {
        playerObj.symbol = sym;
    }

    return {
        getName,
        getScore,
        getSymbol,
        incrementScore,
        setSymbol
    }
}

const bot = () => {
    // inherit player
    // pick a move
}

const gameBoard = (() => {
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

    // updateBoard
    // updateMessage(player)
    // updateScores

    return {openMenu, closeMenu};
})();

const director = (() => {
    // start game
    // declareWinner(playeObj)
    // update player turn
    // isGameover return winner
})();