const board = (() => {
})();

const director = (() => {
    currentPlayer = 0; // 0 - player1 & 1 - player2

})();

const displayController = (() => {
    const lines = document.querySelectorAll('.line');

    // Initialize eventlisteners for each line
    for (let l of lines) {
        l.addEventListener('click', ()=> {
            console.log('ji');
        })
    }
})();