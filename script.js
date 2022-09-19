// Your JavaScript goes here!

function getComputerChoice() {
    let x = Math.random(1, 3);
    if (x === 1) return "rock";
    else if (x === 2) return "paper";
    else return "scissor";
}

function getPlayerChoice() {
    const x = prompt("Rock, Paper, or Scissors? Enter 'f' to quit.: ");
    const input = x.toLowerCase();
    while (true) {

        if (input !== 'rock' || input !== 'paper' || input !== 'scissor' || input !== 'f') {
            console.log("Please enter either rock, paper, or scissors. Enter 'f' to quit.");
            const x = prompt("Rock, Paper, or Scissors? Enter 'f' to quit.: ");
            const input = x.toLowerCase();
        }
        else break;
    }
    return input;
    
}

function playRound() {

    let plrScore = 0;
    let pcScore = 0;
    
    for (let i = 0; i < 5; i++) {
        const plrChoice = getPlayerChoice();
        const pcChoice = getComputerChoice();
        
        if (plrChoice === "rock" && pcChoice === "scissor") plrScore++;

        else if (plrChoice === "scissor" && pcChoice === "paper") plrScore++;

        else if (plrChoice === "rock" && pcChoice === "scissor") plrScore++;

        else if (plrChoice === "paper" && pcChoice === "rock") plrScore++;

        else pcScore++;
    }
    console.log(`Final result. PC Score: ${pcScore}. Human Score: ${plrScore}`);
    if (plrScore > pcScore) {
        console.log("The Human wins against PC.");
    }
    else console.log("PC wins against the Human.");
}