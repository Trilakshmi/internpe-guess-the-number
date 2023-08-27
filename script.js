let gameResult=document.getElementById("gameResult");
let userInput=document.getElementById("userInput");
let randomNumber=Math.ceil(Math.random()*200);

function checkGuess(){
    let guessedNumber=parseInt(userInput.value);
    if(guessedNumber>randomNumber){
        gameResult.textContent="Too High! Try Again";
        gameResult.style.backgroundColor = "#a9cc1d";
    }
    else if(guessedNumber<randomNumber){
        gameResult.textContent="Too Low! Try Again";
        gameResult.style.backgroundColor="#a9cc1d";
    }
    else if(guessedNumber===randomNumber){
        gameResult.textContent="Congratulations! You got it right.";
        gameResult.style.backgroundColor="green";
    }
    else{
        gameResult.textContent = "Please provide a valid input.";
        gameResult.style.backgroundColor = "red";
    }
}