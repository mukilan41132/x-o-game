const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameisover  = false;

const players = [
    {
     name: '',
     Symbol: 'x'
    },
    {
     name :'',
     Symbol: 'o'
    },
];

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-errors');
const gameAreaElement = document.getElementById('active-game');
const activePlayerNameElement = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');



const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancleElement = document.getElementById('cancel-button');
const startNewGameBtnElement = document.getElementById('start-game-btn');
// const gameFieldElements = document.querySelectorAll('#bord li');
const gameBordElement = document.getElementById('bord');


editPlayer1BtnElement.addEventListener('click',openplayerConfig);
editPlayer2BtnElement.addEventListener('click',openplayerConfig);

cancleElement.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click',closePlayerConfig);

formElement.addEventListener('submit',saveplayerconfig);
startNewGameBtnElement.addEventListener('click', startNewgame);

// for(const gameFieldElement of gameFieldElements){
//     gameFieldElement.addEventListener('click',selectGameField);
// }


gameBordElement.addEventListener('click', selectGameField);

