let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Match was Draw."
    msg.style.backgroundColor = "#5E6472";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = `${userScore}`;
        msg.innerText = `You Win! ${userChoice} won against ${compChoice}`
        msg.style.backgroundColor = "#36BC2D";
    } else {
        compScore++;
        compScorePara.innerText = `${compScore}`;
        msg.innerText = `You Lose! ${userChoice} lost against ${compChoice}`
        msg.style.backgroundColor = "#FF3D3D";
    }
}

const playGame = (userChoice) => {
    console.log("user =", userChoice);
    const compChoice = genCompChoice();
    console.log("computer =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else if (userChoice === "scissors") {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});