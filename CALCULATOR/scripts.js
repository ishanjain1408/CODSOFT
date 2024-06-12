let display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '';
}

function deleteCharacter() {
    display.innerText = display.innerText.slice(0, -1);
}

function appendCharacter(character) {
    display.innerText += character;
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = 'Error';
    }
}
