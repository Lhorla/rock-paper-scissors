function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats paper';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats rock';
    } else {
        return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
    }
}

function game() {
    playRound(playerSelection,computerSelection);
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Rock, paper or scissors?').toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
    }
}

const playerSelection = "ROCK";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));