var wins = 0;
var losses = 0;
var guessCount = 10;
var previousGuesses = [];



var cpu = generateRandomNumber()
document.onkeyup = function (event) {

    var userInput = event.key.toLowerCase();

    if ((event.keyCode < 65 || event.keyCode > 90) && (event.keyCode < 97 || event.keyCode > 122)) {
        alert("INVALID KEY")
        return
    }

    if (previousGuesses.includes(" " + event.key)) {
        alert("Duplicate Key")
        return
    }
       
   

    if (event.keyCode !== cpu) {
        guessCount--;
        previousGuesses.push(" " + userInput );
        alert("Please Try Again")
    }

    if (guessCount <= 0) {
        losses++;
        cpu = generateRandomNumber()
        guessCount = 10;
        previousGuesses =[];
        alert("Looser")
    }

    if (event.keyCode === cpu) {
        wins++;
        cpu = generateRandomNumber()
        alert("Winner Winner Chicken Dinner")


    }


    document.getElementById("wins").innerHTML = "wins:" + wins;
    document.getElementById("losses").innerHTML = "losses: " + losses;
    document.getElementById("guessLeft").innerHTML = "guesses left: " + guessCount;
    document.getElementById("guessfar").innerHTML = "guesses far: " + previousGuesses;

}




function generateRandomNumber(){
    return (Math.floor(Math.random() * 25)) + 65
}