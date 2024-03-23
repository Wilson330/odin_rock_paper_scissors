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
    let winPlayer = 0;
    let winCom = 0;
    for(let i = 1;i < 6;i++){
        console.log("Round " + i +", let's go!")
        let playerSelection = prompt("Input your choice!");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        if(result == "win"){
            winPlayer++;
            console.log("You Win! " + playerSelection.toLowerCase() + " beats " + computerSelection);
        }
        else if(result == "lose"){
            winCom++;
            console.log("You Lose! " + computerSelection + " beats " + playerSelection.toLowerCase());
        }
        else{
            console.log("It's tie!");
        }
    }
    if(winPlayer > winCom){
        console.log("You are the final winner. Congratulations!")
    }
    else if(winPlayer < winCom){
        console.log("Computer is the final winner. Never mind!")
    }
    else{
        console.log("The game ended in a tie. Try it again!")
    }

}

playGame();