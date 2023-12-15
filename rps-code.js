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

var playerSelection;

const helper = () => {
    console.log();
    console.log("****************************************************");
    console.log("***************** How to play ******************");
    console.log("1. There will be five rounds on this game.");
    console.log('2. At each round player will be prompoted to "enter","rock", paper or "scissor".');
    console.log("3. Next ther computer will guess from the three choices the player given.");
    console.log('4. "rock" beats scissor \n "scissor" beats "paper"\n "paper" beats "rock"')
    console.log("5. Highest score out of five wins the game");
    console.log();
}

const game = () => {
    helper();
    let computerScore = 0;
    let playerScore = 0;

    for(let i = 0; i < 5; i++) {
        if(playerScore - computerScore !== 2 || 3 && computerScore - playerScore !== 2 || 3) {
            playerSelection = prompt("Enter your choise( rock , paper or scissor: ");
            var computerSelection = getComputerChoice();
            console.log(`Your Choice: ${playerSelection}`);
            console.log(`Computer Choice: ${computerSelection}`);
            if(play(playerSelection.toLowerCase(), computerSelection) === "computer") {
                console.log("Computer wins")
                computerScore++;
            }
            else if (play(playerSelection.toLowerCase(), computerSelection) === "player") {
                console.log("Player wins")
                playerScore++;
            }
            else
                console.log("Draw");
        }

        else
            break;
    }

    if(playerScore - computerScore === 2) 
        console.log(`Player wins by Total Domination\nPlayer Score: ${playerScore}\nComputer Score: ${computerScore}`);
    else if(computerScore - playerScore === 2)
        console.log(`Computer Wins by Total Domination  ${computerScore} - ${playerScore}`)
    else if(computerScore > playerScore)
        console.log(`Computer won ${computerScore} - ${playerScore}`)
    else if(playerScore > computerScore)
        console.log(`Player won ${playerScore} - ${computerScore}`)
}

game();