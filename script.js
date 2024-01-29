"use strict";

window.addEventListener("load", start)

function start(){
    console.log("Javascript running!");
}

const secretNumber = Math.floor(Math.random() * 100) + 1;
//const secretNumber = 42
let attempts = 0;

const checkGuessBtn = document.getElementById("CheckGuess");
const responseP = document.getElementById("response")
const playAgainBtn = document.getElementById("PlayAgain")

checkGuessBtn.addEventListener("click",() => checkGuess())
playAgainBtn.addEventListener("click", () => {
    location.reload();
    }
)

function checkGuess() {
    const userGuess = document.getElementById("userGuess")
    const userGuessValue = parseInt(userGuess.value);
    userGuess.value = "";
    attempts++;

    if (userGuessValue === secretNumber) {
        responseP.innerHTML = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`;
        responseP.style.color = "green";
        document.getElementById("userGuess").setAttribute("disabled", true);
        playAgainBtn.style.visibility = "visible"
    } else {
        let message;
        if (userGuessValue < secretNumber) {
            message = "Too low. Try again!";
            guessToLow(userGuessValue)
        } else {
            message = "Too high. Try again!";
            guessToHigh(userGuessValue)
        }
        responseP.innerHTML = message;
        responseP.style.color = "red";
    }
}

function guessToHigh(userGuess){
    console.log("high")
    const list = document.getElementById("GuessList")
    const html = `<li>You guessed the number ${userGuess} Too high. Try again!</li>`;
    list.insertAdjacentHTML("beforeend", html);
}

function guessToLow(userGuess){
    console.log("high")
    const list = document.getElementById("GuessList")
    const html = `<li>You guessed the number ${userGuess} Too Low. Try again!</li>`;
    list.insertAdjacentHTML("beforeend", html);
}