const choices = ["rock", "paper", "scissors"];


function getComputerChoice(){
    const random = Math.floor(Math.random() * choices.length);
    console.log("Computer' s choice is " + choices[random]);

    return choices[random];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() == computerSelection){
        return "tie";
    }
    else if((playerSelection.toLowerCase() == "rock" && computerSelection == "paper") || 
            (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") ||
            (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock")){
        
        return "lose";
    }
    else{
        return "win";
    }

}

function playGame(){
    let playerScore = 0;
    let comScore = 0;
    let container = document.querySelector("body");

    let resultSpace = document.createElement("div");
    let comScoreSpace = document.createElement("div");
    let playerScoreSpace = document.createElement("div");

    playerScoreSpace.textContent = "Your score: " + playerScore;
    comScoreSpace.textContent = "Computer's score: " + comScore;

    let finalResultSpace = document.createElement("div");
    let resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    resetButton.addEventListener("click", () => {
        playerScore = 0;
        comScore = 0;
        playerScoreSpace.textContent = "Your score: " + playerScore;
        comScoreSpace.textContent = "Computer's score: " + comScore;
        resultSpace.textContent = "";
        finalResultSpace.textContent = "";
    });

    for(let i = 0;i < 3;i++){
        let newButton = document.createElement("button");
        newButton.textContent = choices[i];
        newButton.addEventListener("click", () => {
            const computerSelection = getComputerChoice();
            const result = playRound(choices[i], computerSelection);
            
            if(result == "win"){
                resultSpace.textContent = ("You Win! " + choices[i] + " beats " + computerSelection);
                playerScore++;
                playerScoreSpace.textContent = "Your score: " + playerScore;
                if(playerScore == 5){
                    finalResultSpace.textContent = ("You are the final winner. Congratulations! Press Reset to start a new game.");
                }
            }
            else if(result == "lose"){
                resultSpace.textContent = ("You Lose! " + computerSelection + " beats " + choices[i]);
                comScore++;
                comScoreSpace.textContent = "Computer's score: " + comScore;
                if(comScore == 5){
                    finalResultSpace.textContent = ("Computer is the final winner. Never mind! Press Reset to start a new game.");
                }
            }
            else{
                resultSpace.textContent = ("It's tie!");
            }
        });
        container.appendChild(newButton);
    }

    container.appendChild(resultSpace);
    container.appendChild(playerScoreSpace);
    container.appendChild(comScoreSpace);
    container.appendChild(finalResultSpace);
    container.appendChild(resetButton);

}

playGame();


