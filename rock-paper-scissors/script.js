/* START PHASE 1: ENTRANCE */
    const startBtn = document.querySelector('.welcome button');
    const welcome = document.querySelector('div.welcome');
    const gameWindow = document.querySelector('.game');

    startBtn.addEventListener('click', startGame);

    function startGame() {
        welcome.classList.add('hidden');
        gameWindow.classList.remove('hidden');
        initializeGame();
    }
/* END PHASE 1: ENTRANCE */

/* START PHASE 2: GAMEPLAY */
    const rock = document.querySelector('.game .controls .rock');
    const paper = document.querySelector('.game .controls .paper');
    const scissors = document.querySelector('.game .controls .scissors');
    const boardPlayer = document.querySelector('.player .score');
    const boardComputer = document.querySelector('.ai .score');

    let playerScore = 0;
    let computerScore = 0;

    rock.addEventListener('click', () => playRound('rock'));
    paper.addEventListener('click', () => playRound('paper'));
    scissors.addEventListener('click', () => playRound('scissors'));

    // Play a game of rock, paper, scissors
    function initializeGame() {
        playerScore = 0;
        computerScore = 0;
        boardPlayer.textContent = playerScore;
        boardComputer.textContent = computerScore;
        matchStatus.textContent = ' ';
    }

    // Returns rock, paper, or scissors
    function computerPlay() {
        let guess = Math.ceil(Math.random() * 3);

        switch (guess) {
            case 1: return 'rock';
            case 2: return 'paper';
            case 3: return 'scissors';
        }
    }

    // Play 1 round of rock, paper, scissors 
    function playRound(weapon) {
        let computerWeapon = computerPlay();

        if (weapon === 'rock' && computerWeapon === 'scissors' ||
            weapon === 'paper' && computerWeapon === 'rock' ||
            weapon === 'scissors' && computerWeapon === 'paper') {
            if (weapon === 'scissors') {
                displayMatchResult(weapon, 'beat', computerWeapon);
            }
            else {
                displayMatchResult(weapon, 'beats', computerWeapon);
            }

            boardPlayer.textContent = ++playerScore;
        }
        else if (weapon === 'rock' && computerWeapon === 'paper' ||
            weapon === 'paper' && computerWeapon === 'scissors' ||
            weapon === 'scissors' && computerWeapon === 'rock') {
            if (weapon === 'scissors') {
                displayMatchResult(weapon, 'lose to', computerWeapon);
            }
            else {
                displayMatchResult(weapon, 'loses to', computerWeapon);
            }

            boardComputer.textContent = ++computerScore;
        }
        else {
            displayMatchResult('tie');
        }

        if (playerScore == 5) {
            endResult('win');
            return;
        }
        else if (computerScore == 5) {
            endResult('lose');
            return;
        }
    }

    const matchStatus = document.querySelector('.game .status');

    function displayMatchResult(winnerWeapon, outcome, loserWeapon) {
        if (winnerWeapon === 'tie') {
            matchStatus.textContent = 'Tie game!';
        }
        else {
            matchStatus.textContent = `${winnerWeapon.toUpperCase()} ${outcome} ${loserWeapon.toUpperCase()}`;
        }
    }
/* END PHASE 2: GAMEPLAY */

/* START PHASE 3: ENDING */
    const endWindow = document.querySelector('.end');
    const endPrompt = document.querySelector('.end .prompt');
    const playAgainBtn = document.querySelector('.end .again');

    // Resets the game
    playAgainBtn.addEventListener('click', () => {
        initializeGame();
        gameWindow.classList.remove('hidden');
        endWindow.classList.add('hidden');
    })

    // Hides the game window and launches the win/lose ending window
    function endResult(result) {
        gameWindow.classList.add('hidden');
        endWindow.classList.remove('hidden')

        if (result === 'win') {
            endPrompt.textContent = `Woohoo you won, Edgar!`;
        }
        else {
            endPrompt.textContent = `Wahh wahhhh, you lost, Edgar.`;
        }
    }
/* END PHASE 3: ENDING */