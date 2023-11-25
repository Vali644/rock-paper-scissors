function getComputerChoice () {
    randomN = Math.floor(Math.random() * 3);
    switch (randomN) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function play (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock") {
        switch (computerSelection) {
            case "Rock":
                return "Tie! Both chose Rock";
            case "Paper":
                return "You loose! Paper beats Rock";
            case "Scissors":
                return "You win! Rock beats Scissors";
        }
    } else if (playerSelection == "paper") {
        switch (computerSelection) {
            case "Rock":
                return "You Win! Paper beats Rock";
            case "Paper":
                return "Tie! Both choose Paper";
            case "Scissors":
                return "You loose! Scissors beats Paper";
        }
    } else if (playerSelection = "scissors") {
        switch (computerSelection) {
            case "Rock":
                return "You loose! Rock beats Scissors";
            case "Paper":
                return "You Win! Scissors beats Paper";
            case "Scissors":
                return "Tie! Both chose Scissors";
        }
    }
}
