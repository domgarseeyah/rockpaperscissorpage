//Play 5 rounds of RPS in console
const choices = ['rock', 'paper', 'scissors']

function game(){

}
//Find current choices and compare to score round
function playRound(){
    const playerSelection = playerChoice()
    const computerSelection = computerChoice()
}
//Player input
function playerChoice(){
    let playerInput = prompt('Type Rock, Paper, or Scissors to play: ')
    while (playerInput == null)
        playerInput = prompt('Type Rock, Paper, or Scissors to play: ')
    playerInput = input.toLowerCase()
    let check = validateInput(playerInput)
    while (check == false){
        input = prompt('Type Rock, Paper, or Scissors to play. Spelling must be exact.')
        input = input.toLowerCase();
        check = validateUserInput(input)
    }

}
//Random Computer selection
function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)]
}

function validateUserInput(playerChoice){
    if(playerChoice.includes(choices)){
        return true;
    }
    return false;
}