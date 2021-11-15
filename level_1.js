
let gameWon = false;








// QUERY SELECTION:
//////////////////////////////////////////////////////////////
// "Code"
let code = document.querySelector('#code')
// "Lives"
let lives = document.querySelector('#wrongs')
// Each of the individual boxes
let sqrs = document.querySelectorAll('.square')
// Next level button
let nextLevel = document.querySelector('#next_level')
// The "Your selection box" 
let selection = document.querySelector('.selection_box')
//////////////////////////////////////////////////////////////







// GETTING THE CODE TO RANDOMLY POPULATE:
//////////////////////////////////////////////////////////////
// Randomly generates one number
function generateOneNumber() {
    return Math.floor(Math.random() * 9) +1;
}
// Loops over "generateOneNumber()" 7 times and adds the numbers to "code"
function generateCode() {
let codeEmpty = ''
    for (let i = 0; i < 7; i++) {
        codeEmpty += generateOneNumber()
    }
    // Turns the code into an Array
    code = codeEmpty.split('')
    return codeEmpty
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
setInterval(changeSquareContents, 1000);
//////////////////////////////////////////////////////////////








//////////////////////////////////////////////////////////////
function grabInnerHTMLOfSquare() {
    for (let i = 0; i < sqrs.length; i++) {
        sqrs[i].onclick =  () => {
            console.log(`Your number selection is ${sqrs[i].innerHTML}`);
        }

    }
}
grabInnerHTMLOfSquare()
//////////////////////////////////////////////////////////////





let codeIndex = 0
let wrongs = 0

function checkIfEqual() {
    for(let i = 0; i < sqrs.length; i++)  {
        sqrs[i].onclick = () => {
            if (sqrs[i].innerHTML == code[codeIndex]) {
                console.log(sqrs[i].innerHTML);
                console.log(code[codeIndex]);
                selection.innerHTML += code[codeIndex]
                codeIndex ++
                if (codeIndex >= code.length) {
                    gameWon = true
                    gameWon123()
                    nextLevel.style.display = 'block'
                }
            } else {
                lives.innerHTML += "X"
                wrongs ++
                console.log('Thats Wrong')
                console.log(wrongs);
                if (wrongs >= 3) {
                    alert ("YOU LOSE, YOU MUST SUCK")
                    location.assign('Start_Page.html')
                }
            }
        }
        
    }
}
checkIfEqual()
//////////////////////////////////////////////////////////////








// GAME WON FUNCTION:
//////////////////////////////////////////////////////////////
function gameWon123() {
if (gameWon === true) {
    alert("YOU WON")
}
}
//////////////////////////////////////////////////////////////



