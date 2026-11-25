

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



function playRound(humanChoice, computerChoice) {
    // Case insensitive
    humanChoice = humanChoice.toLowerCase();

    switch (humanChoice) {
        case "rock":
            if (computerChoice == "paper") {
                console.log("You lose! Paper beats Rock!");
                return false
            } else if (computerChoice == "scissors") {                
                console.log("You win! Rock beats Scissors!");
                return true
            } else {
                console.log("Draw!");
            }
            break;
        case "paper":
            if (computerChoice == "scissors") {
                console.log("You lose! Scissors beats Paper!");
                return false
            } else if (computerChoice == "rock") {
                console.log("You win! Paper beats rock!");
                return true
            } else {
                console.log("Draw!");
            }
            break;
        case "scissors":
            if (computerChoice == "rock") {
                console.log("You lose! Rock beats Scissors!");
                return false
            } else if (computerChoice == "paper") {
                console.log("You win! Scissors beats Paper!");
                return true
            } else {
                console.log("Draw!");
            }
            break;
        default:
            console.log("wrong input")
    }
}



function playGame () {

    // Human Score
    let humanScore = 0;

    // Computer Score
    let computerScore = 0;

    let counter = 0;
    // Play 5 rounds
    while (counter < 5) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();

        let winner = playRound(humanSelection, computerSelection)

        if (winner == true) {
            humanScore += 1
        } 

        if (winner == false) {
            computerScore += 1
        }

        counter += 1
    }
    
    if (humanScore > computerScore) {
        console.log("Congratulations! You Won! Your score was " + humanScore + " the computer had " + computerScore)
    } else if (computerScore > humanScore) {
        console.log("Better luck next time! you lost with a score of " + humanScore + " while the the computer had " + computerScore)
    } else {
        console.log("Its a draw?!")
    }
}

playGame();