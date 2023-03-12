rpsGame();


function rpsGame() {
        
        let wins = 0;
        let losses = 0;

        console.log("================================");

        for (let i = 0; i < 5; i++) {

                // Gets an input from the player and retries until the player inputs a valid option
                let playerMove = getPlayerMove();
                
                console.log("You selected: "+playerMove);

                // Converts the player input into 0, 1, or 2
                let playerConvertedMove = convertMove(playerMove);

                // The computer uses random moves of 0, 1, or 2
                let computerMove = getRandomInt(3);
                console.log(`Computer selected: ${convertMove(computerMove)}`);

                // Returns 1 if the player wins, 2 if the computer wins, or 3 in the case of a tie
                let roundResult = playRound(playerConvertedMove, computerMove);

                console.log("================================");

                if (roundResult === 2) {
                        ++losses;
                        continue;
                }
                if (roundResult === 1) {
                        ++wins;
                }
        }
        console.log(`Game over! Wins: ${wins} | Losses: ${losses}`);
}



function getPlayerMove() {
        while (true) {
                let playerMove = prompt("Choose between ROCK, PAPER, or SCISSORS!");
                playerMove = playerMove.toUpperCase();
                console.log(playerMove);
                if (playerMove != "ROCK" && playerMove != "PAPER" && playerMove != "SCISSORS") {
                        console.log("Invalid input. Try again!");
                } else {
                        return playerMove;
                }
        } 
}

function convertMove(playerMove) {
        const conversionMap = [0, 1, 2, "ROCK", "PAPER", "SCISSORS"];
        if (typeof(playerMove) === "number") {
                return conversionMap[playerMove+3];
        }
        return conversionMap[conversionMap.indexOf(playerMove)-3];
}

function playRound(playerMove, computerMove) {
        if (playerMove === computerMove) {
                console.log("It's a tie!");
                return 3;
        }

        if (nextInArray(playerMove) === computerMove) {
                console.log(`Computer wins! ${convertMove(computerMove)} beats ${convertMove(playerMove)}`);
                return 2;
        } else {
                console.log(`Player wins! ${convertMove(playerMove)} beats ${convertMove(computerMove)}`); 
                return 1;
        } 
}

function getRandomInt(max) {
        return Math.floor(Math.random() * max);
}  

function nextInArray(num) {
        if (num === 2) {
                return 0;
        }
        return ++num;
}