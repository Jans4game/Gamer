function game() {
    let match = 0;
    let score = 0;
    let compScore = 0;
    

    while (match < 5) {
        const playerSelection = prompt("Pick your Choice.");
        const computerSelection = getComputerChoice();
        let artyom = playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));

        if (artyom == "You Lose! Paper beats Rock" || artyom == "You Lose! Rock beats Scissors" || artyom == "You Lose! Scissors beats Paper") {
            compScore += 1; 
        } else if (artyom == "You Win! Paper beats Rock" || artyom == "You Win! Rock beats Scissors" || artyom == "You Win! Scissors beats Paper") {
            score += 1;
        }


        if (artyom == "Tie") {
            match = match + 0;
        } else {
            match += 1;
        }
        console.log(match);

    } 
    let hi = "wait till result";
    if (score >= 3) {
        hi = "You Won";
        
    } else {
        hi = "You lost!"
        
    }
    console.log(score);
    console.log(compScore);
    return hi;
    
}






function playRound(playerSelection, computerSelection) {
    let chosenAnsPlayer = playerSelection.toLowerCase();
    
    let result = "hi";

    
    if (chosenAnsPlayer == "rock" && computerSelection == "paper"){
        result = "You Lose! Paper beats Rock";
    } else if (chosenAnsPlayer == "paper" && computerSelection == "rock") {
        result = "You Win! Paper beats Rock";
    } else if (chosenAnsPlayer == "rock" && computerSelection == "scissors") {
        result = "You Win! Rock beats Scissors";
    } else if (chosenAnsPlayer == "scissors" && computerSelection == "rock") {
        result = "You Lose! Rock beats Scissors";
    } else if (chosenAnsPlayer == "scissors" && computerSelection == "paper") {
        result = "You Win! Scissors beats Paper";
    } else if (chosenAnsPlayer == "paper" && computerSelection == "scissors") {
        result = "You Lose! Scissors beats Paper";
    } else if (chosenAnsPlayer == computerSelection){
        result = "Tie";
    } else {
        result ="Enter correct choice"
    }

   
    
    
    return result;
    
}
    

  //
  console.log(game());
  
  










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

    console.log(choice)
    return choice;
}

