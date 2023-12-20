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

//status section
const status = document.createElement('div');
status.className = 'status';
const playerStatus = document.createElement('p');
playerStatus.innerText = 'You choose ';
const playerStatusSpan = document.createElement('span');
playerStatus.append(playerStatusSpan);
const computerStatus = document.createElement('p');
computerStatus.innerText = 'Computer chooses '
const computerStatusSpan = document.createElement('span');
computerStatus.append(computerStatusSpan);
status.append(playerStatus, computerStatus);

const statusBoard = document.createElement('div');
statusBoard.classList= 'status-board lose';
const statusBoardText= document.createElement('span');
statusBoard.appendChild(statusBoardText);

statusBoardText.innerText = 'YOU LOSE';

//attaching different sections to container all at once
container.append(score, choice, status, statusBoard);
