const startBtn = document.querySelector(".start-game");
const form = document.querySelector('form');
const body = document.body;

const container = document.querySelector('#board-container');




function Player () {
    const PlayerX = document.querySelector('#P1');
    const PlayerO = document.querySelector('#P2');

    startBtn.addEventListener('click', () => {
        if (form.checkValidity()) {
        body.removeChild(form);
        let playerXName = PlayerX.value;
        let playerOName = PlayerO.value;
        console.log(playerXName, playerOName);

        const board = document.createElement('div');
        board.className = "board"
        
        let squareArray = [];

        for (let i = 0; i<9; i++) {
            let square = document.createElement('div');
            square.className = "square";
            squareArray.push(square);
            board.appendChild(square);   
        }

        let currentPlayer = 1;
        let currentPlayerName = playerXName 
        const playerDisplay = document.createElement('div');
        playerDisplay.className = "playerDisplay"
        playerDisplay.textContent = `It's ${currentPlayerName}'s turn`

        container.appendChild(playerDisplay);
        container.appendChild(board);
        
        squareArray.forEach(square => {
            square.addEventListener('click', () => {
        if (currentPlayer === 1 & square.textContent === "") {
            square.textContent = "X";
            currentPlayer = 2;
            currentPlayerName = playerOName;
            playerDisplay.textContent = `It's ${currentPlayerName}'s turn`
            
            
            } else if ( currentPlayer === 2 & square.textContent === "") {
                square.textContent = "O";
                currentPlayer = 1;
                currentPlayerName = playerXName;
                playerDisplay.textContent = `It's ${currentPlayerName}'s turn`
            }
        })
        });

        }
    });

    

}

Player()

const gameBoardObj = (() => {
    const gameBoardArray = [];
    for (let i = 0; i<9; i++) {
        gameBoardArray[i] = []
        gameBoardArray[i].push(Cell());
    }

    const getGameBoardArray = () => gameBoardArray;

    const selectSquare = (square,player) => {
        const availableSquare = d
    }

    return {getGameBoardArray};
})();


function Cell() {
    let boxState = "X";


    return boxState
    
}



const gameController = (() => {
    
})();


console.log(gameBoardObj.getGameBoardArray())

