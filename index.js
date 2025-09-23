
let humanScore = 0;
let computerScore = 0;
let humanSelection = null
    let computerSelection= null;

function getComputerChoice(){ //calls a random generated number which converts to a choice
    let genNum = null;
   genNum = Math.floor(Math.random()* 3) + 1 ;

   if (genNum == 1) {
   computerSelection = "rock" ;
}   else if(genNum == 2){
   computerSelection = "paper" ;
} else {
   computerSelection = "scissors" ;
}

   console.log(computerSelection);
    return computerSelection;
 
}

function getHumanChoice(){
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




const div = document.querySelector("#BtnList")

let rockBtn=document.createElement("button")
rockBtn.textContent="Rock";
rockBtn.addEventListener("click",(e)=>{
console.log("Rock clicked")
let computerSelection = getComputerChoice();
playRound("rock",computerSelection);
humanSelection="rock"
if (!document.querySelector("#playagain")) {
playgame() }
})
div.appendChild(rockBtn);


let paperBtn=document.createElement("button")
paperBtn.textContent="Paper";
paperBtn.addEventListener("click",(e)=>{
console.log("paper clicked")
let computerSelection = getComputerChoice();
humanSelection="paper"
playRound("paper",computerSelection);
if (!document.querySelector("#playagain")) {
playgame()}

})
div.appendChild(paperBtn);

let scissorsBtn=document.createElement("button")
scissorsBtn.textContent="Scissors";
scissorsBtn.addEventListener("click",(e)=>{
console.log("Scissors clicked")
let computerSelection = getComputerChoice();
playRound("scissors",computerSelection);
humanSelection="scissors"
if (!document.querySelector("#playagain")) {
playgame()}
})
div.appendChild(scissorsBtn);

let vs=document.createElement("p");
vs.textContent= "You haven't picked yet"
div.append(vs);

let PlayerScore=document.createElement("p");
PlayerScore.textContent= "Your score is current: " + humanScore

let CompScore=document.createElement("p");
CompScore.textContent= " The computers score is current: " + computerScore

div.append(PlayerScore);
div.append(CompScore);

//div for displaying running score -- humanScore and computerScore
//div for announcing winner --
//logic for 5 rounds

function playgame(){

   CompScore.textContent= " The computers score is current: " + computerScore
   PlayerScore.textContent= "Your score is current: " + humanScore
   vs.textContent= "You picked " + humanSelection + " and the Computer chose " + computerSelection

   if (humanScore==5){
      
let win=document.createElement("p");
win.textContent= "You have won with  " + humanScore + " points"
div.append(win);

let playagain = document.createElement("button");
playagain.textContent ="Play Again"
playagain.id = "playagain"; // give it an ID to detect duplicates

div.appendChild(playagain);

playagain.addEventListener("click",(e)=>{

div.removeChild(win)
humanScore=0;
computerScore =0;
div.removeChild(playagain)

})

   }else if(computerScore==5){
      let lost=document.createElement("p");
lost.textContent= "You have lost with  " + humanScore + " points"
div.append(lost);

let playagain = document.createElement("button");
playagain.textContent ="Play Again"
playagain.id = "playagain"; // give it an ID to detect duplicates

div.appendChild(playagain);

playagain.addEventListener("click",(e)=>{

div.removeChild(lost)
humanScore=0;
computerScore =0;
div.removeChild(playagain)

})
   } else { }

}
