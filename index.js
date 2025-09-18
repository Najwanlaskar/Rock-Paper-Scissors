
let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){ //calls a random generated number which converts to a choice
    let computerSelection= null;
    let genNum = null;
   genNum = Math.floor(Math.random()* 3) + 1 ;

   if (genNum == 0) {
   computerSelection = "rock" ;
}   else if(genNum == 1){
   computerSelection = "paper" ;
} else {
   computerSelection = "scissors" ;
}

   console.log(computerSelection);
    return computerSelection;
 
}

function getHumanChoice(){
    let humanSelection = null;
    let input = null; 
    while (!(input=="rock"||input=="paper"||input=="scissors")){
     input= prompt("Pick one of the 3 Options listed \n (Rock, Paper or Scissors)") ;
        input = input.toLowerCase();
     humanSelection = input.toLowerCase();}

    console.log(humanSelection);
    return humanSelection
}

function playRound(humanSelection, computerSelection){
    if (humanSelection == "paper" && computerSelection == "rock"||humanSelection == "rock" && computerSelection == "scissors"||humanSelection == "scissors" && computerSelection == "paper"){
      console.log("You have won as" + " " + humanSelection + " "+ "beats"+" " + computerSelection)
      humanScore= 1+humanScore;
    } else if (humanSelection==computerSelection){
      console.log("You have both picked the same so no one gets a point. ")
    } else {
      console.log("You have lost as" + " " + computerSelection + " "+ "beats"+" " + humanSelection)
      computerScore= 1+computerScore;

    }

}

function playGame(){
   while(!(humanScore==5||computerScore==5)){
      let i = 1;
      console.log("Round " + i )
      console.log("You have picked:");
let humanSelection = getHumanChoice();
console.log("The computer has picked:");
let computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
console.log("Your current score is "+humanScore+" "+"and the computers score is currently "+computerScore)
i++;
   }
   if(humanScore==5){
      console.log("You have Won with 5 points")
   }else{
      console.log("You have lost with " + humanScore)
   }
}
   playGame();
