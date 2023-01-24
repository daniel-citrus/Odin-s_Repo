/* const exitButton = document.getElementById('exit'); */
const difficultySetting = document.querySelector('.difficulty');
const firstPlayerSymbol = document.querySelector('.firstPlayerSymbol');
const gameBoard = document.querySelector('.game .board')
const gamemodeSetting = document.querySelector('.gamemode');
const gameWindow = document.querySelector('.game');
const mainWindow = document.querySelector('.main');
const player1Name = document.querySelector('.game .player1 .name');
const player2Name = document.querySelector('.game .player2 .name');
/* const restartButton = document.getElementById('restart'); */
const scoreWindow = document.querySelector('.game .playerBoard')
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

/* exitButton.addEventListener('click', () => {
    director.gameExit();
})
 */
/* Disable difficulty option if the gamemode is 2-player */
gamemodeSetting.addEventListener('click', (e) => {
    if (twoPlayerOption.checked) {
        difficultySetting.classList.add('disabled');
    }
    else {
        difficultySetting.classList.remove('disabled');
    }
});

/* restartButton.addEventListener('click', () => {
    director.startGame();
}) */

startButton.addEventListener('click', () => {
    let mode = gamemodeSetting.querySelector(`input[name='gamemode']:checked`).value;
    let difficulty = difficultySetting.querySelector(`input[name='difficulty']:checked`).value;
    let symbol = firstPlayerSymbol.querySelector(`input[name='symbol']:checked`).value;

    director.startGame(mode, difficulty, symbol);
});

const player = (name) => {
    let playerObj = {
        name,
    };

    function getName() {
        return playerObj.name;
    }

    function setSymbol(symbol) {
        playerObj.symbol = symbol;
    }

    function getSymbol() {
        return playerObj.symbol;
    }

    return {
        getName,
        getSymbol,
        setSymbol,
    }
}

const bot = (difficulty) => {
    let myBot = player('Computer');
    let moveType;

    function notSoSmartMove() {

    }

    function smartMove() {

    }

    if (difficulty === 'easy') {
        moveType = notSoSmartMove;
    }
    else if (difficulty === 'hard') {
        moveType = smartMove;
    }

    return Object.create(
        myBot,
        moveType,
    )
}

const boardBrain = (() => {
    let board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];

    let len = board.length;

    function getBoard() {
        return board;
    }

    function newBoard(dimensions = 3) {
        board = Array(dimensions).fill(null);

        for (let b in board) {
            board[b] = Array(dimensions).fill(null);
        }
    }

    function updateBoard(x, y, symbol) {
        if (board[x][y] === null) {
            board[x][y] = symbol;

            return true;
        }

        return false;
    }

    /* Win condition: matching row */
    function checkRow(x, y, symbol) {
        let boardSymbol = board[x][y];

        if (!boardSymbol || symbol !== boardSymbol) {
            return false;
        }

        if (y === len - 1) {
            return true;
        }

        return checkRow(x, y + 1, symbol);
    }

    /* Win condition: matching column */
    function checkCol(x, y, symbol) {
        let boardSymbol = board[x][y];

        if (!boardSymbol || symbol !== boardSymbol) {
            return false;
        }

        if (x === len - 1) {
            return true;
        }

        return checkCol(x + 1, y, symbol);
    }

    /* Win condition: matching symbols from top left to bottom right */
    function checkDiag(x, y, symbol) {
        let boardSymbol = board[x][y];

        if (!boardSymbol || symbol !== boardSymbol) {
            return false;
        }

        if (x === len - 1) {
            return true;
        }

        return checkDiag(x + 1, y + 1, symbol);
    }

    /* Win condition: matching symbols from top right to bottom left */
    function checkRevDiag(x, y, symbol) {
        let boardSymbol = board[x][y];

        if (!boardSymbol || symbol !== boardSymbol) {
            return false;
        }

        if (x === len - 1) {
            return true;
        }

        return checkRevDiag(x + 1, y - 1, symbol);
    }

    function checkWinner(symbol) {
        let direction = null;
        let value = null;

        for (let i = 0; i < len; i++) {
            if (checkRow(i, 0, symbol)) {
                return { direction: 'row', value: i };
            }

            if (checkCol(0, i, symbol)) {
                return { direction: 'col', value: i };
            }
        }

        if (checkDiag(0, 0, symbol)) {
            return { direction: 'diag', value };
        }

        if (checkRevDiag(0, len - 1, symbol)) {
            return { direction: 'rdiag', value };
        }

        return { direction, value };
    }


    return {
        getBoard,
        newBoard,
        updateBoard,
        checkWinner,
    }
})();

/* Controls DOM content */
const displayController = (() => {
    let diagonal = [
        { x: 0, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 2 }
    ];

    let reverseDiagonal = [
        { x: 0, y: 2 },
        { x: 1, y: 1 },
        { x: 2, y: 0 }
    ];

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

    function drawBoard(dimensions = 3) {
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

        cell.addEventListener('click', () => { })

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

    function updatePlayerBoard(player1, player2) {
        player1Name.textContent = player1.getName();
        player2Name.textContent = player2.getName();
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
        updatePlayerBoard,
        updateScore
    };
})();

const director = (() => {
    let player1;
    let player2;
    let mode;
    let difficulty;
    /*  0 for Player 1
        1 for Player 2 */
    let currentPlayer = 0;
    let gameActive = false;
    let moves = 0;

    function gameExit() {
        startSettings.reset();
        displayController.closeGame();
        displayController.clearBoard();
        displayController.openMenu();
        boardBrain.newBoard();
    }

    /* 
        Instantiate 2 players according to the game settings
        symbol -> Player 1's symbol, if it's 'O' then Player 2 will make the first move.
    */
    function initiatePlayers(mode, difficulty, symbol) {
        player1 = player('Player 1');

        if (mode === 'computer') {
            if (difficulty === 'easy' || difficulty === 'hard') {
                player2 = bot(difficulty);
            }
            else {
                throw new Error('Invalid difficulty value');
            }
        }
        else if (mode === 'two_player') {
            player2 = player('Player 2');
        }
        else {
            throw new Error('Invalid mode value');
        }

        if (symbol === 'X') {
            player1.setSymbol('X');
            player2.setSymbol('O');
        }
        else if (symbol === 'O') {
            player1.setSymbol('O');
            player2.setSymbol('X');
            currentPlayer = 1;
        }
        else {
            throw new Error('Invalid symbol value');
        }

        displayController.updatePlayerBoard(player1, player2);
    }

    function restartGame() {

    }

    function setSettings(gamemode, diff) {
        mode = gamemode;
        difficulty = diff;
    }

    function startGame(gamemode, diff, symbol) {
        gameActive = true;

        setSettings(gamemode, diff);
        initiatePlayers(gamemode, diff, symbol);

        displayController.drawBoard();
        displayController.closeMenu();
        displayController.openGame();
        boardBrain.newBoard();
    }

    function makeMove() {
        /* get the current player */
        let player = (currentPlayer === 0 ? player1 : player2);

        /*  Update boardBrain
            update display board with the current player's symbol 
            
            IF the cell clicked is populated already, do not do anything just RETURN */
        
        
            /*  get game mode
                if the mode is computer, then make player 2 move after a delay
                skip current player switch

            else switch current player */
    }

    // checkWinner
    // declareWinner(playeObj)
    // update player turn
    // isGameover return winner

    return {
        gameExit,
        startGame,
        setSettings,
        makeMove,
    }
})();

director.startGame('two_player', 'easy', 'O');
director.makeMove();