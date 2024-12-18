'use strict';


let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
    return message;
}

document.querySelector('.check').addEventListener('click', function()  {
    const guess = Number(document.querySelector('.guess').value);

    //When there is ni input
    if(!guess) {
        displayMessage("⛔ Please enter a number!");

        //When player wins
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        displayMessage( "🎉 You guessed it!");
        //Change background Color
        document.querySelector('body').style.backgroundColor = '#60b347';
        // document.querySelector('.number').style.width = '15rem';
        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore-number').textContent = highscore
        }

        //When guess is wrong
    } else if (guess !== secretNumber) {

        if(score > 1) {
            displayMessage( guess > secretNumber ?  "📈 Too high!" :  "📉 Too low!");
            // document.querySelector('.message').textContent =  
            // guess > secretNumber ? 'Too high' : 'Too low';
            score--;
            document.querySelector('.score-number').textContent = score;
            
        }else{
            displayMessage("💀 Game over!");
            document.querySelector('.score-number').textContent = 0;

        }

    }
    
    
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.score-number').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    displayMessage("🤔 Make your guess!");
    document.querySelector('body').style.backgroundColor = 'white';
})









 