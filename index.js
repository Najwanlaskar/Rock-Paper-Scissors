
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){ //calls a random generated number which converts to a choice
    let ComputerChoice= null;
    let genNum = null;
   genNum = Math.floor(Math.random()* 3) + 1 ;
   console.log(genNum);

   if (genNum == 0) {
   ComputerChoice = "rock" ;
}   else if(genNum == 1){
   ComputerChoice = "paper" ;
} else {
   ComputerChoice = "scissors" ;
}
    console.log(typeof ComputerChoice);
    return ComputerChoice;
}

function getHumanChoice(){
    let HumanChoice = null;
    let input = null; 
    while (!(input=="rock"||input=="paper"||input=="scissors")){
     input= prompt("Pick one of the 3 Options listed \n (Rock, Paper or Scissors)") ;
        input = input.toLowerCase();
     HumanChoice = input.toLowerCase();}

    console.log(HumanChoice);
    console.log(typeof HumanChoice);
}

console.log("rock");