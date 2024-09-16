console.log("Hello World");

// getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
function getComputerChoice(n) {
  return Math.floor(Math.random() * n);
}

let choice = getComputerChoice(3);

if (choice == 0) {
  console.log("Computer chose: Rock");
} else if (choice == 1) {
  console.log("Computer chose: Paper");
} else if (choice == 2) {
  console.log("Computer chose: Scissor");
}

// switch (getComputerChoice(3)) {
//   case 0:
//     console.log("Computer chose: Rock");
//     break;
//   case 1:
//     console.log("Computer chose: Paper");
//     break;
//   case 2:
//     console.log("Computer chose: Scissor");
//     break;
// }
