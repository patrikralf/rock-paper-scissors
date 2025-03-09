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
//function randomNumber(min, max) {
//    return Math.floor(Math.random() * (4 - 1) + 1)
//}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (4 - 1) + 1)
}
const x = randomNumber(1, 3)
console.log(x)

// this returns a string depending output as computer choice 
function getComputerChoice() {
    if (x === 1 ) {
        return ("rock")
    } else if (x === 2)  {
        return ("paper")
    } else if (x === 3 ) {
        return ("scissors")
    } else {
        return (" huh? ")
    }
}

console.log(getComputerChoice())
//console.log(getComputerChoice())

// this prompts human choice
function getHumanChoice() {
    const humanChoiceGood = prompt("Your choice: ") 
        if (humanChoiceGood === ("paper")) {
            return ("paper")
        } else if (humanChoiceGood === ("rock")) { 
            return ("rock")
        } else (humanChoiceGood === ("scissors"))  
            return ("scissors")
    
}


// function initiates a round  
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    //console.log(( humanChoice + " beats " + computerChoice))
    if (humanChoice === "paper" && computerChoice === "rock" ) {
        return ( humanChoice + " beats " + computerChoice + " , you win!" )
    } else if (humanChoice === "paper" && computerChoice === "scissors" ) {
        return ( computerChoice + " beats " + humanChoice + " , you lose!" )
    } else if (humanChoice === "paper" && computerChoice === "paper" ) {
        return ( "it's a draw!" )
    
    } else if (humanChoice === "rock" && computerChoice === "paper" ) {
        return ( computerChoice + " beats " + humanChoice + " , you lose!" )
    } else if (humanChoice === "rock" && computerChoice === "scissors" ) {
        return ( humanChoice + " beats " + computerChoice + " , you win!" )
  2  } else if (humanChoice === "rock" && computerChoice === "rock" ) {
        return ( "it's a draw!")


 3  } else if (humanChoice === "scissors" && computerChoice === "rock" ) {
        return ( computerChoice + " beats " + humanChoice + " , you lose!" )
    } else if (humanChoice === "scissors" && computerChoice === "paper" ) {
        return ( humanChoice + " beats " + computerChoice )
    } else if (humanChoice === "scissors" && computerChoice === "scissors" ) {
        return ("it's a draw!")
    } else {
        return ( "never heard of that..." )
    }
}


//console.log( "computer choice is: " + getComputerChoice())
console.log(playRound(humanSelection, computerSelection))









// this prompts human choice -- scrapping this one
function getHumanChoiceForLog() {
    const humanChoiceInside = prompt("Your choice:")
    return `Your choice is : ${humanChoiceInside} ` 
 }
 

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