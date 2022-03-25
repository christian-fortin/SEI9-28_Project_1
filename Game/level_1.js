let gameWon = false







// QUERY SELECTION:
//////////////////////////////////////////////////////////////
// "Code"
let code = document.querySelector("#code")
// "Lives"
let lives = document.querySelector("#wrongs")
// Each of the individual boxes
let sqrs = document.querySelectorAll(".square")
// Next level button
let nextLevel = document.querySelector(".next_level")
// The "Your selection box"
let selection = document.querySelector(".selection_box")
// Time
let time = document.querySelector("#actualCount")
//////////////////////////////////////////////////////////////







// GETTING THE CODE TO RANDOMLY POPULATE:
//////////////////////////////////////////////////////////////
// Randomly generates one number
function generateOneNumber() {
  return Math.floor(Math.random() * 9) + 1
}
// Loops over "generateOneNumber()" 6 times and adds the numbers to "code"
function generateCode() {
  let codeEmpty = ""
  for (let i = 0; i < 6; i++) {
    codeEmpty += generateOneNumber()
  }
  // Turns the code into an Array so that it is able to be clicked individually and returns without commas
  code = codeEmpty.split("")
  return codeEmpty
}
// Fixes the code to the spot at the top.
code.innerHTML = "Code: " + generateCode()
//////////////////////////////////////////////////////////////







// GETS THE SQUARES TO CHANGE CONTENTS
//////////////////////////////////////////////////////////////
function changeSquareContents() {
  for (let i = 0; i < sqrs.length; i++) {
    // loop over the array, get the index number and fills it with a number
    sqrs[i].innerHTML = generateOneNumber()
  }
}
// Does this every 1 second
setInterval(changeSquareContents, 1000)
//////////////////////////////////////////////////////////////







// DEPRECATED CODE: 
// // COLLECTS THE INNER-HTML OF A SQUARE ON A CLICK
// //////////////////////////////////////////////////////////////
// function grabInnerHTMLOfSquare() {
//   for (let i = 0; i < sqrs.length; i++) {
//     sqrs[i].onclick = () => {
//       console.log(`Your number selection is ${sqrs[i].innerHTML}`)
//     }
//   }
// }
// grabInnerHTMLOfSquare()
// //////////////////////////////////////////////////////////////







// TIMER:
//////////////////////////////////////////////////////////////
// Set's the timer for the level
let setInt = setInterval(function () {
  // For the timer at the top of the game, it increases every 1 second
  time.innerHTML = timeUp++
  if (time.innerHTML > 30) {
    // once it hits 30 seconds, you loose the game and are sent back to the home page
    time.innerHTML = null
    timeUp = null
    alert("YOU LOSE, YOU MUST SUCK")
    location.assign("Start_Page.html")
  }
  checkIfEqual()
}, 1000)
//////////////////////////////////////////////////////////////







// CALLING TIMER:
//////////////////////////////////////////////////////////////
// This just initiates the timer. 
let timeUp = 0
function timer() {
  setInt
}
timer()
//////////////////////////////////////////////////////////////






// COMPARISON / WIN CONDITION / TRACKER
//////////////////////////////////////////////////////////////
let codeIndex = 0;
// Set's the first click you do to the first index of the array
let wrongs = 0;
// Set's the wrongs to 0


function checkIfEqual() {
  for (let i = 0; i < sqrs.length; i++) {
    sqrs[i].onclick = () => {
      if (sqrs[i].innerHTML == code[codeIndex]) {
        // If the inner html = the code at index "x (codeIndex)"
        console.log(`Your number selection is ${sqrs[i].innerHTML}`)
        selection.innerHTML += code[codeIndex];
        // Add it to the code selection bar
        codeIndex++;
        // And move on to the next index in the array
        if (codeIndex >= code.length) {
        // Win condition
          gameWon = true;
          gameWon123();
          nextLevel.style.display = "block";
        }
      } else {
        lives.innerHTML += "X";
        // If the incorrect number is pressed, then add a 'X' to the wrongs
        wrongs++;
        console.log("Thats Wrong");
        console.log(wrongs);
        if (wrongs >= 3) {
          // loose condition and redirect
          alert("YOU LOSE");
          location.assign("Start_Page.html");
        }
      }
    }
  }
}
//////////////////////////////////////////////////////////////






// GAME WON FUNCTION:
//////////////////////////////////////////////////////////////
function gameWon123() {
  if (gameWon === true) {
    alert("YOU WON, ONTO THE NEXT LEVEL");
    clearInterval(setInt);
  }
}
//////////////////////////////////////////////////////////////
