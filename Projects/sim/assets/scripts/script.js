const lines = document.querySelectorAll('.line');

// Board brain
const board = (() => {
    const boardMap = new Map();

    let resetBrain = () => {
        boardMap.clear();
        /* for (let l of lines) {
            boardMap.set(l.getAttribute('coordinates'), '');
        } */
        console.log(boardMap);
    }

    let updateBrain = (line, marker) => {
        boardMap.set(line.getAttribute('coordinates'), marker);
    }

    /* 
        Checking pattern
        (1, 2->5)
        (2, 3->6)
        (3, 1)
    */
    let checkWinner = () => {
        for (let move of boardMap) {
            test(...move[0].split(','));
        }
    }

    let test = (a, b) => {
        console.log(`[${a}, ${b}]`);
    } 

    return Object.assign(
        {},
        {
            checkWinner,
            resetBrain,
            updateBrain,
        },
    );
})();

// Controls the game flow
const director = (() => {
    currentPlayer = 0; // 0 = player1 | 1 = player2

    let makeMove = (line) => {
        console.clear();
        if (line.getAttribute('marker') !== '') {
            return;
        }

        board.updateBrain(line, currentPlayer);
        displayController.updateMarker(line, currentPlayer);
        currentPlayer = 1 - currentPlayer;
        displayController.updateCurrentPlayer(currentPlayer);
        board.checkWinner();
    }

    let restartGame = () => {
        currentPlayer = 0;
        displayController.resetBoard();
        board.resetBrain();
    }

    return Object.assign(
        {},
        { makeMove },
        { restartGame },
    )
})();

// Controls the front-end
const displayController = (() => {
    // Initialize eventListeners for each line and add a custom attribute called 'marker' that represets player1('0') or player2('1') markings (default value = '')
    for (let l of lines) {
        l.addEventListener('click', () => {
            director.makeMove(l);
        })

        l.setAttribute('marker', '');
    }

    let clearBoard = () => {
        for (let l of lines) {
            l.setAttribute('marker', '')
        }
    }

    let resetBoard = () => {
        clearBoard();
        updateCurrentPlayer(0);
    }

    let updateCurrentPlayer = (player) => {
        let board = document.querySelector('.board');

        (player) ? board.classList.add('p2') : board.classList.remove('p2');
    }

    // Updates 'marker' attribute value
    let updateMarker = (line, player) => {
        line.setAttribute('marker', player);
    }

    return Object.assign(
        {},
        {
            resetBoard,
            updateCurrentPlayer,
            updateMarker
        },
    )
})();