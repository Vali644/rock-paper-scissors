document.querySelector("#rock").addEventListener("click", ()=>{play("rock", getComputerChoice())});

document.querySelector("#paper").addEventListener("click", ()=>{play("paper", getComputerChoice())});

document.querySelector("#scissors").addEventListener("click", ()=>{play("scissors", getComputerChoice())})
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
                document.getElementById("result").innerText = "Tie! Both chose Rock";
                break;
            case "Paper":
                document.getElementById("result").innerText = "You loose! Paper beats Rock";
                break;
            case "Scissors":
                document.getElementById("result").innerText = "You win! Rock beats Scissors";
                break;
        }
    } else if (playerSelection == "paper") {
        switch (computerSelection) {
            case "Rock":
                document.getElementById("result").innerText = "You Win! Paper beats Rock";
                break;
            case "Paper":
                document.getElementById("result").innerText = "Tie! Both choose Paper";
                break;
            case "Scissors":
                document.getElementById("result").innerText = "You loose! Scissors beats Paper";
                break;
        }
    } else if (playerSelection = "scissors") {
        switch (computerSelection) {
            case "Rock":
                document.getElementById("result").innerText = "You loose! Rock beats Scissors";
                break;
            case "Paper":
                document.getElementById("result").innerText = "You Win! Scissors beats Paper";
                break;
            case "Scissors":
                document.getElementById("result").innerText = "Tie! Both chose Scissors";
                break;
        }
    }
}

function game () {
    
}

function validateInput (input) {
    if (input == 'rock' || input == 'paper' || input == 'scissors') {
        return true;
    } else { return false; }
}

game();