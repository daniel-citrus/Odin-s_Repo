const lines = document.querySelectorAll('.line');

// Board brain
const board = (() => {
    const boardMap = new Map();

    let resetBrain = () => {
        for (let l of lines) {
            boardMap.set(l.getAttribute('coordinates'), l.getAttribute('marker'));
        }
    }

    return Object.assign(
        {},
        { resetBrain },
    );
})();

// Controls the game flow
const director = (() => {
    currentPlayer = 0; // 0 = player1 | 1 = player2

    let makeMove = (coordinates) => {
        console.log(coordinates);
        /*
            update boardBrain
            update display
                switch to next player
                updateMarker
        */
    }

    let restartGame = () => {
        currentPlayer = 0;
        displayController.resetBoard();
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
            director.makeMove(l.getAttribute('coordinates'));
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
        { resetBoard },
        { updateMarker },
    )
})();