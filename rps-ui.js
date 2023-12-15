const container = document.querySelector('.container');

//score section
const score = document.createElement('div');
score.className = 'score';

const computerScore = document.createElement('p')
computerScore.innerText = 'Computer : ';
const computerScoreSpan = document.createElement('span');
computerScoreSpan.className = 'computer-score';
computerScore.appendChild(computerScoreSpan);

const playerScore = document.createElement('p');
playerScore.innerText = 'Player : ';
const playerScoreSpan = document.createElement('span');
playerScoreSpan.className = 'player-score';
playerScore.appendChild(playerScoreSpan);
score.append(computerScore, playerScore);

//choice section
const choice = document.createElement('div');
choice.className = 'choice';

const rockChoice = document.createElement('div');
rockChoice.className = 'choice-item';
rockChoice.innerText = '🪨';

const paperChoice= document.createElement('div');
paperChoice.className = 'choice-item';
paperChoice.innerText = '📃';

const scissorChoice = document.createElement('div');
scissorChoice.className = 'choice-item';
scissorChoice.innerText = '✂️';

choice.append(rockChoice, paperChoice, scissorChoice)


//attaching different sections to container all at once
container.append(score, choice);

