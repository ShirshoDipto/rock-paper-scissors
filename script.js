// Your JavaScript goes here!

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    if (x === 0) return "rock";
    else if (x === 1) return "paper";
    else return "scissor";
}

function printFinalResult(plrChoice, plrScore, pcScore) {
    const finalScore = document.querySelector('.finalScore');
    console.log(finalScore);

    if (plrScore > pcScore) {
        finalScore.textContent = `Final Score: YOU = ${plrScore}, Computer = ${pcScore}. You WIN!`
    }
    else {
        finalScore.textContent = `Final Score: YOU = ${plrScore}, Computer = ${pcScore}. Computer WINS!`
    }
}

function playRound(playerSelection, computerSelection) {

    let scoresAndMsg = ["", 0, 0];

    if (playerSelection === "rock" && computerSelection === "scissor") {
        const msg = `You choose "${playerSelection}" and PC choose "${computerSelection}". You win this round.`
        scoresAndMsg[0] = msg;
        scoresAndMsg[1] = 1;
        scoresAndMsg[2] = 0;
    } 

    else if (playerSelection === "scissor" && computerSelection === "paper") {
        const msg = `You choose "${playerSelection}" and PC choose "${computerSelection}". You win this round.`
        scoresAndMsg[0] = msg;
        scoresAndMsg[1] = 1;
        scoresAndMsg[2] = 0;
    }

    else if (playerSelection === "rock" && computerSelection === "scissor") {
        const msg = `You choose "${playerSelection}" and PC choose "${computerSelection}". You win this round.`
        scoresAndMsg[0] = msg;
        scoresAndMsg[1] = 1;
        scoresAndMsg[2] = 0;
    }

    else if (playerSelection === "paper" && computerSelection === "rock") {
        const msg = `You choose "${playerSelection}" and PC choose "${computerSelection}". You win this round.`
        scoresAndMsg[0] = msg;
        scoresAndMsg[1] = 1;
        scoresAndMsg[2] = 0;
    }

    else if (playerSelection === computerSelection) {
        const msg = `You choose "${playerSelection}" and PC choose "${computerSelection}". Play the round again.`
        scoresAndMsg[0] = msg;
    }

    else {
        const msg = `You choose "${playerSelection}" and PC choose "${computerSelection}". PC wins this round.`
        scoresAndMsg[0] = msg;
        scoresAndMsg[1] = 0;
        scoresAndMsg[2] = 1;
    }
    return scoresAndMsg;
}

const buttons = document.querySelectorAll('button');
const main = document.querySelector('.main');
const dialogue = document.querySelector('.printDialogue');
const plrscore = document.querySelector('.plrscore');
const pcscore = document.querySelector('.pcscore');


let plrScore = 0;
let pcScore = 0;
let plrChoice;
let pcChoice;

function playGame(e) {

    console.log(e);
    if (plrScore < 5 && pcScore < 5) {
        plrChoice = this.className;
        pcChoice = getComputerChoice();
        const scoreMsg = playRound(plrChoice, pcChoice);
        plrScore += scoreMsg[1];
        pcScore += scoreMsg[2];

        // print text after one round
        dialogue.textContent = scoreMsg[0];
        plrscore.textContent = `Player Score: ${plrScore}`;
        pcscore.textContent = `Computer Score: ${pcScore}`;
    }
    else if (plrScore === 5 || pcScore === 5) {
        printFinalResult(plrChoice, plrScore, pcScore);
        this.removeEventListener('click', playGame);
        const btn = document.createElement('button');
        console.log(btn)
        btn.classList.toggle('playAgain');
        btn.textContent = 'Play Again?'
        const body = document.querySelector('.bod');
        body.appendChild(btn);

    }
}

buttons.forEach((button) => {
    button.addEventListener('click', playGame);
});








