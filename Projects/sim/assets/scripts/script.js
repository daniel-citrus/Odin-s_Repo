const lines = document.querySelectorAll('.line');

let bot = (difficulty, botNum) => {
    let botNumber = botNum;

    let dumbMove = () => {
        let possibleMoves = board.getPossibleMoves();
        let movesRemaining = possibleMoves.length;

        if (!movesRemaining) {
            return;
        }

        let [a, b] = possibleMoves[getRandomInt(movesRemaining)];

        return [a, b];
    }

    let normalMove = () => {
        let possibleMoves = board.getPossibleMoves();
        let movesRemaining = possibleMoves.length;

        if (!movesRemaining) {
            return;
        }

        let a, b;

        while (movesRemaining > 0) {
            let rand = getRandomInt(movesRemaining);

            [a, b] = possibleMoves[rand];

            board.update(a, b, botNum);
            let [gameOver, losingTriangle] = board.checkLoser(botNum);
            board.remove(a, b);

            if (!gameOver) {
                break;
            }

            possibleMoves.splice(rand, 1);
            movesRemaining = possibleMoves.length;
        }

        return [a, b];
    }

    let smartMove = () => {
        let possibleMoves = board.getPossibleMoves();
        let movesRemaining = possibleMoves.length;

        if (movesRemaining === 0) {
            return;
        }
        else if (movesRemaining > 7) {
            return normalMove();
        }

        let bestScore = Number.NEGATIVE_INFINITY;
        let score = 0;
        let a, b;

        for (let move of possibleMoves) {
            board.update(move[0], move[1], botNumber);
            score = minimax(true, botNumber);
            board.remove(move[0], move[1]);

            if (bestScore < score) {
                bestScore = score;
                a = move[0];
                b = move[1];
            }

            if (bestScore == 15) {
                break;
            }
        }

        return [a, b];
    }

    function minimax(maximize, currentPlayer, alpha, beta) {
        let possibleMoves = board.getPossibleMoves();
        let movesRemaining = possibleMoves.length;
        let [gameOver, triangle] = board.checkLoser(currentPlayer);
        let score;

        if (gameOver) {
            if (maximize) {
                return -movesRemaining;
            }

            return 15 - movesRemaining;
        }

        if (maximize) {
            let maxEval = Number.NEGATIVE_INFINITY;

            for (let move of possibleMoves) {
                board.update(move[0], move[1], currentPlayer);
                score = minimax(false, 1 - currentPlayer, alpha, beta);
                board.remove(move[0], move[1]);

                maxEval = Math.max(maxEval, score);
                alpha = Math.max(alpha, score);

                if (beta <= alpha) {
                    break;
                }
            }

            return maxEval;
        }
        else {
            let minEval = Number.POSITIVE_INFINITY;

            for (let move of possibleMoves) {
                board.update(move[0], move[1], currentPlayer);
                score = minimax(true, 1 - currentPlayer, alpha, beta);
                board.remove(move[0], move[1]);

                minEval = Math.min(minEval, score);
                beta = Math.min(beta, score);
            }

            return minEval;
        }
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let move;

    if (difficulty === 'hard') {
        move = smartMove;
    }
    else if (difficulty === 'medium') {
        move = normalMove;
    }
    else {
        move = dumbMove;
    }

    return Object.assign(
        {},
        { move }
    )
};

const board = (() => {
    const boardMap = new Map();
    let losingTriangle = [];

    /**
        Checks the entire boardMap for a losing triangle
        made by currentPlayer

        @param currentPlayer - player being evaluated
        @param otherMap - an alternative map to be checked
    */
    let checkLoser = (currentPlayer) => {
        let result = null;

        for (let [line, player] of boardMap) {
            losingTriangle = [];

            if (player != currentPlayer) {
                continue;
            }

            let [a, b] = line.split(',');
            losingTriangle.push([+a, +b]);
            result = createsTriangle(1, currentPlayer, +a, +b, +a, +b);

            if (result) {
                break;
            }
        }

        return [result, losingTriangle];
    }

    /** 
        Recursive function that will check whether or not triangle exists starting on line aInitial to bInitial.

        **All incoming parameter values must be integers**
        @param level - nth line of the triangle
        @param player - the player that marked [aInitial, bInitial]
        @param aInitial - starting point of the line marked by player
        @param bInitial - end point of the line marked by player
        @param a - current line's starting point
        @param b - current line's end point
        @return (boolean, value) - true, if triangle is found and the losing player
    */
    let createsTriangle = (level, player, aInitial, bInitial, a, b) => {
        if (!boardMap.has(`${a},${b}`)) {
            return false;
        }

        if (player != boardMap.get(`${a},${b}`)) {
            return false;
        }

        // Condition for a complete triangle
        if (level == 2) {
            if (!boardMap.has(`${aInitial},${b}`)) {
                return false;
            }

            if (player == boardMap.get(`${aInitial},${b}`)) {
                losingTriangle.push([aInitial, b]);
                return true;
            }

            return false;
        }

        a = b;

        for (let i = a + 1; i < 7; i++) {
            let result = createsTriangle(level + 1, player, aInitial, bInitial, a, i);

            if (result) {
                losingTriangle.push([a, i]);
                return result;
            }
        }

        return false;
    }

    let getBoardMap = () => {
        return boardMap;
    }

    let getPossibleMoves = () => {
        let moves = [[1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [2, 3], [2, 4], [2, 5], [2, 6], [3, 4], [3, 5], [3, 6], [4, 5], [4, 6], [5, 6]];
        let result = [];

        for (let move of moves) {
            if (!boardMap.has(`${move[0]},${move[1]}`)) {
                result.push([move[0], move[1]]);
            }
        }

        return result;
    }

    let resetBrain = () => {
        boardMap.clear();
    }

    let update = (a, b, marker) => {
        boardMap.set(`${a},${b}`, marker);
    }

    let remove = (a, b) => {
        boardMap.delete(`${a},${b}`);
    }

    return Object.assign(
        {},
        {
            checkLoser,
            getBoardMap,
            getPossibleMoves,
            resetBrain,
            update,
            remove,
        },
    );
})();

// Controls the game flow
const director = (() => {
    let currentPlayer = 0; // 0 = player1 | 1 = player2
    let gamemode = 'computer';
    let myBot = bot('hard', 1 - currentPlayer);

    let endGame = (winner, losingTriangle) => {
        winner = (winner) ? 'Red' : 'Blue';
        console.log(`Winner: ${winner}, Triangle: ${losingTriangle}`);
        displayController.disableBoard();
    }

    let applyMove = (a, b) => {
        board.update(a, b, currentPlayer);
        displayController.updateMarker(a, b, currentPlayer);
    }

    let makeMove = (line) => {
        if (line.getAttribute('marker') !== '') {
            return;
        }

        let [a, b] = line.getAttribute('coordinates').split(',');
        applyMove(a, b);
        let [gameOver, losingTriangle] = board.checkLoser(currentPlayer);

        if (gameOver) {
            endGame(1 - currentPlayer, losingTriangle);
            return;
        }

        if (gamemode === 'computer') {
            currentPlayer = 1 - currentPlayer;
            let [botA, botB] = myBot.move();
            applyMove(botA, botB);
            let [gameOver, losingTriangle] = board.checkLoser(currentPlayer);

            if (gameOver) {
                endGame(1 - currentPlayer, losingTriangle);
                return;
            }
        }
        else {
            displayController.updateCurrentPlayer(currentPlayer);
        }

        currentPlayer = 1 - currentPlayer;
    }

    let restartGame = () => {
        currentPlayer = 0;
        displayController.resetBoard();
        board.resetBrain();
    }

    return Object.assign(
        {},
        {
            makeMove,
            restartGame
        },
    )
})();

// Controls the front-end
const displayController = (() => {
    let board = document.querySelector('.board');
    let z_index = 1; // Most recently marked line will appear above all other lines

    // Initialize eventListeners for each line
    for (let line of lines) {
        line.addEventListener('click', () => {
            director.makeMove(line);
        })
    }

    let clearBoard = () => {
        for (let line of lines) {
            line.setAttribute('marker', '')
        }
    }

    let disableBoard = () => {
        board.classList.add('disabled');
    }

    let enableBoard = () => {
        board.classList.remove('disabled');
    }

    let findLine = (a, b) => {
        for (let line of lines) {
            if (line.getAttribute('coordinates') == `${a},${b}`) {
                return line;
            }
        }

        return null;
    }

    let resetBoard = () => {
        clearBoard();
        enableBoard();
        updateCurrentPlayer(0);
        z_index = 1;
    }

    let updateCurrentPlayer = (player) => {
        (player) ? board.classList.add('p2') : board.classList.remove('p2');
    }

    // Updates 'marker' attribute value
    let updateMarker = (a, b, player) => {
        let line = findLine(a, b);

        if (!line) return;

        line.setAttribute('marker', player);
        line.style.zIndex = z_index;
        z_index++;
    }

    return Object.assign(
        {},
        {
            disableBoard,
            resetBoard,
            updateCurrentPlayer,
            updateMarker
        },
    )
})();