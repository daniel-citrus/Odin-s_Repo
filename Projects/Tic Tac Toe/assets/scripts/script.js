const exitButton = document.getElementById('exit');
const difficultySetting = document.querySelector('.difficulty');
const difficultyInfoDiv = document.querySelector('.game .gameInfo .difficulty');
const firstPlayerSymbol = document.querySelector('.firstPlayerSymbol');
const gameBoard = document.querySelector('.game .board')
const gamemodeSetting = document.querySelector('.gamemode');
const gameWindow = document.querySelector('.game');
const player1Div = document.querySelector('.game .player1');
const player2Div = document.querySelector('.game .player2');
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

/**
 * Disables difficulty radio buttons if the gamemode is two-player
 */
function difficultySettingCheck() {
    if (twoPlayerOption.checked) {
        difficultySetting.classList.add('disabled');
    }
    else {
        difficultySetting.classList.remove('disabled');
    }
}

/**
 * Disable difficulty option if the gamemode is 2-player
 */
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

    /**
     * Recursive algorithm to decide the next tic tac toe move. Also utilizes
     * alpha-beta pruning.
     * @param {integer} depth - # moves ahead
     * @param {boolean} maximize - maximizer or minimizer
     * @param {integer} alpha - tracks maximizer score
     * @param {integer} beta - tracks minimizer score
     * @returns bestScore - score for the best move possible
     */
    function minimax(depth, maximize, alpha, beta) {
        let { status, symbol } = boardBrain.getGameStatus();
        let botSymbol = myBot.getSymbol();
        let playerSymbol = (botSymbol === 'X') ? 'O' : 'X';
        let availableMoves = boardBrain.getEmptyCells();

        if (status === 'win') {
            if (symbol === botSymbol) {
                return 1 * (availableMoves.length + 1);
            }
            else {
                return -1 * (availableMoves.length + 1);
            }
        }
        else if (status === 'tie') {
            return 0;
        }

        let bestScore = Number.NEGATIVE_INFINITY;

        if (maximize) {
            for (let a of availableMoves) {
                boardBrain.updateBoard(a[0], a[1], botSymbol);
                let score = minimax(depth + 1, false, alpha, beta);
                boardBrain.updateBoard(a[0], a[1], '');

                alpha = Math.max(alpha, score);
                if (beta <= alpha) break;

                bestScore = Math.max(score, bestScore);
            }
        }
        else {
            bestScore = Number.POSITIVE_INFINITY;

            for (let a of availableMoves) {
                boardBrain.updateBoard(a[0], a[1], playerSymbol);
                let score = minimax(depth + 1, true, alpha, beta);
                boardBrain.updateBoard(a[0], a[1], '');

                beta = Math.min(beta, score);
                if (beta <= alpha) break;

                bestScore = Math.min(score, bestScore);
            }
        }

        return bestScore;
    }

    /**
     * Returns a random empty cell on the game board
     * {x, y}
     *  */
    function notSoSmartMove() {
        let availableMoves = boardBrain.getEmptyCells();
        let len = availableMoves.length;
        let decision = Math.floor(Math.random() * len);

        return { x: availableMoves[decision][0], y: availableMoves[decision][1] };
    }

    /**
     * Generates a random move on the first 2 moves, then returns smart decisions when there are 6 empty cells left.
     */
    function normalMove() {
        let availableMoves = boardBrain.getEmptyCells();

        if (availableMoves.length > 6) {
            return notSoSmartMove();
        }

        let bestScore = Number.NEGATIVE_INFINITY;
        let bestMove = {};
        let symbol = this.getSymbol();

        for (let a of availableMoves) {
            boardBrain.updateBoard(a[0], a[1], symbol);
            let score = minimax(0, false, Math.NEGATIVE_INFINITY, Math.POSITIVE_INFINITY);
            boardBrain.updateBoard(a[0], a[1], '');

            if (bestScore < score) {
                bestScore = score;
                bestMove = { x: a[0], y: a[1] };
            }
        }

        return bestMove;
    }

    /**
     * Uses the minimax algorithm along with alpha-beta pruning to check for the best possible move. 
     */
    function smartMove() {
        let availableMoves = boardBrain.getEmptyCells();
        let bestScore = Number.NEGATIVE_INFINITY;
        let bestMove = {};
        let symbol = this.getSymbol();

        for (let a of availableMoves) {
            boardBrain.updateBoard(a[0], a[1], symbol);
            let score = minimax(0, false, Math.NEGATIVE_INFINITY, Math.POSITIVE_INFINITY);
            boardBrain.updateBoard(a[0], a[1], '');

            if (bestScore < score) {
                bestScore = score;
                bestMove = { x: a[0], y: a[1] };
            }
        }

        return bestMove;
    }

    switch (difficulty) {
        case 'easy':
            move = notSoSmartMove;
            break;
        case 'medium':
            move = normalMove;
            break;
        case 'hard':
            move = smartMove;
            break;
    }

    return Object.assign(
        {},
        myBot,
        { move },
        { firstMove: notSoSmartMove },
    )
}

const boardBrain = (() => {
    let board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    let len = board.length;

    function getBoard() {
        return board;
    }

    /**
     * Returns an array containing [x, y] coordinates of each empty cell on the board
     */
    function getEmptyCells() {
        let emptyCells = [];

        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                if (board[x][y] === '') {
                    emptyCells.push([x, y]);
                }
            }
        }

        return emptyCells;
    }

    function newBoard(dimensions = 3) {
        board = Array(dimensions).fill('');

        for (let b in board) {
            board[b] = Array(dimensions).fill('');
        }
    }

    /**
     * Add a symbol or erase a cell on the board
     */
    function updateBoard(x, y, symbol) {
        if (board[x][y] === '') {
            board[x][y] = symbol;

            return true;
        }
        else if (symbol === '') {
            board[x][y] = symbol;
        }

        return false;
    }

    /**
     * Win condition: matching row
     */
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

    /**
     * Win condition: matching column
     */
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

    /**
     * Win condition: matching symbols from top left to bottom right
     */
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

    /**
     * Win condition: matching symbols from top right to bottom left
     */
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

    /**
     *  Scans the board for wins and ties.
     *   @return {string} status - 'win' or 'tie'
     *   @return {string} direction - 'row' (left to right),
     *                                'col' (top to bottom),
     *                                'diag' (top left to bottom right),
     *                                'rdiag' (top right to bottom left)
     *   @return {number} value - nth column or row
     *   @return {string} symbol - winning symbol
     *
     *   Example Case:
     *         0 1 2
     *       0 O X X
     *       1 X X O
     *       2 O X O
     *
     *       status = 'win'
     *       direction = 'col'
     *       value = 1
     *       symbol = 'X'
     */
    function getGameStatus() {
        let status = null;
        let direction = null;
        let value = null;
        let symbol = null;

        for (let i = 0; i < len; i++) {
            symbol = board[i][0];

            if (checkRow(i, 0, symbol)) {
                return { status: 'win', symbol, direction: 'row', value: i };
            }

            symbol = board[0][i];

            if (checkCol(0, i, symbol)) {
                return { status: 'win', symbol, direction: 'col', value: i };
            }
        }

        symbol = board[0][0];

        if (checkDiag(0, 0, symbol)) {
            return { status: 'win', symbol, direction: 'diag', value };
        }

        symbol = board[0][len - 1];

        if (checkRevDiag(0, len - 1, symbol)) {
            return { status: 'win', symbol, direction: 'rdiag', value };
        }

        if (getEmptyCells().length <= 0) {
            status = 'tie';
        }

        return { status, direction, value, symbol };
    }

    return {
        getBoard,
        getGameStatus,
        getEmptyCells,
        newBoard,
        updateBoard,
    }
})();

/**
 * Controls DOM content
 */
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

    /**
     * @param {integer} current - 0 for player1 and 1 for player2
     */
    function updateCurrentPlayer(current) {
        if (current) {
            player1Div.classList.remove('current-player');
            player2Div.classList.add('current-player');
            return;
        }
        player1Div.classList.add('current-player');
        player2Div.classList.remove('current-player');
    }

    function updateDifficultyInfo(difficulty) {
        if (difficulty) {
            difficulty = difficulty[0].toUpperCase() + difficulty.slice(1).toLowerCase();
        }

        difficultyInfoDiv.textContent = `${difficulty}`;
    }

    function updateMessage(message) {
        const messageBox = document.querySelector('.game .message');

        messageBox.textContent = message;
    }

    function updatePlayerBoard(player1, player2) {
        player1Name.textContent = player1.getName();
        player2Name.textContent = player2.getName();
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
        updateCurrentPlayer,
        updateDifficultyInfo,
        updateMessage,
        updatePlayerBoard,
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

    /**
     * Instantiate 2 players according to the game settings
     * @param symbol - player1's symbol
     */
    function initiatePlayers(mode, difficulty, symbol) {
        player1 = player('Player 1');

        if (mode === 'computer') {
            player2 = bot(difficulty);
        }
        else if (mode === 'two_player') {
            player2 = player('Player 2');
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
    }

    function restartGame() {
        displayController.updateMessage('');
        displayController.newBoard();
        boardBrain.newBoard();

        currentPlayer = (player1.getSymbol() === 'X') ? 0 : 1;
        displayController.updateCurrentPlayer(currentPlayer);

        gameOver = false;

        botFirstMove(mode, player1.getSymbol());
    }

    function gameExit() {
        startSettings.reset();
        displayController.closeGame();
        displayController.openMenu();
        displayController.clearBoard();
        boardBrain.newBoard();

        currentPlayer = 0;
        gameOver = false;
    }

    function startGame(gamemode, diff, symbol) {
        initiatePlayers(gamemode, diff, symbol);

        mode = gamemode;
        difficulty = diff;

        displayController.closeMenu();
        displayController.drawBoard();
        displayController.openGame();
        displayController.updateDifficultyInfo(diff);
        boardBrain.newBoard();
        displayController.updatePlayerBoard(player1, player2);
        botFirstMove(gamemode, symbol);
        displayController.updateCurrentPlayer(currentPlayer);
    }

    /**
     * If bot has symbol 'X' then it will make the first move
     * @param: symbol - player1's symbol
     */
    function botFirstMove(mode, symbol) {
        if (mode === 'computer' && symbol === 'O') {
            let { x, y } = player2.firstMove();
            displayController.updateCurrentPlayer(1 - currentPlayer);

            setTimeout(() => {
                boardBrain.updateBoard(x, y, symbol);
                displayController.updateCell(x, y, symbol);
                currentPlayer = 1 - currentPlayer;

                let { status, direction, value } = boardBrain.getGameStatus();
                if (status === 'win' || status === 'tie') {
                    endMatch(direction, value, player2);
                    return;
                }

                displayController.updateCurrentPlayer(currentPlayer);
            }, 150);
        }
    }

    /**
     * Make a move on the board, uses the current players symbol, then toggles
     * the current player.
     * 
     * Computer will also make a move after the player if gamemode is 'Computer'
     * 
     * Checks for winners or ties after every move.
     */
    function makeMove(x, y) {
        if (gameOver) {
            return;
        }

        let player = (currentPlayer === 0 ? player1 : player2);
        let symbol = player.getSymbol();

        // Nothing happens if the cell is already populated
        if (boardBrain.updateBoard(x, y, symbol)) {
            displayController.updateCell(x, y, symbol);

            let { status, direction, value } = boardBrain.getGameStatus();

            if (status === 'win' || status === 'tie') {
                endMatch(direction, value, player);
                return;
            }
        }
        else {
            return;
        }

        if (mode === 'computer') {
            let { x, y } = player2.move();
            displayController.updateCurrentPlayer(1 - currentPlayer);

            setTimeout(() => {
                symbol = player2.getSymbol();
                boardBrain.updateBoard(x, y, symbol);
                displayController.updateCell(x, y, symbol);

                let { status, direction, value } = boardBrain.getGameStatus();
                if (status === 'win' || status === 'tie') {
                    endMatch(direction, value, player2);
                    return;
                }

                displayController.updateCurrentPlayer(currentPlayer);
            }, 150);
        }
        else {
            currentPlayer = 1 - currentPlayer;
            displayController.updateCurrentPlayer(currentPlayer);
        }
    }

    /**
     * Ends the match depending on the win condition.
     * @param direction - contains the direction of the win condition, it's null if the match is a tie
     */
    function endMatch(direction, value, player) {
        if (direction) {
            declareWinner(player, direction, value);
            gameOver = true;
        }
        else {
            declareTie();
            gameOver = true;
        }
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
        makeMove,
        restartGame,
    }
})();

director.startGame('computer', 'medium', 'X');