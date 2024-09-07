function resetgamestates(){
    activePlayer = 0;
    currentRound = 0;
    gameisover = false;
    gameOverElement.firstElementChild.innerHTML =
     ' You Won! <span id="winner-name"> Player Name </span>';
     gameOverElement.style.display = 'none';

     let gameBordIndex = 0;
     for(let i = 0; i < 3; i++){
        for(j = 0; j < 3; j++){
            gameData[i][j] = 0;
            const gameBorditemElement = gameBordElement.children[gameBordIndex];
            gameBorditemElement.textContent = '';
            gameBorditemElement.classList.remove('disabled');
            gameBordIndex++;
        }
     }
}





function startNewgame(){
    if(players[0].name === ''|| players[1].name === ''){
       alert('pls enter the name!');
        return;
    }

    resetgamestates()

    activePlayerNameElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = 'block';
}



function switchPlayer(){
    if (activePlayer === 0){
        activePlayer = 1;
    }else{
        activePlayer = 0;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
}




function selectGameField(event){
    if(event.target.tagName !== 'LI' || gameisover){
        return;
    }


const selectedField = event.target;
const selectedColumn = selectedField.dataset.col - 1;
const selectedRow = selectedField.dataset.row - 1;

if(gameData[selectedRow][selectedColumn] > 0){
    alert('pls dont click the selected area');
    return;
}

selectedField.textContent = players[activePlayer].Symbol;
selectedField.classList.add('disabled');


gameData[selectedRow][selectedColumn] = activePlayer + 1;
console .log(gameData);

const winnerId = checkforGameover();


if (winnerId !== 0){
    endGame(winnerId);
}

currentRound++;
switchPlayer()

}

function checkforGameover(){
    for(let i = 0; i < 3; i++) {
        if(
            gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][0] === gameData[i][2]
        ){
            return gameData[i][0];
        }
    }

    for(let i = 0; i < 3; i++) {
        if(
            gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[0][i] === gameData[2][i]
        ){
            return gameData[0][i];
        }
    }

   if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
   ){
    return gameData[0][0];
   }

   if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
   ){
    return gameData[2][0];
   }

   if(currentRound === 9){
    return -1;
   }
return 0;
}

function endGame(winnerId){
    gameisover = true;
    gameOverElement.style.display = 'block';


    if(winnerId > 0){
        const winnerName = players[winnerId - 1].name;
        gameOverElement.firstElementChild.firstElementChild.textContent = winnerName; 
    }else{
        gameOverElement.firstElementChild.textContent = 'it\'s a draw'
    }
}
