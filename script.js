// Computer guess
function getComputerChoice() {

    // choose between 0 - 2
    let choice = Math.floor(Math.random() * 3)
    
    // decide whether its rock, etc
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Human Choice
function getHumanChoice() {
    let guess = window.prompt("rock, paper, or scissors?")
    return guess;
}

// Human Score
let humanScore = 0;

// Computer Score
let computerScore = 0;