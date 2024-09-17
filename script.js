console.log("Hello World");

//  Write the logic to get the computer choice
function getComputerChoice(n) {
  return Math.floor(Math.random() * n);
}

let computerChoice = getComputerChoice(3);

if (computerChoice == 0) {
  computerChoice = "Rock";
  console.log(`Computer chose: ${computerChoice}`);
} else if (computerChoice == 1) {
  computerChoice = "Paper";
  console.log(`Computer chose: ${computerChoice}`);
} else if (computerChoice == 2) {
  computerChoice = "Scissor";
  console.log(`Computer chose: ${computerChoice}`);
}

// Write the logic to get the human choice
function getHumanChoice() {
  let humanChoice = prompt("What's your choice? Rock / Paper / Scissors");
  return console.log(`Player chose: ${humanChoice}`);
}

getHumanChoice();

// Declare the players score variables
let humanScore = 0;
let computerScore = 0;
