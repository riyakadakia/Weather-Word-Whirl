console.log("testing js");


// ----- Variables ------
// Stores word user needs to guess and word user guesses
let finalWord = "apple";
finalWord = (finalWord.split(""));
let userWord;
var attemptsLeft = 6;



//var letterOne = text.charAt(0)




// ------ Functions ------
   //A function that gets user's word
function submitButton() { 
//Checks if user's word is less than 5. Displays error if not. 
   userWord = document.getElementById("one").value;
   var errorText = document.getElementById("lessThan5");   
   if(userWord.length<5) {
       errorText.style.display = "block";
       console.log ("put a word with five letters");
       return;
   }
   else if(attemptsLeft<0) {
       document.getElementById("restarButton").style.display = "block";
       return;
   }
   else{
       //Hides error text and removes users Attempts
       errorText.style.display = "none";
       attemptsLeft = attemptsLeft - 1; 
       console.log(attemptsLeft);


       //Splits users guess up and displays it
       userWord = (userWord).split("");
       console.log(userWord);
       document.getElementById("userGuess").innerHTML = userWord.join('');
      


       //Checks if letters are correct
      // checkLetters();
   }


}


function initBoard() {
   let board = document.getElementById("game-board").split("");


   for (let i = 0; i < 6; i++) {
       let row = document.createElement("div")
       row.className = "letter-row"
      
       for (let j = 0; j < 5; j++) {
           let box = document.createElement("div")
           box.className = "letter-box"
           row.appendChild(box)
       }


       board.appendChild(row)
   }
}


initBoard()


//A function that compares finalWord with userGuess to check if the values are correct
function checkLetters(){
   // Checking if the letters of the userWord corresponds with the letters of finalWord 
   for (var i = 0; userWord.length > i; i++) {
       if(userWord[i]==(finalWord[i])) {
           //turn letter green
          
       } else if(finalWord.includes(userWord[i])) {
           //turn letter yellow
       } else {
           //no change
       }
   }
   if (attemptsLeft == 0) {
      
   }
}


function checkWord()
{
   let correct = true;
   for(let i=0; i<userWord.length; i++)
   {
       if(!(userWord[i]==finalWord[i]))
       {
           correct = false;
       }
   }
   if(correct == true)
   {
       //Game over
   }
   else
   {
       //next part
   }
}


function restart()
{
   attemptsLeft = 6;
}
