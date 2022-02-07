let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// My code is below:
const generateTarget = () => Math.floor(Math.random() * 9);

const compareGuesses = (humanGuess, computerGuess, targetToGuess) => {
    if ((targetToGuess - humanGuess) < (computerGuess - targetGuess))
        return true
    else if ((targetToGuess - humanGuess) > (targetToGuess - computerGuess))
        return false
    else
        return true
}