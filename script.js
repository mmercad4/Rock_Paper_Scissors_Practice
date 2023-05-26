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

const buttonContainer = document.querySelector(".button-container");

const buttons = buttonContainer.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const compAnswer = getComputerChoice().toLowerCase();
    const playerAnswer = e.target.textContent.toLowerCase();

    playRound(playerAnswer, compAnswer);

    const userHead = document.querySelector(".userHead");
    const cpuHead = document.querySelector(".cpuHead");
    const winnerHead = document.querySelector(".winner");
    const playerImg = document.querySelector(".playerImg");
    const cpuImg = document.querySelector(".cpuImg");

    drawImg =
      "https://cdn.pixabay.com/photo/2013/07/12/16/35/redo-151210_1280.png";

    scissorImg =
      "https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296853_1280.png";

    paperImg =
      "https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296855_1280.png";

    rockImg =
      "https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296854_1280.png";

    if (playerAnswer === "rock" && compAnswer === "paper") {
      playerImg.src = rockImg;
      cpuImg.src = paperImg;
    } else if (playerAnswer === "rock" && compAnswer === "scissors") {
      playerImg.src = rockImg;
      cpuImg.src = scissorImg;
    } else if (playerAnswer === "paper" && compAnswer === "rock") {
      playerImg.src = paperImg;
      cpuImg.src = rockImg;
    } else if (playerAnswer === "paper" && compAnswer === "scissors") {
      playerImg.src = paperImg;
      cpuImg.src = scissorImg;
    } else if (playerAnswer === "scissors" && compAnswer === "rock") {
      playerImg.src = scissorImg;
      cpuImg.src = rockImg;
    } else if (playerAnswer === "scissors" && compAnswer === "paper") {
      playerImg.src = scissorImg;
      cpuImg.src = paperImg;
    } else if (playerAnswer === compAnswer) {
      playerImg.src = drawImg;
      cpuImg.src = drawImg;
    }

    userHead.textContent = `User: ${playerPts}`;
    cpuHead.textContent = `CPU: ${compPts}`;

    if (compPts == 5) {
      winnerHead.textContent = `You lose!`;
      winnerHead.classList.add("red");
    } else if (playerPts == 5) {
      winnerHead.textContent = "You win!";
      winnerHead.classList.add("green");
    }
  });
});

/**
 *
 *
 */
