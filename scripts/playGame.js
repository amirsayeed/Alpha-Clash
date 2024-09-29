function continueGame(){
    const alphabet = getRandomAlpha();

    const display = document.getElementById('current-alphabet');
    display.innerText = alphabet;

    setBackgroundColorById(alphabet);
    //scoreUpdate();

}

function handlKeyUpPressed(event){
    const keyPressed = event.key;
    console.log("key is pressed", keyPressed);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if(keyPressed === expectedAlphabet){
        console.log('you win');

        if(keyPressed === 'Escape'){
            gameOver();
        }
        const currentScoreElement = document.getElementById('game-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        
        const newScore = currentScore + 1;
        console.log(newScore);
        currentScoreElement.innerText = newScore;

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('you lose');

        const currentLifeElement = document.getElementById('life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLifeRemaining = parseInt(currentLifeText);
        
        const newLifeCount = currentLifeRemaining - 1;
        console.log(newLifeCount);
        currentLifeElement.innerText = newLifeCount;
        if(newLifeCount === 0){
            gameOver();
        }
    }
}

document.addEventListener('keyup',handlKeyUpPressed);

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    const finalScoreElement = document.getElementById('game-score');
    const finalScoreText = finalScoreElement.innerText;
    const finalScore = parseInt(finalScoreText);
    console.log(finalScore);
}
