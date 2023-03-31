// Instead of putting event listeners on each of the buttons,
// we can listen to the entire play area and then check if
// what was clicked was a button
const playArea = document.getElementById('playArea');
const lastMove = document.getElementById('lastMove');
let playerScoreCounter = document.getElementById("playerScore");
let computerScoreCounter = document.getElementById("computerScore");


// The function is passed in as an event. This looks like
// js black-box magic - is it using reflection to check
// for function names? Scary thought.
playArea.addEventListener('click', onButtonClick);

// Now we can build the meat and potatoes.
function onButtonClick(event) {
  clickTarget = event.target.className;
  if (clickTarget === "rockButton") {
    playRound("rock");
  }
  if (clickTarget === "paperButton") {
    playRound("paper");
  }
  if (clickTarget === "scissorsButton") {
    playRound("scissors");
  }
}

function playRound(playerChoice) {
  // To play a round, we must first make sure that the game isn't already over...
  if (playerScoreCounter.innerText === "5" || computerScoreCounter.innerText === "5") {
    console.log("Game over!");
    lastMove.innerText = "Game over!"
    return;
  }

  // Then we can generate a computer decision.
  const computerChoice = generateComputerChoice();
  console.log(playerChoice+" "+computerChoice);
  lastMove.innerText = computerChoice;

  // If the choices are equal, it's a tie.
  if (playerChoice === computerChoice) {
    console.log("tie");
    return;
  }

  // Then we can check for a player win, and an 'else' covers the computer win.
  if (doesPlayerWin(playerChoice, computerChoice)) {
    processVictory("player");
  } else {
    processVictory("computer");
  }

  // If the game has ended, declare game over.
  if (playerScoreCounter.innerText === "5" || computerScoreCounter.innerText === "5") {
    console.log("Game over!");
    lastMove.innerText = "Game over!"
  }
}

function processVictory(winner) {
  if (winner === "player") {
    console.log("player wins");
    let playerScore = parseInt(playerScoreCounter.innerText);
    playerScore += 1;
    playerScoreCounter.innerText = playerScore;
  }
  if (winner === "computer") {
    console.log("computer wins");
    let computerScore = parseInt(computerScoreCounter.innerText);
    computerScore += 1;
    computerScoreCounter.innerText = computerScore;
  }
}

function doesPlayerWin(playerChoice, computerChoice) {
  return playerChoice === "rock" && computerChoice === "scissors"
    || playerChoice === "scissors" && computerChoice === "paper"
    || playerChoice === "paper" && computerChoice === "rock";
}

function generateComputerChoice() {
  const randomInt = Math.floor(Math.random()*3);
  switch(randomInt) {
    case 0: return "rock";
    case 1: return "paper";
    case 2: return "scissors";
  }
}
