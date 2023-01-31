const exitButton = document.getElementById('exit');
const difficultySetting = document.querySelector('.difficulty');
const firstPlayerSymbol = document.querySelector('.firstPlayerSymbol');
const gameBoard = document.querySelector('.game .board')
const gamemodeSetting = document.querySelector('.gamemode');
const gameWindow = document.querySelector('.game');
const player1Name = document.querySelector('.game .player1 .name');
const player2Name = document.querySelector('.game .player2 .name');
const restartButton = document.getElementById('restart');
const startButton = document.querySelector('.starter form button');
const startSettings = document.querySelector('.starter form');
const startWindow = document.querySelector('.starter')
const twoPlayerOption = document.getElementById('two_player');

document.addEventListener('DOMContentLoaded', () => {
    difficultySettingCheck();
})

exitButton.addEventListener('click', () => {
    director.gameExit();
    difficultySettingCheck();
})

/* Disables difficulty radio buttons if the gamemode is two-player */
function difficultySettingCheck() {
    if (twoPlayerOption.checked) {
        difficultySetting.classList.add('disabled');
    }
    else {
        difficultySetting.classList.remove('disabled');
    }
}

/* Disable difficulty option if the gamemode is 2-player */
gamemodeSetting.addEventListener('click', (e) => {
    if (twoPlayerOption.checked) {
        difficultySetting.classList.add('disabled');
    }
    else {
        difficultySetting.classList.remove('disabled');
    }
});

restartButton.addEventListener('click', () => {
    director.restartGame();
})

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
    let move;

    let notSoSmartMove = () => {
        let decision = Math.floor(Math.random() * possibleMoves.length);
    }

    function smartMove() {
    }

    if (difficulty === 'easy') {
        move = notSoSmartMove;
    }
    else if (difficulty === 'hard') {
        move = smartMove;
    }

    return Object.assign(
        {},
        myBot,
        { move },
    )
}

const boardBrain = (() => {
    let board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];

    let len = board.length;

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

    function newBoard() {
        clearBoard();
        drawBoard();
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

    function colorCell(x, y) {
        getBoardCell(x, y).classList.add('win-mark');
    }

    function getBoardCell(x, y) {
        return gameBoard.querySelector(`[coordinates="${x},${y}"]`);
    }

    function newBoardCell(x, y) {
        let cell = document.createElement(`div`);

        cell.classList.add('cell');
        cell.setAttribute('coordinates', `${x},${y}`);

        cell.addEventListener('click', () => {
            director.makeMove(x, y);
        })

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

    function markWinningLine(direction, value) {
        let array;

        if (direction === 'diag' || direction === 'rdiag') {
            if (direction === 'diag') {
                array = diagonal;
            }
            else if (direction === 'rdiag') {
                array = reverseDiagonal;
            }

            for (let a of array) {
                colorCell(a['x'], a['y']);
            }
        }
        else {
            if (direction === 'row') {
                for (let y = 0; y < 3; y++) {
                    colorCell(value, y);
                }
            }
            else if (direction === 'col') {
                for (let x = 0; x < 3; x++) {
                    colorCell(x, value);
                }
            }
        }
    }

    return {
        openGame,
        closeGame,
        openMenu,
        closeMenu,
        getBoardCell,
        newBoard,
        drawBoard,
        clearBoard,
        updateCell,
        updateMessage,
        updatePlayerBoard,
        updateScore,
        markWinningLine,
    };
})();

const director = (() => {
    let player1;
    let player2;
    let mode;
    let difficulty;
    let gameOver = false;
    /*  0 for Player 1
        1 for Player 2 */
    let currentPlayer = 0;
    let moves = 0;

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
            currentPlayer = 1 - currentPlayer;
        }
        else {
            throw new Error('Invalid symbol value');
        }

        // If bot has symbol 'X' then it will make the first move
        if (mode === 'computer' && symbol === 'O') {
            player2.move();
        }

        displayController.updatePlayerBoard(player1, player2);
    }

    function restartGame() {
        displayController.updateMessage('');
        displayController.newBoard();
        boardBrain.newBoard();
        currentPlayer = 0;
        moves = 0;
        gameOver = false;
    }

    function gameExit() {
        startSettings.reset();
        displayController.closeGame();
        displayController.openMenu();
        displayController.clearBoard();
        boardBrain.newBoard();
        currentPlayer = 0;
        moves = 0;
        gameOver = false;
    }

    function setSettings(gamemode, diff) {
        mode = gamemode;
        difficulty = diff;
    }

    function startGame(gamemode, diff, symbol) {
        setSettings(gamemode, diff);
        initiatePlayers(gamemode, diff, symbol);

        displayController.closeMenu();
        displayController.drawBoard();
        displayController.openGame();
        boardBrain.newBoard();
    }

    /* Make a move on the board, uses the current players symbol, then toggles the current player. Checks for winners or ties. */
    function makeMove(x, y) {
        if (gameOver) {
            console.log('yes');
            return;
        }

        let player = (currentPlayer === 0 ? player1 : player2);
        let symbol = player.getSymbol();

        // Nothing happens if the cell is already populated
        if (boardBrain.updateBoard(x, y, symbol)) {
            displayController.updateCell(x, y, symbol);
            moves++;

            let { direction, value } = boardBrain.checkWinner(symbol);

            if (isGameOver(direction, value, player)) {
                return;
            }
        }
        else {
            return;
        }

        if (mode === 'computer') {
            symbol = player2.getSymbol();
            player2.move();
            moves++;

            let { direction, value } = boardBrain.checkWinner(symbol);

            if (isGameOver(direction, value, player2)) {
                return;
            }
        }
        else {
            currentPlayer = 1 - currentPlayer;
        }
    }

    function isGameOver(direction, value, player) {
        if (direction) {
            declareWinner(player, direction, value);
        }
        else if (moves >= 9) {
            declareTie();
        }
        else {
            return false;
        }

        gameOver = true;
        return true;
    }

    function declareWinner(player, direction, value) {
        displayController.markWinningLine(direction, value);
        displayController.updateMessage(`${player.getName()} has won!`);
    }

    function declareTie() {
        displayController.updateMessage(`Tie game`);
    }

    return {
        gameExit,
        startGame,
        setSettings,
        makeMove,
        restartGame,
    }
})();

/* director.startGame('computer', 'easy', 'X'); */