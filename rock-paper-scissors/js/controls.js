const startBtn = document.querySelector('.welcome button');
const welcome = document.querySelector('div.welcome');
const gameWindow = document.querySelector('.game');

startBtn.addEventListener('click', startGame);

function startGame() {
    welcome.classList.toggle('hidden');
    gameWindow.classList.toggle('hidden');
}