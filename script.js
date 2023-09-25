const gameBoardObj = (() => {
    const gameBoardArray = [];
    for (let i = 0; i<9; i++) {
        let square = i;
        gameBoardArray.push(square)
    }

    return {gameBoardArray};
})();

console.log(gameBoardObj)

const startBtn = document.querySelector(".start-game");
const form = document.querySelector('form');
const body = document.body;

startBtn.addEventListener('click', () => {
    if (form.checkValidity()) 
    body.removeChild(form)
})