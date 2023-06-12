function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase
    if (playerSelection === "rock" && computerSelection === "scissor"){
        return "You win!";
    } else if(playerSelection === "scissor" && computerSelection === "rock" ){
        return "You lose! rock beats scissor";       
    }         
    
    if (playerSelection === "scissor" && computerSelection === "paper" ){
        return "You win!";
    } else if(playerSelection === "paper" && computerSelection === "scissor" ){
        return "You lose! scissor beats rock";       
    }    

    if (playerSelection === "paper" && computerSelection === "rock" ){
        return "You win!";
    } else if(playerSelection === "rock" && computerSelection === "paper" ){
        return "You lose! paper beats rock";       
    }    
    
    return "It's a draw!";
}


let playerSelection = prompt("What do you choose? Rock, Paper or Scissor?: ")
let computerSelection = getComputerChoice()