function continueGame(){
    const alphabet = getRandomAlpha();

    const display = document.getElementById('current-alphabet');
    display.innerText = alphabet;

    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}
