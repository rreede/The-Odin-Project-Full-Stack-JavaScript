function getComputerChoice() {

    let moves = ["ROCK","PAPER","SCISSORS"];
    let random = Math.floor((Math.random() * moves.length));
    let computerChoice =  moves[random];
    console.log(`Computer chose: ${computerChoice}`);
    return computerChoice;
   
}

function getPlayerChoice() {

    let playerChoice = prompt("Rock, Paper or Scissors?");
    let upperCasePlayerChoice = playerChoice.toUpperCase();
    return upperCasePlayerChoice;

}

function playRound(playerSelection, computerSelection) {

    if(playerSelection === computerSelection) {
        console.log("TIE! Play again");
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        console.log("You LOSE!");
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        console.log("You WIN!");
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        console.log("You WIN!");
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        console.log("You LOSE!");
    }  else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        console.log("You LOSE!");
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        console.log("You WIN!");
    } 

}


function game() {


    for (i=0;i<5;i++) {
        playRound();
        
    }
    

}

playRound(getPlayerChoice(), getComputerChoice());

// Turning function expressions into arrow function.

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );