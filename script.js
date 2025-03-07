const rock = ( "rock" );
const paper = ( "paper" );
const scissors = ( "scissors" );

let humanScore = 0;
let computerScore = 0;

// this one keeps score of each round
function scoreBoard() {
    return (`Current score is:
human: ${humanScore} 
computer: ${computerScore}`)
}

console.log(scoreBoard())


// this outputs a number from  1 to 3
function randomNumber(min, max) {
    return Math.floor(Math.random() * (4 - 1) + 1)
}


// this returns a string depending output as computer choice 
function getComputerChoice() {
    if (randomNumber() < 2 ) {
        return ("rock")
    } else if (randomNumber() > 2 ) {
        return ("paper")
    } else {
        return ("scissors")
    }
}


// this prompts human choice -- scrapping this one
function getHumanChoiceForLog() {
   const humanChoiceInside = prompt("Your choice:")
   return `Your choice is : ${humanChoiceInside} ` 
}


// this prompts human choice
function getHumanChoice() {
    const humanChoiceGood = prompt("Your choice: ")
    return `${humanChoiceGood}` ;
}


// function initiates a round  
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


function playRound(humanChoice, computerChoice) {
    alert( humanChoice + " beats " + computerChoice);
}

playRound(humanSelection, computerSelection)

/*function playRound() {
    const resultOfRound = ( "The winner is" )
    if (computerSelection === ( "rock" ) ) {
        return ( "the winner is computer")
    } else if (humanSelection === ("paper" )) {
        return ( "winner is human" )
    } else {
        return ( "winner is none" )
    }
    }
*/

//console.log(getHumanChoice())
//console.log(getComputerChoice())




// 1 2 3 4 5 6 7 8
// p a p e r - - - (5)
// r o c k - - - - (4)
// s c i s s o r s  (8)

//paper (4) beats rock (5)
// paper x rock = paper / rock x paper = paper (5) > (4)

//rock (5) beats scissors (8)
// rock x scissors = rock / scissors x rock = rock (4) > (8)

//scissors (8) beats paper (5)
// scissors x paper = scissors / paper x scissors = scissors (8) > (5)

// so i can't really do it by comparing sting length

//paper cancels paper
//rock cancels rock
//scissors cancels scissors

// 


//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

//playRound(humanSelection)


//console.log(playRound())

//console.log(playRound("bob"))


//---------------------------------







/*
// logs


console.log(getHumanChoice())
//console.log(randomNumber())
console.log(computerChoice())

console.log(humanScore)
*/













// This one checks a boolean value and returns a string
/*
let a = 1 == 1;
alert(a)

function check() {
    if (a != 1) {
        return alert("wrong answer")
    } else {
        alert("that's right")
    }
}
    

console.log(check())
*/




//This one checks boolean value via OR operator
/*
let hour = 12;

function checkHour() {
if (hour < 13 || hour > 18) {
    return ("office is open")
}
}
console.log(checkHour())
console.log(hour)

function hey(name = " Patrik") {
    console.log(`What's up ${name}`);
}


*/



// This one allows a string input of variable upper or lower letters and always returns 
// new string starting with uppercase and followed by all lowercase letters.

/*
let x = "You Already KnoW ones";
let y = x.slice(0, 1) 
let z = y.toUpperCase()
let q = x.slice(1) 
let t = q.toLowerCase();

let word = z + t;

function returnFirstLetterCaps() {
    return (z + t)
}

    



console.log(returnFirstLetterCaps())

console.log(randomNumber())*/