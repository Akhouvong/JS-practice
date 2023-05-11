let options = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let tieGame = 0;


//computer picks rock, paper, or scissors
function getComputerChoice() {
  const computerSelection = options[Math.floor(Math.random() * options.length)];
  return computerSelection;
}

//function to decide game outcome
function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    tieGame++
    return 'Tie Game';
  }
  else if (playerSelection.toLowerCase() == 'rock') {
    if (computerSelection.toLowerCase() == 'paper') {
      computerScore++
      return 'You lose! Paper beats Rock';
    } else {
      playerScore++
      return 'You Win! Rock beats Scissors';
    }
  }
  else if (playerSelection.toLowerCase() == 'scissors') {
    if (computerSelection.toLowerCase() == 'rock') {
      computerScore++
      return 'You lose! Rock beats Scissors';
    } else {
      playerScore++
      return 'You Win! Scissors beats Paper';
    }
  }
  else if (playerSelection.toLowerCase() == 'paper') {
    if (computerSelection.toLowerCase() == 'scissors') {
      computerScore++
      return 'You lose! Scissors beats Paper';
    } else {
      playerScore++
      return 'You Win! Paper beats Rock'
    }
  }
}

//player's Choice
let playerSelection = prompt('rock, paper, or scissors?');

//runs game
function game() {
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)
  }
}
game();

//game outcome
console.log('Player: ' + playerScore);
console.log('Computer: ' + computerScore);
console.log('Tie games:' + tieGame);

