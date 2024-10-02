function continueGame(){
    const alphabet = getRandomAlpha();

    const display = document.getElementById('current-alphabet');
    display.innerText = alphabet;

    setBackgroundColorById(alphabet);

}

let countdown;
function timeCount(){
    let timeLeft = 60;

    const timerDisplay = document.getElementById("timer");

        clearInterval(countdown);
        timerDisplay.textContent = `Time Left: ${timeLeft}`;

        countdown = setInterval(() => {
        timeLeft--; 
        timerDisplay.textContent = `Time Left: ${timeLeft}`; // Update timer display

        if (timeLeft <= 0) {
            clearInterval(countdown); // Stop the timer when time reaches 0
            timerDisplay.textContent = "Time's up!";
            gameOver();
        }
    }, 1000); // 1000ms = 1 second
}
function handlKeyUpPressed(event){
    const keyPressed = event.key;
    console.log("key is pressed", keyPressed);

    if(keyPressed === 'Escape'){
            gameOver();
        }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if(keyPressed === expectedAlphabet){
        console.log('you win');
        
        const currentScore = getTextElementValueById('game-score');
        
        const updatedScore =currentScore + 1;
        setTextElementValueById('game-score',updatedScore);

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('you lose');

        const currentLife = getTextElementValueById('life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('life',updatedLife);

        if(updatedLife === 0){
            gameOver();
        }
    }
}

document.addEventListener('keyup',handlKeyUpPressed);

function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    timeCount();
    setTextElementValueById('life', 5);
    setTextElementValueById('game-score', 0);
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    const finalScore = getTextElementValueById('game-score');
    console.log(finalScore);
    setTextElementValueById('last-score',finalScore);

    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);

    clearInterval(countdown);
}
