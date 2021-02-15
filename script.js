'use strict';

let secretNumber = Math.trunc(Math.random() * 100 + 1);
let score = 50;
let highScore = document.querySelector('.highscore').textContent = 0;
document.querySelector('.message').style.fontSize = '35px';
document.querySelector('.again').style.fontSize = '20px';

document.querySelector('.check').addEventListener('click' , function () {
    
    let guess = Number(document.querySelector('.guess').value);

    if(!guess) {
        document.querySelector('.message').textContent = 'ჩაჭერე რიცხვი🃏';
    }else if(guess === secretNumber) {
        document.querySelector('.message').textContent = 'OMG 😯 შენ მოიგე🙌';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        if(score > highScore){
            highScore = document.querySelector('.highscore').textContent = score;
        }
    }else if(guess > secretNumber){
        if(score > 1) {
            document.querySelector('.message').textContent = 'მაღალია🙌';
            score--;
            document.querySelector('.score').textContent = score;
        }else {

            document.querySelector('.message').textContent = 'შენ წააგე სამწუხაროდ🙌';
            document.querySelector('.score').textContent = 0;
        }
    }else if (guess < secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = 'დაბალია🙌';
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = 'შენ წააგე სამწუხაროდ🙌';
            document.querySelector('.score').textContent = 0;

        }
    } 
})
document.querySelector('.again').addEventListener('click', function () {
    score = 50;
    secretNumber = Math.trunc(Math.random() * 100 + 1);
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'ჩაჭერე რიცხვი🃏';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
})