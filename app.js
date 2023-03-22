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

const randomNum = (x,y) => {
    min = Math.ceil(x);
    max = Math.floor(y);
     return Math.floor((Math.random()* (max-min+1) + min))
}
const ranNumber = randomNum(parseInt(lowerBound), parseInt(upperBound));
const form = document.querySelector("#guess");
const guessh2 = document.querySelector("#currentG");

let guess = 0;


const input = document.querySelector("input");


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

