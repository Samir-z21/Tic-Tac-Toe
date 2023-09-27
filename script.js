const startBtn = document.querySelector(".start-game");
const form = document.querySelector('form');
const body = document.body;

const container = document.querySelector('#board-container');



function game () {
    const PlayerX = document.querySelector('#P1');
    const PlayerO = document.querySelector('#P2');

    startBtn.addEventListener('click', () => {
        if (form.checkValidity()) {
            body.removeChild(form);
            let playerXName = PlayerX.value;
            let playerOName = PlayerO.value;

            function checkWin(markerArray) {
            const winPatterns = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
                [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
                [0, 4, 8], [2, 4, 6]             // Diagonals
            ];

            for (const pattern of winPatterns) {
                const [a, b, c] = pattern;
                if (
                    markerArray[a] !== "" &&
                    markerArray[a] === markerArray[b] &&
                    markerArray[a] === markerArray[c]
                ) {
                    if (markerArray[a] === "X") return  playerXName;
                    else {
                        return playerOName
                    } // Return the marker that has won
                }
            }
            return null; // No winner found
        }   
            const board = document.createElement('div');
            board.className = "board";
            let squareArray = [];
            let markerArray = new Array(9).fill(""); // Initialize markerArray with empty strings
            for (let i = 0; i < 9; i++) {
                let square = document.createElement('div');
                square.className = "square";
                squareArray.push(square);
                board.appendChild(square);
            }


            let currentPlayer = 1;
            let currentPlayerName = playerXName;
            const playerDisplay = document.createElement('div');
            playerDisplay.className = "playerDisplay";
            playerDisplay.textContent = `${currentPlayerName}'s turn`;


            const twoBtnContainer = document.createElement('div');
            twoBtnContainer.className = "twoBtnContainer"
           

            const restartBtn = document.createElement('button');
            restartBtn.className = "restartBtn";
            restartBtn.textContent = "Restart";
            twoBtnContainer.appendChild(restartBtn);

            const changePlayers = document.createElement('button');
            changePlayers.className = "changePlayers";
            changePlayers.textContent = "Change Players";
            twoBtnContainer.appendChild(changePlayers);
            
            container.appendChild(playerDisplay);
            container.appendChild(board);
            container.appendChild(twoBtnContainer);

            squareArray.forEach((square, index) => {
                square.addEventListener('click', () => {
                    if (playerDisplay.textContent.includes("wins")) return
                    if (playerDisplay.textContent.includes("draw")) return
                    if (currentPlayer === 1 && square.textContent === "") {
                        square.textContent = "X";
                        markerArray[index] = "X";
                        currentPlayer = 2;
                        currentPlayerName = playerOName;
                        playerDisplay.textContent = `${currentPlayerName}'s turn`;
                        checkAndDeclareWinner(markerArray);
                    } else if (currentPlayer === 2 && square.textContent === "") {
                        square.textContent = "O";
                        markerArray[index] = "O";
                        currentPlayer = 1;
                        currentPlayerName = playerXName;
                        playerDisplay.textContent = `${currentPlayerName}'s turn`;
                        checkAndDeclareWinner(markerArray);
                    }
                    });
                 });

            function checkAndDeclareWinner(markerArray) {
                const winner = checkWin(markerArray);
                if (winner) {
                    playerDisplay.textContent = `${winner} wins!`;
                    // You can add further logic for game over or reset here
                } else if (markerArray.every(item => item !== "")) {playerDisplay.textContent = "It's a draw!"};
                
                restartBtn.addEventListener('click', () => {
                if ( winner === playerXName) {
                    currentPlayerName = playerOName;
                    currentPlayer = 2;     
                } else if (winner === playerOName) {
                    currentPlayerName = playerXName;
                    currentPlayer = 1;
                } else {
                    currentPlayerName = playerXName;
                    currentPlayer = 1;
                }
                playerDisplay.textContent = `${currentPlayerName}'s turn`;
                squareArray.forEach((square) => {
                    square.textContent = "";
                });
                
                markerArray.forEach((marker, index) => {
                    markerArray[index] = ""; 
                });
                console.log(markerArray)
            });
            };
        
            changePlayers.addEventListener('click', () => {
                location.reload()
            })
        };
    });
}

game();
