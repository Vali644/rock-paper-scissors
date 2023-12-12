

document.querySelector("#rock").addEventListener("click", ()=>{play("Rock", getComputerChoice())});
document.querySelector("#paper").addEventListener("click", ()=>{play("Paper", getComputerChoice())});
document.querySelector("#scissors").addEventListener("click", ()=>{play("Scissors", getComputerChoice())});

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

let playerScore = 0;

let computerScore = 0;

function play (playerSelection, computerSelection) {
    if (playerScore == 5 || computerScore == 5) {
        computerScore = 0;
        playerScore = 0;
        document.querySelector("#player-score").innerText = playerScore;
        document.querySelector("#computer-score").innerText = computerScore;
    }

    document.querySelector('#player-choice').innerText = playerSelection;
    document.querySelector('#computer-choice').innerText = computerSelection;

    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == "rock") {
        switch (computerSelection) {
            case "Rock":
                document.getElementById("result").innerText = "Tie! Both chose Rock";
                break;
            case "Paper":
                document.getElementById("result").innerText = "You loose! Paper beats Rock";
                computerScore += 1;
                break;
            case "Scissors":
                document.getElementById("result").innerText = "You win! Rock beats Scissors";
                playerScore += 1;
                break;
        }
    } else if (playerSelection == "paper") {
        switch (computerSelection) {
            case "Rock":
                document.getElementById("result").innerText = "You Win! Paper beats Rock";
                playerScore += 1;
                break;
            case "Paper":
                document.getElementById("result").innerText = "Tie! Both choose Paper";
                break;
            case "Scissors":
                document.getElementById("result").innerText = "You loose! Scissors beats Paper";
                computerScore += 1;
                break;
        }
    } else if (playerSelection = "scissors") {
        switch (computerSelection) {
            case "Rock":
                document.getElementById("result").innerText = "You loose! Rock beats Scissors";
                computerScore += 1;
                break;
            case "Paper":
                document.getElementById("result").innerText = "You Win! Scissors beats Paper";
                playerScore += 1;
                break;
            case "Scissors":
                document.getElementById("result").innerText = "Tie! Both chose Scissors";
                break;
        }
    }
    // left to implement a 5 point score cap
    document.querySelector("#player-score").innerText = playerScore;
    document.querySelector("#computer-score").innerText = computerScore;
    if (playerScore == 5) {
        document.getElementById("result").innerText = "You won the game!! 😀";
    } else if (computerScore == 5) {
        document.getElementById("result").innerText = "The computer won the game!! ☹️";
    }
}

function validateInput (input) {
    if (input == 'rock' || input == 'paper' || input == 'scissors') {
        return true;
    } else { return false; }
}

