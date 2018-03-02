var colorTitle = document.getElementById("color");
var resultsDisplay = document.getElementById("result");
var header = document.getElementsByTagName("header")[0];
var squares = document.getElementsByClassName("square");
var easySquares = Array.from(document.getElementsByClassName("easy"));
var medSquares = Array.from(document.getElementsByClassName("medium"));
var hardSquares = Array.from(document.getElementsByClassName("hard"));
var reset = document.querySelector('[value="newColors"]');
var easyDiff = document.querySelector('[value="easy"]');
var mediumDiff = document.querySelector('[value="medium"]');
var hardDiff = document.querySelector('[value="hard"]');
var setDifficulty = 3;

function generateColor() {
  var hexValue1 = Math.floor(Math.random() * 255) + 1;
  var hexValue2 = Math.floor(Math.random() * 255) + 1;
  var hexValue3 = Math.floor(Math.random() * 255) + 1;
  var color = `rgb(${hexValue1}, ${hexValue2}, ${hexValue3})`;
  return color;
}

function pickSquare(num) {
  // var pickedId = Math.floor(Math.random() * num);
  // return document.getElementById(pickedId);
  return Math.floor(Math.random() * num);
}

function newColors() {
  switch(setDifficulty) {
    case 3:
      activateEasy();
      break;
    case 6:
      activateMedium();
      break;
    case 9:
      activateHard();
      break;
    default:
      activateEasy();
  }
}

function resetStyles() {
  resultsDisplay.innerHTML = "";
  header.removeAttribute("style");
}

function newGame(difficulty) {
  var squares = document.getElementsByClassName("square");
  resetStyles();
for (let i = 0; i < difficulty; i++) {
  squares[i].style.pointerEvents = "visible";
  // debugger;
  squares[i].classList.toggle("flipped");
  squares[i].style.backgroundColor = generateColor();
}
  var pickedSquareId = pickSquare(difficulty);
  var pickedSquare = document.getElementById(pickedSquareId);
  // var pickedSquare = pickSquare(difficulty);
  var pickedColor = pickedSquare.style.backgroundColor;
  // console.log(pickedSquare);  --small quirk here that shows the div of the square has having a bg-color attribute of the previous winning square, but doesn't affect the gameplay;
  // console.log(pickedColor);
  // var pickedColor = window.getComputedStyle(pickedSquare).getPropertyValue('background-color');
  colorTitle.innerHTML = pickedColor;
}

function checkWin() {
  var squareColor = window.getComputedStyle(this).getPropertyValue('background-color');
  var colorToMatch = colorTitle.innerHTML;
  if (squareColor === colorToMatch) {
    resultsDisplay.innerHTML = "YOU WIN!";
    header.style.backgroundColor = squareColor;
    Array.from(squares).forEach(function setColor(e){
      e.style.backgroundColor = squareColor;
      e.style.pointerEvents = "none";
    });
    colorTitle.innerHTML = `You found ${squareColor}. Start a new game!`;
  } else {
    resultsDisplay.innerHTML = "Try again...";
    this.classList.replace("visible", "hidden");
  }
}

function activateEasy() {
  setDifficulty = 3;
  newGame(3);
  easySquares.forEach(function unhide(e) {
    e.classList.add("visible");
  });
  medSquares.forEach(function hide(e) {
    e.classList.replace("visible", "hidden");
  });
  hardSquares.forEach(function hide(e) {
    e.classList.replace("visible", "hidden");
  });
}

function activateMedium() {
  setDifficulty = 6;
  newGame(6);
  easySquares.forEach(function unhide(e) {
    e.classList.add("visible");
  });
  medSquares.forEach(function unhide(e) {
    e.classList.replace("hidden", "visible");
  });
  hardSquares.forEach(function hide(e) {
    e.classList.replace("visible", "hidden");
  });
}

function activateHard() {
  setDifficulty = 9;
  newGame(9);
  easySquares.forEach(function unhide(e) {
    e.classList.add("visible");
  });
  medSquares.forEach(function unhide(e) {
    e.classList.replace("hidden", "visible");
  });
  hardSquares.forEach(function unhide(e) {
    e.classList.replace("hidden", "visible");
  });
}

reset.addEventListener("click", newColors);
easyDiff.addEventListener("click", activateEasy);
mediumDiff.addEventListener("click", activateMedium);
hardDiff.addEventListener("click", activateHard);

Array.from(squares).forEach(function(e){
  e.addEventListener("click", checkWin);
});

activateEasy();
