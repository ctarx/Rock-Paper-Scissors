console.log("Rock Paper Scissors Game");

//  Write the logic to get the computer choice
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
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
    if (computerChoice === humanChoice) {
      console.log("It's a draw.");
      alert("It's a draw.");
    } else if (
      (computerChoice === "Rock" && humanChoice === "Paper") ||
      (computerChoice === "Paper" && humanChoice === "Scissors") ||
      (computerChoice === "Scissors" && humanChoice === "Rock")
    ) {
      console.log(`You won! ${humanChoice} beats ${computerChoice}`);
      alert(`You won! ${humanChoice} beats ${computerChoice}`);
      ++humanScore;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      alert(`You lose! ${computerChoice} beats ${humanChoice}`);
      ++computerScore;
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
