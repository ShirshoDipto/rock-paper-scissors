// Your JavaScript goes here!

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    if (x === 0) return "rock";
    else if (x === 1) return "paper";
    else return "scissor";
}

function getPlayerChoice() {
    let x = prompt("Rock, Paper, or Scissors? Enter 'f' to quit.: ");
    let input = x.toLowerCase();
    while (true) {

        if (input === 'rock' || input === 'paper' || input === 'scissor' || input === 'f') {
            break;
        }
        else {
            console.log("Please enter either rock, paper, or scissor. Enter 'f' to quit.");
            x = prompt("Rock, Paper, or Scissors? Enter 'f' to quit.: ");
            input = x.toLowerCase();
        }
    }
    return input;
    
}

function printFinalResult(plrChoice, plrScore, pcScore) {
    if (plrChoice === 'f') {
        console.log("The pathetic human who can't even bring the courage to play a simple game like rock paper scissor just FORFEITED");
        console.log("The PC wins");
    }
    else {
        console.log(`\nFinal result: \n\t
        Human: ${plrScore}\n\t
        PC: ${pcScore}`);
        if (plrScore > pcScore) {
            console.log(`\nThe Human wins.`);
        }
        else {
            console.log("\nThe PC wins.")
        }
    }
}

function playGame() {

    let plrScore = 0;
    let pcScore = 0;
    let plrChoice;
    let pcChoice;
    
    for (let i = 0; i < 5; i++) {
        plrChoice = getPlayerChoice();
        pcChoice = getComputerChoice();
        
        if (plrChoice === 'f') break;

        else {
            if (plrChoice === "rock" && pcChoice === "scissor") {
                plrScore++;
                console.log(`You choose "${plrChoice}" and PC choose "${pcChoice}". You win this round.`);
            } 
    
            else if (plrChoice === "scissor" && pcChoice === "paper") {
                plrScore++;
                console.log(`You choose "${plrChoice}" and PC choose "${pcChoice}". You win this round.`);
            }
    
            else if (plrChoice === "rock" && pcChoice === "scissor") {
                plrScore++;
                console.log(`You choose "${plrChoice}" and PC choose "${pcChoice}". You win this round.`);
    
            }
    
            else if (plrChoice === "paper" && pcChoice === "rock") {
                plrScore++;
                console.log(`You choose "${plrChoice}" and PC choose "${pcChoice}". You win this round.`);
                
            }

            else if (plrChoice === pcChoice) {
                console.log(`You choose "${plrChoice}" and PC choose "${pcChoice}". Play the round again.`);
                i--;
            }
    
            else {
                pcScore++;
                console.log(`You choose "${plrChoice}" and PC choose "${pcChoice}". PC wins this round.`);
            }
        }
    }
    printFinalResult(plrChoice, plrScore, pcScore);
}