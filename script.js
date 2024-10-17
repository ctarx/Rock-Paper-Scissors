//  Write the logic to get the computer choice
const choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

// Write buttons logic and play round with a click
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let humanSelection = button.className;
    let computerSelection = getComputerChoice();
    playRound(computerSelection, humanSelection);
  });
});

// Declare the players score variables
let computerScore = 0;
let humanScore = 0;

//Declare rounds variables
let currentRound = 1;
const maxScore = 5;

// Create DOM elements
const log = document.querySelector(".log");
const round = document.querySelector(".round");
const content = document.createElement("p");
content.classList.add("content");
const scoreDisplay = document.createElement("p");
scoreDisplay.classList.add("score");
log.appendChild(content);
log.appendChild(scoreDisplay);

// Write function for a game reset
function resetGame() {
  humanScore = 0;
  computerScore = 0;
  currentRound = 1;
  round.innerText = "You can play again!";
}

// Write the logic to play a single round
function playRound(computerChoice, humanChoice) {
  if (computerScore < maxScore && humanScore < maxScore) {
    round.textContent = `Round: ${currentRound}`;

    content.classList.remove("lost", "win", "draw");

    if (computerChoice === humanChoice) {
      content.classList.add("draw");
      content.textContent = "It's a draw.";
    } else if (
      (computerChoice === "rock" && humanChoice === "paper") ||
      (computerChoice === "paper" && humanChoice === "scissors") ||
      (computerChoice === "scissors" && humanChoice === "rock")
    ) {
      content.classList.add("win");
      content.textContent = `You won! Player: ${humanChoice} beats Computer: ${computerChoice}`;
      ++humanScore;
    } else {
      content.classList.add("lost");
      content.textContent = `You lose! Computer: ${computerChoice} beats Player: ${humanChoice}`;
      ++computerScore;
    }
    currentRound++; //count round number

    if (humanScore === maxScore) {
      content.classList.add("win");
      content.textContent = `GAME OVER. You won! Computer: ${computerScore} vs Player: ${humanScore}`;
      resetGame();
    } else if (computerScore === maxScore) {
      content.classList.add("lost");
      content.textContent = `GAME OVER. You lose! Computer: ${computerScore} vs Player: ${humanScore}`;
      resetGame();
    }
    scoreDisplay.textContent = `Computer ${computerScore} : ${humanScore} Player`;
  }
}
