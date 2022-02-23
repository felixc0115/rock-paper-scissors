
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
        console.log(`This is round ${i}`);
        let playerSelection = prompt("Enter rock, paper, or scissors"); //need to make it so any other string entered will prompt the user repeatedly until a valid one is entered
        console.log(`Player chose: ${playerSelection}`);
        let computerSelection = computerPlay();
        console.log(`Computer chose: ${computerSelection}`);
        const roundResult = playRound(playerSelection, computerSelection);
        if (roundResult === 'user') {
            userScore += 1;
            console.log(`You win ${playerSelection} beats ${computerSelection}`);
            console.log(`The current score is: user - ${userScore} and computer - ${computerScore}`);
        }
        if (roundResult === 'draw') {
            userScore += 0;
            console.log(`It is a draw. Both players picked ${playerSelection}`);
            console.log(`The current score is: user - ${userScore} and computer - ${computerScore}`);
        }
        else {
            computerScore += 1;
            console.log(`You lose ${computerSelection} beats ${playerSelection}`);
            console.log(`The current score is: user - ${userScore} and computer - ${computerScore}`);
        }
    }
    if (userScore > computerScore) {
        return 'user has won';
    }
    else if (userScore < computerScore) {
        return 'computer has won';
    }

    else {
        return 'draw - nobody won';
    }
}

