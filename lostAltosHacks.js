console.log("testing js");

// ----- Variables ------
// Stores word user needs to guess and word user guesses
    //Dataset of Words with their defintions
var wordArray = ["flood","cloud","windy","slush","radar","sleet","smoke","storm","sunny","vapor","water","light","balmy","frost","rainy","humid", "snowy", "solar"];
var defArray = ["Lots of water","Lots of gas","Gas moves fast","snow partially melted","detects type of precipitation","ice pellets","gray gas","strong wind, rain, and lightning","bright; sun is out","liquid particles","clear liquid that we drink","bright outside","pleasantly warm","small, frozen ice crystals","lots of droplets of water","lots of water vapor in the air", "frozen water", "sun sun sun"];
var funArray = ["Involved with 90% of natural disasters", "Clouds can turn green in thunderstorms", "It is windier near the coasts", "You can eat slush!", "RADAR stands for radio detection and ranging", "Careful for black ice while driving!", "Inhaling smoke can be dangerous for the lungs", "Storms can come in many shapes and sizes!", "Don't stare at the sun for too long or you'll be blinded!", "The steam that comes out of boiled water is vapor!", "Water has both H2O and minerals; pure H2O will kill you!", "Darkness is the absence of light!", "Balmy weather we're having!", "The word frost is derived from the world 'old' because it looks like old hair",  "Raindrops are shaped like hamburger buns.", "tropical areas are more humid!", "Snow will only create at temperatures below 32 degrees Celcieus", 'Solar Energey is very potent']; 
         // Gets random word and definition
const randomNum = Math.floor(Math.random() * wordArray.length);
let finalWord = wordArray[randomNum];
var finalWordDef = defArray[randomNum];
var finalWordFun = funArray[randomNum];
finalWord = (finalWord.split(""));
console.log(finalWord);
var greenLetters = 0;
var yellowLetters = 0;
var blackLetters = 0;
let userWord; 
var attemptsLeft = 6;

/* var audio = new Audio("epic-storm-thunder-rainwindwaves-no-loops-106800.mp3");
audio.play(); */
// :3
// ------ Functions ------
    //A function that gets user's word
function submitButton() {  
    console.log(attemptsLeft);
    //User's word stored in userWord
    userWord = document.getElementById("textbox").value;
    //Error text (Only used if user inputs invalid response)
    var errorText = document.getElementById("lessThan5");   
    if(userWord.length<5) {
        errorText.style.display = "block";
        console.log ("put a word with five letters");
        return;
    }

    //if User loses, displays restart button (restart function below)
    else if(attemptsLeft<=1) {;
        var att = document.getElementById("restartButton");
        att.style.display = "block";
        return;
    } 
    //User gives word with 5 letter and runs through verifiction
    else{
        // Puts userWord inside of the userGuess element (the square box)
        var guess = document.getElementById("userGuess");
       var section = document.getElementById("setOfGuesses");
       const clone = guess.cloneNode(true);
       const space = document.createElement("br");
       //bug here!!! order of user guesses incorrect
       section.appendChild(clone);
       section.appendChild(space);
       //Hides error text and removes users Attempts
       errorText.style.display = "none";
       attemptsLeft = attemptsLeft - 1; 


       //Splits "users guess" up and displays the users guess
       userWord = (userWord).split("");
       for (let i = 0; i < 5; i++){
           document.getElementById('letter' + i).innerHTML = userWord[i];
       }
 

        //Splits "users guess" up and displays the users guess

        //Checks if letters are correct
       checkLetters();
       checkWord();
    }

}

//A function that compares finalWord with userGuess to check if the values are correct
function checkLetters(){
    // Checking if the letters of the userWord corresponds with the letters of finalWord  
    greenLetters = 0;
    yellowLetters = 0;
    blackLetters = 0;
    for (var i = 0; userWord.length > i; i++) {
        if(userWord[i]==(finalWord[i])) { 
            //turn letter green
            document.getElementById("letter"+i).style.color = "green";
            greenLetters++;
        } else if(finalWord.includes(userWord[i])) {
            //turn letter yellow
            document.getElementById("letter"+i).style.color = "yellow";
            yellowLetters++;
            
        } else { 
            document.getElementById("letter"+i).style.color = "black";
            blackLetters = blackLetters +1;
            //no change
        }
    }
   
    background();
    
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
        console.log("definition");
        document.getElementById("definition").innerHTML = finalWordDef;
        (document.getElementById("definition")).style.display = "block";
        var att = document.getElementById("restartButton");
        att.style.display = "block";

        document.getElementById("fun").innerHTML = finalWordFun;
        (document.getElementById("fun")).style.display = "block";

        return;
    }
    else
    {
        //next part
    }
}


function restart()
{
    attemptsLeft = 6;
    //setOfGuesses.replaceChildren();
    //definition.replaceChildren();
    
    document. location. reload();
    
    //if time allows --> clear the input textbox
}

function background () {
    console.log("yellow:"+yellowLetters);
    console.log("green:"+greenLetters);
    
    if (greenLetters == 5) {
        
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/5241874/pexels-photo-5241874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
        document.getElementById('bg-music').setAttribute('src', 'birds-19624.mp3');
        return;
        //show sunny.jpeg
      } else if (greenLetters == 4) {
        console.log("sunny and Cloudy 4 green");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/34227/sky-clouds-nature-clouds-sky.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
        document.getElementById('bg-music').setAttribute('src', 'wheat-in-the-wind-7159.mp3');
        return;
        //show sunnyAndCloudy.jpeg
      } else if (greenLetters == 3) {
        console.log("sunny and rainbow 3 green");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/12494981/pexels-photo-12494981.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
        document.getElementById('bg-music').setAttribute('src', 'forest_cicada_loop-6031.mp3');
        return;
        //show sunAndRainbow.jpeg
      } else if (greenLetters == 2) {
        console.log("Cloudy 2 green");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
        document.getElementById('bg-music').setAttribute('src', 'a-gentle-breeze-wind-4-14681.mp3');
        return;
        //show cloudy.jpe
      } else if (greenLetters == 1) {
        console.log("Drizzle 1 green");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/14319807/pexels-photo-14319807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
        document.getElementById('bg-music').setAttribute('src', 'light-rain-ambient-114354.mp3');
        return;
        //show drizzle.jpeg
      } else if (yellowLetters >= 1) {
        console.log("inside yellow:"+yellowLetters);
        console.log ("rainy 1 yellow")
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/3178798/pexels-photo-3178798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
        document.getElementById('bg-music').setAttribute('src', 'heavy-rain-nature-sounds-8186.mp3');
        return;
        //show rain.jpeg
      } else {
        //show storm.jpeg
        console.log ("storm, no yellow or green");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
        document.getElementById('bg-music').setAttribute('src', 'epic-storm-thunder-rainwindwaves-no-loops-106800.mp3');
        return;
      }
}

function Play(){
    let audio = document.getElementById('bg-music');
    if(audio.paused){
        audio.play();
        stopAudio = false;
    }else{
        audio.pause();
        stopAudio = true;
    }
}