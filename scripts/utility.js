function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add("hidden");
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove("hidden"); 
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getRandomAlpha(){
    const alphabetStr = 'abcdefghijklmnopqrstuvwyz';
    const alphabets = alphabetStr.split('');
    const randomAlpha = Math.random(alphabets)*25;
    const index = Math.round(randomAlpha);

    const alphabet = alphabets[index];
    return alphabet;
}