// generates random number for computer choice 
function randomNumber(min, max) {
    return Math.floor(Math.random() * (4 - 1) + 1)
}
const x = randomNumber(1, 3)

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
// ----------------------------------------------
let newGame = alert ( 'round 1 ')
newGame

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

// function initiates a round  


function playRound(humanChoice, computerChoice) {
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
    } else if (humanChoice === "rock" && computerChoice === "rock" ) {
        return ( "it's a draw!")


   } else if (humanChoice === "scissors" && computerChoice === "rock" ) {
        return ( computerChoice + " beats " + humanChoice + " , you lose!" )
    } else if (humanChoice === "scissors" && computerChoice === "paper" ) {
        return ( humanChoice + " beats " + computerChoice )
    } else if (humanChoice === "scissors" && computerChoice === "scissors" ) {
        return ("it's a draw!")
    } else {
        return ( "never heard of that..." )
    }
}




function getHumanChoice() {    
    let humanChoiceGood = prompt('your choice: ') 
    let humanLowerCase = humanChoiceGood.toLowerCase();

    console.log(humanLowerCase)
        if (humanLowerCase === ("paper")) {
            return ("paper")
        } else if (humanLowerCase === ("rock")) { 
            return ("rock")
        } else if (humanLowerCase === ("scissors")) {
            return ("scissors")
        } else
        return ("huh");   
}

console.log(getComputerChoice())


// -------- keeping score function

let keepScoreVariable = playRound(humanSelection, computerSelection);
console.log(keepScoreVariable)

let humanScore = 0;
let computerScore = 0;


function keepScore() {
        if (keepScoreVariable === ("scissors beats paper , you lose!")) {
            return (computerScore++) + console.log(humanScore) + console.log(computerScore)
        } else if (keepScoreVariable === ("paper beats rock , you lose!")) {
            return (computerScore++) + console.log(humanScore) + console.log(computerScore)
        } else if (keepScoreVariable === ("rock beats scissors , you lose!")) {
            return (computerScore++) + console.log(humanScore) + console.log(computerScore)

        } else if (keepScoreVariable === ("rock beats scissors , you win!")) {
            return (humanScore++) + console.log(humanScore) + console.log(computerScore)
        } else if (keepScoreVariable === ("paper beats rock , you win!")) {
            return (humanScore++) + console.log(humanScore) + console.log(computerScore)
        } else if (keepScoreVariable === ("scissors beats paper , you win!")) {
            return (humanScore++) + console.log(humanScore) + console.log(computerScore)
        } else {
            return ("no points") + console.log(humanScore) + console.log(computerScore)
        }
    }
    
keepScore()





function playGameTwo() {
    alert ( "round 2" )
    let newHumanSelection = getHumanChoice()
    let humanSelection = newHumanSelection

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (4 - 1) + 1)
    }
    const x = randomNumber(1, 3)

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

    let newComputerSelection = getComputerChoice()
    computerSelection = newComputerSelection
    console.log(newComputerSelection)

    let newChoice = playRound(humanSelection, computerSelection)
    let keepScoreVariable = newChoice;
    console.log(keepScoreVariable)

    function keepScore() {
        if (newChoice === ("scissors beats paper , you lose!")) {
            return (computerScore++) + console.log(humanScore) + console.log(computerScore)
        } else if (newChoice === ("paper beats rock , you lose!")) {
            return (computerScore++) + console.log(humanScore) + console.log(computerScore)
        } else if (newChoice === ("rock beats scissors , you lose!")) {
            return (computerScore++) + console.log(humanScore) + console.log(computerScore)

        } else if (newChoice === ("rock beats scissors , you win!")) {
            return (humanScore++) + console.log(humanScore) + console.log(computerScore)
        } else if (newChoice === ("paper beats rock , you win!")) {
            return (humanScore++) + console.log(humanScore) + console.log(computerScore)
        } else if (newChoice === ("scissors beats paper , you win!")) {
            return (humanScore++) + console.log(humanScore) + console.log(computerScore)
        } else {
            return ("no points") + console.log(humanScore) + console.log(computerScore)
        }
    }
    
    keepScore()
}




function playGameThree() {
    alert ( "round 3" )
    let newHumanSelection = getHumanChoice()
    let humanSelection = newHumanSelection

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (4 - 1) + 1)
    }
    const x = randomNumber(1, 3)

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

    let newComputerSelection = getComputerChoice()
    computerSelection = newComputerSelection
    console.log(newComputerSelection)

    let newChoice = playRound(humanSelection, computerSelection)
    let keepScoreVariable = newChoice;
    console.log(keepScoreVariable)

    function keepScore() {
        if (newChoice === ("scissors beats paper , you lose!")) {
            return (computerScore++) + console.log(humanScore) + console.log(computerScore)
        } else if (newChoice === ("paper beats rock , you lose!")) {
            return (computerScore++) + console.log(humanScore) + console.log(computerScore)
        } else if (newChoice === ("rock beats scissors , you lose!")) {
            return (computerScore++) + console.log(humanScore) + console.log(computerScore)

        } else if (newChoice === ("rock beats scissors , you win!")) {
            return (humanScore++) + console.log(humanScore) + console.log(computerScore)
        } else if (newChoice === ("paper beats rock , you win!")) {
            return (humanScore++) + console.log(humanScore) + console.log(computerScore)
        } else if (newChoice === ("scissors beats paper , you win!")) {
            return (humanScore++) + console.log(humanScore) + console.log(computerScore)
        } else {
            return ("no points") + console.log(humanScore) + console.log(computerScore)
        }
    }
    
    keepScore()
}



function playGameFour() {
    alert ( "round 4" )
    let newHumanSelection = getHumanChoice()
    let humanSelection = newHumanSelection

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (4 - 1) + 1)
    }
    const x = randomNumber(1, 3)

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

    let newComputerSelection = getComputerChoice()
    computerSelection = newComputerSelection
    console.log(newComputerSelection)

    let newChoice = playRound(humanSelection, computerSelection)
    let keepScoreVariable = newChoice;
    console.log(keepScoreVariable)

    function keepScore() {
        if (newChoice === ("scissors beats paper , you lose!")) {
            return (computerScore++) + console.log(humanScore) + console.log(computerScore)
        } else if (newChoice === ("paper beats rock , you lose!")) {
            return (computerScore++) + console.log(humanScore) + console.log(computerScore)
        } else if (newChoice === ("rock beats scissors , you lose!")) {
            return (computerScore++) + console.log(humanScore) + console.log(computerScore)

        } else if (newChoice === ("rock beats scissors , you win!")) {
            return (humanScore++) + console.log(humanScore) + console.log(computerScore)
        } else if (newChoice === ("paper beats rock , you win!")) {
            return (humanScore++) + console.log(humanScore) + console.log(computerScore)
        } else if (newChoice === ("scissors beats paper , you win!")) {
            return (humanScore++) + console.log(humanScore) + console.log(computerScore)
        } else {
            return ("no points") + console.log(humanScore) + console.log(computerScore)
        }
    }
    
    keepScore()
}

function playGameFive() {
    alert ( "round 5" )
    let newHumanSelection = getHumanChoice()
    let humanSelection = newHumanSelection

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (4 - 1) + 1)
    }
    const x = randomNumber(1, 3)

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

    let newComputerSelection = getComputerChoice()
    computerSelection = newComputerSelection
    console.log(newComputerSelection)

    let newChoice = playRound(humanSelection, computerSelection)
    let keepScoreVariable = newChoice;
    console.log(keepScoreVariable)

    function keepScore() {
        if (newChoice === ("scissors beats paper , you lose!")) {
            return (computerScore++) + console.log(humanScore) + console.log(computerScore)
        } else if (newChoice === ("paper beats rock , you lose!")) {
            return (computerScore++) + console.log(humanScore) + console.log(computerScore)
        } else if (newChoice === ("rock beats scissors , you lose!")) {
            return (computerScore++) + console.log(humanScore) + console.log(computerScore)

        } else if (newChoice === ("rock beats scissors , you win!")) {
            return (humanScore++) + console.log(humanScore) + console.log(computerScore)
        } else if (newChoice === ("paper beats rock , you win!")) {
            return (humanScore++) + console.log(humanScore) + console.log(computerScore)
        } else if (newChoice === ("scissors beats paper , you win!")) {
            return (humanScore++) + console.log(humanScore) + console.log(computerScore)
        } else {
            return ("no points") + console.log(humanScore) + console.log(computerScore)
        }
    }
    
    
    keepScore()

    
    computerScore

    function winner() {
        if ( humanScore > computerScore ) {
            return ( "you win!" )
        } else if ( computerScore > humanScore ) {
                return ( "computer wins" )
            } else return ( "no one wins?" )
    }
    
    console.log(winner())
    
}

playGameTwo()
playGameThree()
playGameFour()
playGameFive()




/*
-needs to have a prompt for next round
-needs to save the current score for next round
-needs to add points based on result

*/

/*



const rock = ( "rock" );
const paper = ( "paper" );
const scissors = ( "scissors" );



/*
// this one keeps score of each round
function scoreBoard() {
    return (`Current score is:
human: ${humanScore} 
computer: ${computerScore}`)
}

console.log(scoreBoard()) */


// this outputs a number from  1 to 3
//function randomNumber(min, max) {
//    return Math.floor(Math.random() * (4 - 1) + 1)



//console.log(x)

// this returns a string depending output as computer choice 


//console.log(getComputerChoice())
//console.log(getComputerChoice())

// this prompts human choice











// play round function
//1 function starts round
//2 human is prompted to insert rock, paper or scissors
//3 computer chooses rock, paper or scissors
//4 function logs the human choice
//5 depending on the winner, a point is added to either player in a variable

// choosing winner function
//1 if/else function that returns 9 strings depending on player and computer choice
//2 answer will return a log stating the winner


// adding score function
//1 winner is decided from one of 9 if/else strings
//2 function reads the playRound() log and returns a point 





//console.log(playRound(humanSelection, computerSelection))





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
let p = "pApEr";
let y = p.slice(0, 1) 
let z = y.toUpperCase()
let q = p.slice(1) 
let t = q.toLowerCase();

let word = z + t;

function returnFirstLetterCaps() {
    return (z + t)
}

    



console.log(returnFirstLetterCaps())

*/
