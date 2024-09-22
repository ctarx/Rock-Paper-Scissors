console.log("Rock Paper Scissors Game");

//  Write the logic to get the computer choice
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice == 0) {
    computerChoice = "Rock";
  } else if (computerChoice == 1) {
    computerChoice = "Paper";
  } else if (computerChoice == 2) {
    computerChoice = "Scissors";
  }
  return computerChoice;
}

// Write the logic to get the human choice
function getHumanChoice() {
  let humanChoice = prompt("What's your choice? Rock / Paper / Scissors");
  return humanChoice[0].toUpperCase() + humanChoice.substring(1).toLowerCase();
}

// Declare the players score variables
let humanScore = 0;
let computerScore = 0;

// Write the logic to play a single round
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

function playRound(computerSelection, humanSelection) {
  if (computerSelection == "Rock" && humanSelection == "Rock") {
    console.log(`\nThis is draw.`);
  } else if (computerSelection == "Rock" && humanSelection == "Paper") {
    console.log(`\nHuman won.`);
    ++humanScore;
  } else if (computerSelection == "Rock" && humanSelection == "Scissors") {
    console.log(`\nComputer won.`);
    ++computerScore;
  } else if (computerSelection == "Paper" && humanSelection == "Rock") {
    console.log(`\nComputer won.`);
    ++computerScore;
  } else if (computerSelection == "Paper" && humanSelection == "Paper") {
    console.log(`\nThis is draw.`);
  } else if (computerSelection == "Paper" && humanSelection == "Scissors") {
    console.log(`\nHuman won.`);
    ++humanScore;
  } else if (computerSelection == "Scissors" && humanSelection == "Rock") {
    console.log(`\nHuman won.`);
    ++humanScore;
  } else if (computerSelection == "Scissors" && humanSelection == "Paper") {
    console.log(`\nComputer won.`);
    ++computerScore;
  } else if (computerSelection == "Scissors" && humanSelection == "Scissors") {
    console.log(`\nThis is draw.`);
  }
}

// Test
console.log(`Computer chose: ${computerSelection}`);
console.log(`Player chose: ${humanSelection} `);
playRound(computerSelection, humanSelection);
console.log(`\nScore: Human: ${humanScore}, Computer: ${computerScore}`);

// Write the logic to play the entire game
