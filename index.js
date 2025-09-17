
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let ComputerChoice= null;
    let genNum = null;
   genNum = Math.floor(Math.random()* 3) + 1 ;
   console.log(genNum);

   if (genNum == 0) {
   ComputerChoice = "Rock" ;
}   else if(genNum == 1){
   ComputerChoice = "paper" ;
} else {
   ComputerChoice = "Scissors" ;
}
    return ComputerChoice;
}