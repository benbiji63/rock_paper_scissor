function getComputerChoice() {
  let arr = ['rock', 'paper', 'scissor'];
  let hai = arr[Math.floor(Math.random() * arr.length)];
  return hai;
}

function getPlayerChoice() {
  let choice = prompt('Enter rock,paper or  scissor ');
  choice = choice.toLowerCase();
  if (choice === 'rock' || choice === 'paper' || choice === 'scissor') {
    return choice;
  } else {
    alert('Enter a valid selection');
    getPlayerChoice();
  }
}
roundCount = parseInt(prompt('Enter number of rounds'));
const half = roundCount / 2;
console.log(roundCount);

if (roundCount === NaN) {
  alert('Enter a number');
} else {
  playGame();
}

function playGame() {
  let computerPoints = 0;
  let playerPoints = 0;
  for (i = 1; i <= roundCount; i++) {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    console.log(playerChoice);
    console.log(computerChoice);

    if (
      (computerChoice === 'rock' && playerChoice === 'scissor') ||
      (computerChoice === 'paper' && playerChoice === 'rock') ||
      (computerChoice === 'scissor' && playerChoice === 'paper')
    ) {
      computerPoints += 1;
      alert(
        'Computer won the round.Score is ' +
          playerPoints +
          ' to ' +
          computerPoints
      );
    } else if (
      (computerChoice === 'scissor' && playerChoice === 'rock') ||
      (computerChoice === 'rock' && playerChoice === 'paper') ||
      (computerChoice === 'paper' && playerChoice === 'scissor')
    ) {
      playerPoints += 1;
      alert(
        'You won the round.Score is ' + playerPoints + 'to' + computerPoints
      );
      continue;
    } else {
      alert(
        'Round ended in a draw Score is ' + computerPoints + 'to' + playerPoints
      );
      continue;
    }
  }
  if (computerPoints > playerPoints) {
    alert('Sorry you lost the game');
  } else if (computerPoints < playerPoints) {
    alert('Congrats you won the game');
  } else {
    alert('The game is a draw');
  }
}