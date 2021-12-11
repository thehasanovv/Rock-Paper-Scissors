'use strict';
/* 
=================
Declare variables
=================
*/
// Win or lose
let playerWinOrLose = document.getElementById('playerWinOrLose');
let computerWinOrLose = document.getElementById('computerWinOrLose');
// Images
let pImages = document.getElementById('pImages');
let cImages = document.getElementById('cImages');
// Scores
let pScore = document.getElementById('pScore');
let cScore = document.getElementById('cScore');
// 
let pChoice = document.querySelector('#pChoice');
let cChoice = document.querySelector('#cChoice');
// displayWinner
let displayWinner = document.querySelector('#displayWinner');
// Button
let playAgainBtn = document.querySelector('#playAgain');

/* 
=================
Scores 
=================
*/
let score = 20;
let playerScore = 0;
let computerScore = 0;
let isGame = true;


/* 
=================
Computer Choises
=================
*/

function computerChoises() {
    var data = ['r', 'p', 's'];
    function random(max, min) {
        return Math.floor(Math.random(max - min) * min);
    }
    var compChoise = data[random(0, 3)]
    return compChoise
}
/* 
=================
Player Choises 
and game settings
=================
*/

// If the computer or player won (write "Win" or "Lose" and change color)
function winGame(won) {
    if (won === 'playerWin') {
        playerWinOrLose.innerText = "Win"
        playerWinOrLose.style.color = "#28a745"
        computerWinOrLose.innerText = "Lose"
        computerWinOrLose.style.color = "#dc3545"
        playerScore++;

    } else if (won === 'computerWin') {
        computerWinOrLose.innerText = "Win"
        computerWinOrLose.style.color = "#28a745"
        playerWinOrLose.innerText = "Lose"
        playerWinOrLose.style.color = "#dc3545"
        computerScore++;
    } else {
        playerWinOrLose.innerText = "DRAW"
        playerWinOrLose.style.color = "#000"
        computerWinOrLose.innerText = "DRAW"
        computerWinOrLose.style.color = "#000"
    }
}


// Get KeyUp Player choise
    window.onkeyup = function (e) {
        computerChoises() // Run the function to get the computer choise
        var computerChoise = computerChoises()

        var userChoise = e.key.toLowerCase();
        if (userChoise != 'r' && userChoise != 's' && userChoise != 'p') {
            alert('Please choose R S P button')
            return
        }

        // Compare the selected ones
        if (computerChoise === "r" && userChoise === "p") {
            winGame('playerWin')

        } else if (computerChoise === "p" && userChoise === "r") {
            winGame('computerWin')

        } else if (computerChoise === "s" && userChoise === "r") {
            winGame('playerWin')

        } else if (computerChoise === "r" && userChoise === "s") {
            winGame('computerWin')

        } else if (computerChoise === "p" && userChoise === "s") {
            winGame('playerWin')

        } else if (computerChoise === "s" && userChoise === "p") {
            winGame('computerWin')

        } else if (computerChoise === userChoise) {
            winGame()

        }

        // Change scores on screen
        pScore.innerHTML = `Point: ${playerScore}`;
        cScore.innerHTML = `Point: ${computerScore}`;

        if (userChoise === 'r') {
            pImages.src = './asserts/images/r.png';
            pChoice.innerText = 'Rock'
        } else if (userChoise === 's') {
            pImages.src = './asserts/images/s.png';
            pChoice.innerText = 'Scissors'
        } else if (userChoise === 'p') {
            pImages.src = './asserts/images/p.png';
            pChoice.innerText = 'Paper'
        }


        if (computerChoise === 'r') {
            cImages.src = './asserts/images/r.png';
            cChoice.innerText = 'Rock'
        } else if (computerChoise === 's') {
            cImages.src = './asserts/images/s.png';
            cChoice.innerText = 'Scissors'
        } else if (computerChoise === 'p') {
            cImages.src = './asserts/images/p.png';
            cChoice.innerText = 'Paper'
        }

    }



playAgainBtn.addEventListener('click', function () {
    playerScore = 0;
    computerScore = 0;
    pScore.innerHTML = 'Point: 0'
    cScore.innerHTML = 'Point: 0'
    pImages.src = './asserts/images/r.png';
    cImages.src = './asserts/images/r.png';
    isGame = true;
})


