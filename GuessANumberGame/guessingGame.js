/*
Jasiah Odell
Full Stack Web Development, Fall 2025
Project 3: Guess-a-number Game
Description: A webpage that lets the user play a guess-a-number game. Using html to create a UI, css for styling, and js for functionality.
*/

(function() {
"use strict";

    let randomNumber;

    window.onload = function () {
        document.getElementById("start_button").onclick = startGame;
        document.getElementById("guess_button").onclick = checkGuess;
        setUI();
    };

    //Resfreshes the page with the starter or blank values
    function setUI() {
        document.getElementById("min").value = 1;
        document.getElementById("max").value = 10;
        document.getElementById("guesses").innerHTML = "";
        document.getElementById("guess_button").disabled = true;
        document.getElementById("start_button").disabled = false;
    }
    //Starts the game with the given values and unlocks the guess button if the values are valid
    function startGame() {
        const min = inputValidator("min");
        const max = inputValidator("max");
        document.getElementById("guess").value = "";
        document.getElementById("guesses").innerHTML = "";

        if (min > max){
            alert("Please make your maximum larger than your minimum.");
            return;
        }

        if (!Number.isNaN(min) && !Number.isNaN(max)) {
            document.getElementById("guess_button").disabled = false;
            document.getElementById("start_button").disabled = true;
        }

        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    /*Main checking logic for the game, outputs the hints or answer to the previous
    guesses area */
    function checkGuess() {
        const guess = inputValidator("guess");
        const guesses = document.getElementById("guesses");
        let message = "";

        if (guess === randomNumber){
            message = "You got it right!";
            document.getElementById("guess_button").disabled = true;
            document.getElementById("start_button").disabled = false;
        } else if (guess < randomNumber) {
            message = "It's higher than " + guess + "!";
        } else if (guess > randomNumber) {
            message = "It's lower than " + guess + "!";
        }

        guesses.innerHTML = message + "<br />" + guesses.innerHTML;
    }

    //Checks if the inputs given are numbers
    function inputValidator(id) {
        const input = document.getElementById(id).value.trim();
        const number = Number(input);
        if (!Number.isFinite(number)){
            alert("Please eneter a valid number for " + id + ".");
            return NaN;
        }
        return number;
    }
})();