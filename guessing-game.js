function guessingGame(guess) {
    let newGuess = guess;
    let randNum = Math.floor(Math.random()*100)

    if(newGuess < randNum){
        return("Your guess is less than your target number")
}
if (newGuess > randNum)
{
    return ("Your guess is more than your target number")
}else{
    return("Hooray you guessed it!!")
}
module.exports = { guessingGame };
