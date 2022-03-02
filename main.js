
let round = 0;
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.individual-button');
buttons.forEach(button => button.addEventListener('click', function () {
    button.classList.toggle('playing');
    let playerSelection = button.textContent;
    let computerSelection = computerPlay();
    let roundResult = compareSelections(playerSelection, computerSelection);
    game(playerSelection, computerSelection, roundResult);
}))

const playerChoiceOutput = document.querySelector('.player-choice-output');
const computerChoiceOutput = document.querySelector('.computer-choice-output');
const roundResultOutput = document.querySelector('.round-result-output');
const currentScoreOutput = document.querySelector('.current-score-output');
const roundOutput = document.querySelector('.round-output');
const gameResultOutput = document.querySelector('.game-result-output');

function removeTransition (e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

buttons.forEach(button => button.addEventListener('transitionend', removeTransition));


//Randomly generate the computer's choice 
function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3) + 1;
    if (computerSelection === 1) {
        return computerSelection = 'rock';
    }
    else if (computerSelection === 2) {
        return computerSelection = 'paper';
    }
    else {
        return computerSelection = 'scissors'
    }
}

//Compare player and computer choices
function compareSelections(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'draw';
    }
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'rock')) {
        return 'player';
    }
    else {
        return 'computer';
    }
}

function game(playerSelection, computerSelection, roundResult) {
    round += 1;
    roundOutput.textContent = `Round ${round}`;
    playerChoiceOutput.textContent = `Player chose ${playerSelection}`;
    computerChoiceOutput.textContent = `Computer chose ${computerSelection}`;

    if (roundResult === 'player') {
        playerScore += 1;
        roundResultOutput.textContent = 'Player has won!';
    }
    if (roundResult === 'draw') {
        playerScore += 0;
        roundResultOutput.textContent = `It is a draw. Both players picked ${playerSelection}`;
    }
    else {
        computerScore += 1;
        roundResultOutput.textContent = 'Computer has won :(';
    }

    currentScoreOutput.textContent = `The current score is: player - ${playerScore} and computer - ${computerScore}`;
    gameResultOutput.style.display = 'none';
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            gameResultOutput.style.display = '';
            gameResultOutput.textContent = 'Player has won the game!!';
        } 
        else if (computerScore === 5) {
            gameResultOutput.style.display = '';
            gameResultOutput.textContent = 'Computer has won the game :(';
        }
        playerScore = 0;
        computerScore = 0;
        round = 0;
    }
    }