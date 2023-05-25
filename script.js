// A function to get a random hand
getComputerChoice = function () {
  const randomNum = Math.floor(Math.random() * 3);

  if (randomNum === 0) {
    return "Rock";
  } else if (randomNum === 1) {
    return "Paper";
  } else if (randomNum === 2) {
    return "Scissors";
  }
};

// Initializing score variables
let compPts = 0;
let playerPts = 0;

// Plays a round of rock, paper, scissors and determines a winner
playRound = function (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === "rock" && computerSelection === "paper") {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    return compPts++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    return playerPts++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    return playerPts++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    return compPts++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    return compPts++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    return playerPts++;
  } else {
    console.log(`It's a draw.`);
  }
};

// Plays 5 rounds of rock, paper, scissors, and determines a winner
game = function () {
  for (let i = 0; i <= 4; i++) {
    const compAnswer = getComputerChoice();
    const playerAnswer = prompt(
      'Please type, "rock", "paper", or "scissors" to choose your hand'
    );

    playRound(playerAnswer, compAnswer);
  }

  if (playerPts > compPts) {
    console.log(`You beat the computer ${playerPts} to ${compPts}`);
  } else {
    console.log(`You lost to the computer ${compPts} to ${playerPts}`);
  }
};
/**
 *
 *
 */
