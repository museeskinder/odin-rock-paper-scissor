import {
    computerScoreSpan,
    playerScoreSpan,
    rockChoice,
    paperChoice,
    scissorChoice,
    playerStatusSpan,
    computerStatusSpan,
    statusBoard,
    statusBoardText
} from "./rps-ui.js";

const getComputerChoice = () => {
    let num = parseInt((Math.random() * 3) + 1)
    switch (num) {
        case 1: 
            return "rock";
            break;
        case 2: 
            return "scissor";
            break;
        case 3: 
            return "paper";
            break;
    }
}
const play = (playerSelection, computerSelection) => {
   if(playerSelection === "rock" && computerSelection === "scissor") 
        return "player";
   else if(computerSelection === "rock" && playerSelection === "scissor") 
        return "computer";
   else if(playerSelection === "paper" && computerSelection === "rock") 
        return "player";
   else if(computerSelection === "paper" && playerSelection === "rock") 
        return "computer";
   else if(computerSelection === "scissor" && playerSelection === "paper") 
        return "computer";
   else if(playerSelection === "scissor" && computerSelection === "paper") 
        return "player";
   else 
        return "draw";
}

const game = (clickedElement) => {
    let computerChoice = getComputerChoice();
    let playerChoice;
    if(clickedElement === rockChoice)
        playerChoice = 'rock';
    else if(clickedElement === paperChoice)
        playerChoice = 'paper';
    else
        playerChoice = 'scissor';
    computerStatusSpan.innerText = computerChoice.toUpperCase();
    playerStatusSpan.innerText = playerChoice.toUpperCase();

    return play(playerChoice, computerChoice);

}

const displayWinner = () => {
    computerScoreSpan.innerText = '';
    playerScoreSpan.innerText = '';
    playerStatusSpan.innerText = '';
    computerStatusSpan.innerText = '';
    statusBoard.setAttribute('style', 'display: block');

    if(computerScore > playerScore)  {
        statusBoardText.innerText = 'COMPUTER WON';
        statusBoard.classList = 'status-board lose';
    }
    else if (computerScore < playerScore) {
        statusBoardText.innerText = 'PLAYER WON';
        statusBoard.classList = 'status-board win';
    } 
    else {
        statusBoardText.innerText = 'DRAW';
        statusBoard.classList = 'status-board draw';
    }

    playerScore = 0;
    computerScore = 0;

}

let playerScore = 0, computerScore = 0;

[paperChoice, rockChoice, scissorChoice].forEach((e) => {
    e.addEventListener('click', (f) => {
        if(game(f.target) === 'player') {
            playerScore++;
            playerScoreSpan.innerText = playerScore;
        }
        else if(game(f.target) === 'computer') {
            computerScore++;
            computerScoreSpan.innerText = computerScore;
        }
        else {
            computerScore++;
            playerScore++;
            playerScoreSpan.innerText = playerScore;
            computerScoreSpan.innerText = computerScore;
        }


        if(computerScore == 5 || playerScore == 5) 
            displayWinner();
    })
})
