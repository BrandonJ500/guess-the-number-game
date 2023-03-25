//prompts user to enter the lowest number
const lowerBound =  prompt("what is the lowest number?");
//prompts user to enter the highest number
const upperBound = prompt("What is the highest number?");

//variable used to change the value of the first h2
const lBound = document.querySelector("#lowerBound");
//variable used to change the value of the second h2
const uBound = document.querySelector("#upperBound");

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
const ranNumber = randomNum(parseInt(lowerBound), parseInt(upperBound));

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

   form.addEventListener('submit', (x)=> {
    x.preventDefault();
    guess = parseInt(input.value);
    input.value = "";
    if(ranNumber > guess){
        guessh2.innerText = `current guess is: ${guess}; number is too low`
    }
    else if (ranNumber < guess){
        guessh2.innerText = `current guess is: ${guess}; number is too high`
    }
    else {
        guessh2.innerText = `current guess is: ${guess}; number was ${guess}, you got it!`
    } 
    

})

