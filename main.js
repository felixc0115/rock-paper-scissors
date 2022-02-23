//Prompt user to choose rock, paper, or scissors 
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

//Compare user and computer choices
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'draw';
    }
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'rock')) {
        return 'user';
    }
    else {
        return 'computer';
    }
}
//Declare winner if there is one; if there is no winner then go again. There will be a total of five rounds.
function game() {
    let userScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        // let playerSelection = prompt("Select Rock, Paper, or Scissors").toLowerCase();
        while (playerSelection !== 'rock' || playerSelection !== 'paper' || playerSelection !== 'scissors') {
            let playerSelection = prompt("Select Rock, Paper, or Scissors").toLowerCase();
        }
        console.log(`Player chose: ${playerSelection}`);
        let computerSelection = computerPlay();
        console.log(`Computer chose: ${computerSelection}`);
        const roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
        if (roundResult === 'user') {
            userScore += 1;
            console.log(`You win ${playerSelection} beats ${computerSelection}`);
        }
        if (roundResult === 'draw') {
            userScore += 0;
            console.log(`It is a draw. Both players picked ${playerSelection}`);
            console.log(`The current score is: user - ${userScore} and computer - ${computerScore}`);
        }
        else {
            computerScore += 1;
            console.log(`You win ${computerSelection} beats ${playerSelection}`);
        }
    }
    if (userScore > computerScore) {
        return 'user';
    }
    else if (userScore < computerScore) {
        return 'computer';
    }

    else {
        return 'draw';
    }
}

