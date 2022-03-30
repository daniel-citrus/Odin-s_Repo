// Returns rock, paper, or scissors
function computerPlay() {
    let guess = Math.ceil(Math.random() * 3);

    switch (guess) {
        case 1: return 'rock';
        case 2: return 'paper';
        case 3: return 'scissors';
    }
}

// Simulate 1 round of rock, paper, scissors 
function playRound() {

    let playerSelection = computerPlay();
    /*
        while (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
            try {
                playerSelection = window.prompt('Rock, Paper, or Scissors? ').toLowerCase();
            }
            catch(e) {
                return;
            }
        }
    */
    let computerSelection = computerPlay();

    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'player';
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'computer';
    }
    else {
        return 'tie';
    }
}

// Play a game of rock, paper, scissors
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        switch (playRound()) {
            case 'player': playerScore++;
                break;
            case 'computer': computerScore++;
                break;
        }
    }

    if (playerScore > computerScore) {
        console.log('You WIN!');
    }
    else if (playerScore < computerScore) {
        console.log('You LOSE!');
    }
    else {
        console.log(`It's a TIE!`);
    }
}

game();