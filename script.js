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
  // humanChoice parameter case-insensitive
  return humanChoice[0].toUpperCase() + humanChoice.substring(1).toLowerCase();
}

// Write the logic to play the entire game
function playGame() {
  // Declare the players score variables
  let humanScore = 0;
  let computerScore = 0;

  // Write the logic to play a single round
  function playRound(computerChoice, humanChoice) {
    if (computerChoice == "Rock" && humanChoice == "Rock") {
      console.log("It's a draw.");
      alert("It's a draw.");
    } else if (computerChoice == "Rock" && humanChoice == "Paper") {
      console.log("You won! Paper beats Rock.");
      alert("You won! Paper beats Rock.");
      ++humanScore;
    } else if (computerChoice == "Rock" && humanChoice == "Scissors") {
      console.log("You lose! Rock beats Scissors.");
      alert("You lose! Rock beats Scissors.");
      ++computerScore;
    } else if (computerChoice == "Paper" && humanChoice == "Rock") {
      console.log("You lose! Paper beats Rock.");
      alert("You lose! Paper beats Rock.");
      ++computerScore;
    } else if (computerChoice == "Paper" && humanChoice == "Paper") {
      console.log("It's a draw.");
      alert("It's a draw.");
    } else if (computerChoice == "Paper" && humanChoice == "Scissors") {
      console.log("You won! Scissors beat Paper.");
      alert("You won! Scissors beat Paper.");
      ++humanScore;
    } else if (computerChoice == "Scissors" && humanChoice == "Rock") {
      console.log("You won! Rock beats Scissors.");
      alert("You won! Rock beats Scissors.");
      ++humanScore;
    } else if (computerChoice == "Scissors" && humanChoice == "Paper") {
      console.log("You lose! Scissors beat Paper.");
      alert("You lose! Scissors beat Paper.");
      ++computerScore;
    } else if (computerChoice == "Scissors" && humanChoice == "Scissors") {
      console.log("It's a draw.");
      alert("It's a draw.");
    }
  }
  // Play 5 rounds by calling playRound 5 times
  for (let round = 1; round <= 5; round++) {
    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice();

    console.log(
      `\nIn round ${round}: \nComputer chose: ${computerSelection} and Player chose: ${humanSelection}`,
    );
    playRound(computerSelection, humanSelection);
    console.log(`\nScore: Human: ${humanScore}, Computer: ${computerScore}`);
  }
  if (humanScore > computerScore) {
    alert(
      `Game over. You won! \nComputer: ${computerScore} vs Human: ${humanScore}`,
    );
  } else if (humanScore < computerScore) {
    alert(
      `Game over. You lose! \nComputer: ${computerScore} vs Human: ${humanScore}`,
    );
  } else {
    alert(
      `Game over. It's draw. \nComputer: ${computerScore} vs Human: ${humanScore}`,
    );
  }
}

playGame();
