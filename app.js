let gameWon = false;

// ARRAYS:
//////////////////////////////////////////////////////////////
// Array to be looped over and populate squares. 
let numArraySquares = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Array to be randomized at the top. Have to target inner html. May have to do Interpolation. 
let codeNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//////////////////////////////////////////////////////////////








// QUERY SELECTION:
//////////////////////////////////////////////////////////////
// "Code"
let code = document.querySelector('#code')
// "Lives"
let lives = document.querySelector('#lives')
// Each of the individual boxes
let sqrs = document.querySelectorAll('.square')
// Next level button
let nextLevel = document.querySelector('#next_level')
// The "Your selection box" 
let selection = document.querySelector('.selection')
//////////////////////////////////////////////////////////////
console.log(sqrs);
console.log(selection);






// GETTING THE CODE TO RANDOMLY POPULATE:
//////////////////////////////////////////////////////////////
// Randomly generates one number
function generateOneNumber() {
    return Math.floor(Math.random() * 9) +1;
}
// Loops over "generateOneNumber()" 7 times and adds the numbers to "code"
function generateCode() {
let codeEmpty = ''
    for (let i = 0; i < 8; i++) {
        codeEmpty += generateOneNumber()
    }
    // Turns the code into an Array
    code = codeEmpty.split('')
    return code  
}
// Fixes the code to the spot at the top.
code.innerHTML = "Code: " + generateCode()
//////////////////////////////////////////////////////////////







// GETS THE SQUARES TO CHANGE CONTENTS EVERY 2 SECONDS
//////////////////////////////////////////////////////////////
function changeSquareContents() {
    for (let i = 0; i < sqrs.length; i++) {
        // loop over the array, get the index number 
        sqrs[i].innerHTML = generateOneNumber()
    }
}
setInterval(changeSquareContents, 2000);
//////////////////////////////////////////////////////////////







// When clicking a square, the innerHTML should populate "Selection"
//////////////////////////////////////////////////////////////
// You can attatch a listner to each of the squares via for loop. 
// then call a function from that listner
// the function should check what is in that square that is clicked on, and compare it to  the innerHTML of code.


function grabInnerHTMLOfSquare() {
    for (let i = 0; i < sqrs.length; i++) {
        sqrs[i].onclick =  () => {
            console.log(`Your number selection is ${sqrs[i].innerHTML}`);
        }
    }
}
grabInnerHTMLOfSquare()


// Thinking this should be in the above function because of the for loop.
// I'm habving trouble thinking about 
function checkIfEqual() {
    for (let i = 0; i < sqrs.length; i++)  {
        if (sqrs[i].innerHTML === code[i]) {
            selection.append(sqrs[i].innerHTML)
        } else {
            // add an X to "lives"
        }
        console.log(code[i])
    }
}
checkIfEqual()
// - Having trouble appending the contents.
// WHy is line 108 giving me an Undefined at the end?




//////////////////////////////////////////////////////////////







// console.log(code);
// codeNumArray Math.random









// need an IF statment for if the correct square was selected.
// Do the correct square in the IF statment by targetting the inner text and innertext === the array tracker. 

// I want the onclick function to be on the square







// AFTER BASIC GAME IS RUNNING
/////////////////////////////////////////////////////////////

// query selector for "about" button. Take the modal from the card game. 