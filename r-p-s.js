

import getRandomThrow from './getThrow.js';
import compare from './compare.js';



const oppSpan = document.getElementById('comp-throw');
const gameResultSpan = document.getElementById('game-result');
const wonSpan = document.getElementById('games-won');
const lossSpan = document.getElementById('games-lost');
const tiedSpan = document.getElementById('games-tied');



const playButton = document.getElementById('play-button');

let wins = [0]; 
let losses = [0]; 
let ties = [0]; 

let randomNum = () => Math.floor(Math.random() * 3);

const playGame = () => {
    const selectedRadioButton = document.querySelector('input:checked');
    const playerSelection = selectedRadioButton.value;  
    
    let compCurrentThrow = getRandomThrow(randomNum());
    
    let gameResult = compare(playerSelection, compCurrentThrow);

    gameResultSpan.textContent = gameResult;

    oppSpan.textContent = compCurrentThrow;
    
    if (gameResult === 'WIN!'){

        wins[0]++; 
        wonSpan.textContent = wins; 

    } else if (gameResult === 'LOSE!') {

        losses[0]++; 
        lossSpan.textContent = losses; 
    
    } else {

        ties[0]++; 
        tiedSpan.textContent = ties; 
    }

};



playButton.addEventListener('click', playGame);
