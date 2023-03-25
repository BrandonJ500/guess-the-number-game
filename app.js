//prompts user to enter the lowest number
let lowerBound =  prompt("what is the lowest number?");
//prompts user to enter the highest number
let upperBound = prompt("What is the highest number?");

//variable used to change the value of the first h2
let lBound = document.querySelector("#lowerBound");
//variable used to change the value of the second h2
let uBound = document.querySelector("#upperBound");

//changes the text of the first h2 to the lower bound the user inputted
lBound.innerText = lowerBound;

//changes the text of the first h2 to the upper bound the user inputted
uBound.innerText = upperBound;

//random number generator function, min and max inclusive.
const randomNum = (x,y) => {
    min = Math.ceil(x);
    max = Math.floor(y);
     return Math.floor((Math.random()* (max-min+1) + min))
}

//holds the value of the random number
let ranNumber = randomNum(parseInt(lowerBound), parseInt(upperBound));

//select the form so we can take the value of input
const form = document.querySelector("#guess");

//selects the h2 that we are going to put the current guess in
//after each guess
const guessh2 = document.querySelector("#currentG");

//sets the value of guess to 0
let guess = 0;

//
const input = document.querySelector("input");
let numOfGuesses = 0;
const numGuess = document.querySelector("#numberOfGuesses");

   form.addEventListener('submit', (x)=> {
    x.preventDefault();
    guess = parseInt(input.value);
    input.value = "";
    if(ranNumber > guess){
        //tells the user that there guess is too high
        guessh2.innerText = `current guess is: ${guess}; number is too low`;
        // adds one to num of guesses
        numOfGuesses +=1; 

        //tells user how many guesses they've guessed 
        numGuess.innerText = `Number of guesses: ${numOfGuesses}`
    }
    else if (ranNumber < guess){
        //tells the user that there guess is too low
        guessh2.innerText = `current guess is: ${guess}; number is too high`
        // adds one to num of guesses
        numOfGuesses +=1;
         //tells user how many guesses they've guessed 
        numGuess.innerText = `Number of guesses: ${numOfGuesses}`
    }   
    else {
        //when you guess the correct number this tells you your guess
        //and what the correct number was
        guessh2.innerText = `current guess is: ${guess}; number was ${guess}, you got it!`
        // adds one to num of guesses
        numOfGuesses +=1;
         //tells user how many guesses they took
        numGuess.innerText = `It took you ${numOfGuesses} guesses!`
    } 
        

})

const reset = document.querySelector("#reset");
reset.addEventListener("click", ()=> {
//prompts user to enter the lowest number
lowerBound =  prompt("what is the lowest number?");
//prompts user to enter the highest number
upperBound = prompt("What is the highest number?");
//changes the text of the first h2 to the lower bound the user inputted
lBound.innerText = lowerBound;

ranNumber = randomNum(parseInt(lowerBound), parseInt(upperBound));

//changes the text of the first h2 to the upper bound the user inputted
uBound.innerText = upperBound;
numOfGuesses = 0;
guessh2.innerText = "";
numGuess.innerText = "";
guess = 0;



})

