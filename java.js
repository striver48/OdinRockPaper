//Declaring Global Variables

let cpuRes;
let userChoice;
let newChoice;
let userWins = 0;
let computerWins = 0;
let tie = 0;
let i = 0;
let computerSelection;


//function to generate computer choice

function computerPlay(){
    let random = 0;
    random = Math.random();
    console.log(random);
    if(random <= 0.33)
    {
        computerSelection = "rock";
        return computerSelection;
    }
    else if(random >= 0.33 && random <= 0.66)
    {
        computerSelection = "paper";
        return computerSelection;
    }
    else{
        computerSelection = "scissors";
        return computerSelection;
    }
}


//function to play one round between Computer and User

function playRound(playerSelection, ComputerSelection)
{
    userChoice = prompt("Welcome to the game, Please enter your choice")
    newChoice = userChoice.toLowerCase();
    console.log(newChoice)
    if( newChoice == "")
    {
        alert( "Please enter your choice" );
        i--;
    }
    else if (newChoice != "rock" && newChoice != "paper" && newChoice != "scissors" )
    {
        alert( "Enter the correct spelling of your choice");
        i--;
    }
    else if(newChoice == computerSelection)
    {
        alert("It's a Tie");
        tie++;
    }
    else if(newChoice == "rock" && computerSelection == "paper")
    {
        alert("You Win")
        userWins++; 
    }
    else if(newChoice == "rock" && computerSelection == "scissors")
    {
        alert("Computer Wins")
        computerWins++;
    }
    else if(newChoice == "paper" && computerSelection == "rock")
    {
        alert("You Win")
        userWins++;
    }
    else if(newChoice == "paper" && computerSelection == "scissors")
    {
        alert("Computer Wins")
        computerWins++;
    }
    else if(newChoice == "scissors" && computerSelection == "paper")
    {
        alert("You Win")
        userWins++;
    }
    else if (newChoice == "scissors" && computerSelection == "rock")
    {
        alert("Computer Wins")
        computerWins++;
    }
}

 
    
//Function to play the game for 5 Rounds and decide the winner
    
function game()
{
    for(i = 0; i < 5; i++)
    {
        computerPlay();
        
        playRound();
        console.log(userWins);
        console.log(tie);
        console.log(computerWins); 
    }
    if(computerWins > userWins)
    {
        alert(`Computer wins ${computerWins} out of 5 Rounds, ${tie} matches were tied`)
    }
    else if(computerWins < userWins)
    {
        alert(`Congrats you won ${userWins} out of 5 Rounds, ${tie} matches were tied`)
    } 
    else{
        alert("The games were tied")
    }
}
