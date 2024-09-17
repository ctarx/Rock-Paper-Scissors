console.log("Hello World");

// getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
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
