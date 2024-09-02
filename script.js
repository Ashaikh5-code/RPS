// Get the button elements
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

// Get the result and score elements
const resultDiv = document.getElementById('result');
const humanScoreSpan = document.getElementById('human-score');
const computerScoreSpan = document.getElementById('computer-score');

let humanScore = 0;
let computerScore = 0;

// Add event listeners to the buttons
rockBtn.addEventListener('click', () => playRound('rock', getComputerChoice()));
paperBtn.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissorsBtn.addEventListener('click', () => playRound('scissors', getComputerChoice()));

function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 1/3) {
    return "rock";
  } else if (randomNumber < 2/3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    resultDiv.textContent = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    humanScore++;
    resultDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    resultDiv.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
  }

  humanScoreSpan.textContent = humanScore;
  computerScoreSpan.textContent = computerScore;
}