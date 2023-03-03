// Board brain
const board = (() => {
    let clearBoard = () => {

    }
})();

// Controls the game flow
const director = (() => {
    currentPlayer = 0; // 0 = player1 | 1 = player2

    let makeMove = () => {

    }

    let restartGame = () => {
        currentPlayer = 0;
        displayController.restartBoard();
    }

    return Object.assign(
        {},
        { currentPlayer }
    )
})();

// Controls the front-end
const displayController = (() => {
    const lines = document.querySelectorAll('.line');

    // Initialize eventlisteners for each line and adds a custom attribute called 'marker' that represets player1('0') or player2('1') markings (default value = '')
    for (let l of lines) {
        l.addEventListener('click', () => {

        })

        l.setAttribute('marker', '');
    }

    let clearBoard = () => {
        for (let l of lines) {
            l.setAttribute('marker', '')
        }
    }

    let restartBoard = () => {
        clearBoard();
        updateCurrentPlayer(0);
    }

    let updateCurrentPlayer = (player) => {
        let board = document.querySelector('.board');

        (player) ? board.classList.add('p2') : board.classList.remove('p2');
    }

    return Object.assign(
        {},
        { lines },
        { restartBoard },
    )
})();