const possibleChoices = document.querySelectorAll('.choices');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const computerDisplay = document.getElementById('compChoice');
const playersDisplay = document.getElementById('playerChoice');
const resultsuu = document.getElementById('results');
const score = document.getElementById('score');
const scoreboard = { player:0, computer: 0};
const trueres = document.getElementById('trueresult');
const resets = document.querySelector('#resetter');
resets.addEventListener('click',() => {
  alert("Reload Page to Play Again");
  window.location.reload;
});


let rounds = 0;

possibleChoices.forEach(choice => choice.addEventListener('click', play));


function play(e){
  playerSelection = e.target.id;
  rounds += 1;
  const computerSelection = getComputerChoice();
  const winner = playRound(playerSelection, computerSelection);

  computerDisplay.innerHTML = `<p>Computer's Choice: ${computerSelection}</p>`;
  playersDisplay.innerHTML = `<p>Player's Choice: ${playerSelection}</p>`;
  resultsuu.innerHTML = `<h3>Result: ${winner}</h3>`;
  score.innerHTML = `<p>Player: ${scoreboard.player}</p><p>Computer: ${scoreboard.computer}</p>`;
  game();
  
}

function playRound(playerSelection, computerSelection) {
    let chosenAnsPlayer = playerSelection
    computerSelection = getComputerChoice();
    console.log(chosenAnsPlayer);
    console.log (computerSelection);

    
    let result = "hi";

    
    if (chosenAnsPlayer == "rock" && computerSelection == "paper"){
        result = "You Lose! Paper beats Rock";
        scoreboard.computer++;
    } else if (chosenAnsPlayer == "paper" && computerSelection == "rock") {
        result = "You Win! Paper beats Rock";
        scoreboard.player++;
    } else if (chosenAnsPlayer == "rock" && computerSelection == "scissors") {
        result = "You Win! Rock beats Scissors";
        scoreboard.player++;
    } else if (chosenAnsPlayer == "scissors" && computerSelection == "rock") {
        result = "You Lose! Rock beats Scissors";
       scoreboard.computer++;
    } else if (chosenAnsPlayer == "scissors" && computerSelection == "paper") {
        result = "You Win! Scissors beats Paper";
        scoreboard.player++;
    } else if (chosenAnsPlayer == "paper" && computerSelection == "scissors") {
        result = "You Lose! Scissors beats Paper";
        scoreboard.computer++;
    } else if (chosenAnsPlayer == computerSelection){
        result = "Tie";
        rounds -=1;
    } else {
        result ="Enter correct choice"
    }

    console.log(result);
    
    return result;
}  
     

function getComputerChoice() {
    let random = Math.random() * 10;
    random = Math.trunc(random);
    let choice;

    if (random < 4) {
        choice = ("rock");
    }
    else if (random < 7) {
        choice = ("paper");
    }
    else {
        choice =("scissors");
    }

    
    return choice;
}


function game(computerScore, playerScore) {
  
  if (rounds ===5){
    computerScore = scoreboard.computer;
    playerScore = scoreboard.player;
    if (computerScore > playerScore){
      trueresult.innerHTML = `<p>Winner: ${"Computer"}</p>`;
    } else if (playerScore > computerScore){
      trueresult.innerHTML = `<p>Winner: ${"Player"}</p>`;
    } else if (playerScore === computerScore){
      trueresult.innerHTTML = `<p>It's a tie</p>`;
    } 
  }
}
