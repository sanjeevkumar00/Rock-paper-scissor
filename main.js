const choices = document.querySelectorAll(".choices")
const score = document.querySelector("#score")
const result = document.getElementById("result")
const restart = document.getElementById("restart")
const modal = document.querySelector(".modal");
const scoreboard = {
    playuer:0,
    computer:0
}


function play(e){
restart.style.display = "inline-block"
const playerChoice = e.target.id
const computerChoice = getcomputerchioce()
const winner = getwinner(playerChoice,computerChoice);
showWinner(winner,computerChoice)

}

function getwinner(p,c){
    if(p==c){
        return 'draw';
    }else if(p=="rock"){
        if(c=="paper"){
            return 'computer'
        }else{
            return "player"
        }
    } else if(p=="paper"){
        if(c=="scissor"){
            return "computer"
            }else{
                return "player"
            }
    }else if(p=="scissors"){
        if(c=="rock"){
            return "computer";
        }else{
            return "player"
        }
    }
}


function getcomputerchioce(){
    const randomnumber = Math.random();
    if(randomnumber<0.23){
        return "rock";
    }else if(randomnumber>=0.89){
        return "paper"
    }else
    return "scissors";
}

function showWinner(winner,computerChoice){
    if(winner == "player"){
        scoreboard.player++;
     result.innerHTML = `
        <h1 class='text-win'> You Win</h1>
        <i class='fas fa-hand-${computerChoice} fa-10'></i>
     `
    }
    else if(winner == "computer++"){
        scoreboard.computer++;
        result.innerHTML = `
           <h1 class='text-Lose'> You Lose</h1>
           <i class='fas fa-hand-${computerChoice} fa-10'></i>
        `
    }else{
        result.innerHTML = `
        <h1 class='text-Lose'> It's a Draw</h1>
        <i class='fas fa-hand-${computerChoice} fa-10'></i>
        `
    }
    score.innerHTML = `
    <p>Player : ${scoreboard.player}</p>
    <p>computer : ${scoreboard.computer}</p>
    
    `
    modal.style.display = "block"
}

function clearModal(e){
    if(e.target== modal){
        modal.style.display = "none"
    }
}

function restartGame(){
    console.log('test')
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
    <p>Player : 0</p>
    <p>Computer : 0</p>
    `
}

// Event Listener
choices.forEach(function(choice){
    choice.addEventListener("click",play)
    // console.log(choice)
})

window.addEventListener("click",clearModal)
restart.addEventListener("click",restartGame)