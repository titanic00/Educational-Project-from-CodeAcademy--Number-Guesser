let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// My code is below:
const generateTarget = () => Math.floor(Math.random() * 9);

const compareGuesses = (humanGuess, computerGuess, targetToGuess) => {
    if (Math.abs(targetToGuess - humanGuess) > Math.abs(targetToGuess - computerGuess))
        return false
    else if (Math.abs(targetToGuess - humanGuess) < Math.abs(targetToGuess - computerGuess))
        return true
    else if (Math.abs(targetToGuess - humanGuess) === Math.abs(targetToGuess - computerGuess))
        return true
}

const updateScore = winner => {
    winner === 'human' ? humanScore++ : computerScore++
}