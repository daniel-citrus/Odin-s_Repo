// Returns rock, paper, or scissors
function computerPlay() {
    let guess = Math.ceil(Math.random() * 3);

    switch(guess) {
        case 1: return 'rock';
        case 2: return 'paper';
        case 3: return 'scissors';
    }
}

// Simulate 1 round of rock, paper, scissors 
function playRound() {

    let playerSelection = undefined;

    while (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
        try {
            playerSelection = window.prompt('Rock, Paper, or Scissors? ').toLowerCase();
        }
        catch(e) {
            return;
        }
    }

    let computerSelection = computerPlay();
    let win = 'You WIN';
    let lose = 'You LOSE';

    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
            return win + `, ${playerSelection} beats ${computerSelection}!`;
        }
    else if (playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'rock') {
            return lose + `, ${playerSelection} loses to ${computerSelection}!`;
        }
    else {
        return `It's a TIE!`
    }
    
}

// Play a game of rock, paper, scissors
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {

    }
}