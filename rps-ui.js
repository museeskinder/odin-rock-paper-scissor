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





//attaching different sections to container all at once
container.append(score);
