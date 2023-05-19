function guessingGame() {
    let target = Math.floor(Math.random() * 100);
    let guesses = 0;
    let gameEnded = false;

    return function(guess) {
        guesses++;
        if (gameEnded) {
            return "The game is over, you already won!";
        } else if (guess < target) {
            return `${guess} is too low!`;
        } else if (guess > target) {
            return `${guess} is too high!`;
        } else {
            gameEnded = true;
            return `You win! You found ${target} in ${guesses} guesses.`;
        }
    };
}
 const game = guessingGame();