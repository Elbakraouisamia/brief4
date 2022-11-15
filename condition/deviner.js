var answer;
var tries;
var attempsOutput;
var winMessage;
var itIsSmall;
var itIsBigger;
// Seize 
var lostMessage = "Game over";
var tentatives = document.getElementById("tentatives");
var message = document.getElementById("message");
//returns a random number between  1  and 50
answer = Math.floor(Math.random() * 50 );
tries =10;
function writeattempts () {
    //essayer plusier fois
    tentatives.innerHTML = tries;
}


function onSubmit(){
    --tries;
    attempsOutput = 10 - tries;

    if(tries > 0){
        var userInput = document.getElementById("deviner-input").value;

        if(isNaN(userInput) || userInput== ""){
            alert("Please Enter a Number!")
        } else {
            isCorrect(userInput)
        }
        // userInput.value = ""
    } else {
        message.innerHTML = lostMessage
        tentatives.innerHTML = 0;
    }
}

function isCorrect(userInput) {
        
     itIsSmall = "Mon numéro est inférieur" + " " + userInput + " , Essaye!"
     itIsBigger = "Mon numéro est supérieur" + " " + userInput + " , Essaye!"
        if (userInput == answer){
            if(tries >= 8){
                winMessage = 'Bravo, tu as gagné !!!'
            } else {
                winMessage = "Félicitations, tu as gagné après "  + attempsOutput + " " + "tentatives" ;
            }
            message.innerHTML = winMessage

        } else if (userInput > answer){
            message.innerHTML = itIsSmall
            writeattempts() 

        } else if (userInput < answer){
            message.innerHTML = itIsBigger
            writeattempts() 

        } 

         }