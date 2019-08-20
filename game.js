const roundCount = document.querySelector('#round-count');
const outcome = document.querySelector('#outcome');

const choiceContainer = document.querySelector('#choice-container');
const rematchContainer = document.querySelector('#rematch-container');
rematchContainer.setAttribute('visibility', 'hidden');


const rockButton = document.querySelector('#rock-btn');
const scissorsButton = document.querySelector('#scissors-btn');
const paperButton = document.querySelector('#paper-btn');
const container = document.querySelector('#content');

const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const roundCountDisplay = document.querySelector('#round-count');

let round = 1;
let playerScore = 0;
let computerScore = 0;

let winResponse = "You won that round! The computer chose " ;
let loseResponse = "You lost that round! The computer chose ";
let playerWon = false;


function computerPlay(){
  choices = ['rock', 'paper', 'scissors']
  randInt = Math.floor(3*Math.random())
  return choices[randInt];
}

//Returns true if player won, false if player lost
function computeWinner(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection){
    return 'tie';
  }
  else {
    switch (playerSelection){
      case 'rock':
        if (computerSelection === 'scissors'){
          return true;
        }
        else {
          return false;
        }

      case 'paper':
        if (computerSelection === 'rock'){
          return true;
        }
        else {
          return false;
        }

        case 'scissors':
          if (computerSelection === 'paper'){
            return true;
          }

          else {
            return false;
          }
    }
  }
}

function playRound(playerSelection, computerSelection){
  playerWon = computeWinner(playerSelection, computerSelection);
  switch(playerWon){
    case 'tie':
      outcome.textContent = "It's a tie! You both chose " + playerSelection;
      break;

    case true:
      playerScore++;
      outcome.textContent = winResponse + computerSelection;
      playerScoreDisplay.textContent = "Player Score: " + playerScore;
      break;

    case false:
      computerScore++;
      outcome.textContent = loseResponse + computerSelection;
      computerScoreDisplay.textContent = "Computer Score: " + computerScore;
      break;
  }

  round++;

  if (round < 5){
    roundCountDisplay.textContent = 'Current Round: ' + round;
  }
  else{
      roundCountDisplay.textContent = 'Final Round';
  }

  if (round > 5){
    //determine winner
    if (playerScore > computerScore){
      outcome.textContent = "Game over! You won this match!"
    }
    else if(playerScore < computerScore){
      outcome.textContent = "Game over! The computer won this match!"
    }
    else{
      outcome.textContent = "Game over! It's a tie!"
    }
    //ask to play again
    rematchContainer.style.visibility = 'visible';
    choiceContainer.style.visibility = 'hidden';
  }
}

rockButton.addEventListener('click', () => {
  computerSelection = computerPlay();
  playRound('rock', computerSelection);
});

paperButton.addEventListener('click', () => {
  computerSelection = computerPlay();
  playerWon = playRound('paper', computerSelection);
});

scissorsButton.addEventListener('click', () => {
  computerSelection = computerPlay();
  playerWon = playRound('scissors', computerSelection);

});

const yesButton = document.querySelector('#yes-btn');
yesButton.addEventListener('click', ()=>{
  rematchContainer.setAttribute('visibility', 'hidden');
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = "Player Score: " + playerScore;
  computerScoreDisplay.textContent = "Computer Score: " + computerScore;
   
  round = 1;
  roundCountDisplay.textContent = 'Current Round: ' + round;
  rematchContainer.style.visibility = 'hidden';
  choiceContainer.style.visibility = 'visible';
});
