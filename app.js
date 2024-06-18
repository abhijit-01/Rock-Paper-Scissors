let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = ()=>{
    let options = ["rock" , "paper" , "scissors"];
    let idx = Math.floor(Math.random()*3);
    return options[idx];
}

const showWinner = (userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!");
        msg.innerText = "You Win!!";
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose");
        msg.innerText = "You Lose!!";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice)=>{
    console.log("User choice is " , userChoice);
    const compChoice = genCompChoice();
    console.log("Comp choice is " , compChoice);
    // calculationsss

    if(userChoice === compChoice){
        console.log("The game was draw");
        msg.innerText = "Game was Drawn";
        msg.style.backgroundColor = "black";
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compChoice === "paper" ? false : true ;
        }
        else if(userChoice==="paper"){
            userWin= compChoice === "scissors" ? false : true ;
        }
        else{
            userWin = compChoice ==="rock" ? false : true ;
        }
        showWinner(userWin);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click" , ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})