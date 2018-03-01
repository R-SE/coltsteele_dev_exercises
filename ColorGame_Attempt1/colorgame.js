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
  var pickedId = Math.floor(Math.random() * num);
  return document.getElementById(pickedId);
}

function newColors() {
  newGame(setDifficulty);
}

function newGame(difficulty) {
  resultsDisplay.innerHTML = "";
  console.log(`Difficulty is ${difficulty}`);                           //remove line after finished with testing
for (let i = 0; i < difficulty; i++) {
  squares[i].style.pointerEvents = "visible";
  // debugger;
  squares[i].classList.toggle("flipped");
  squares[i].style.backgroundColor = generateColor();
  console.log(squares[i].style.backgroundColor);
}
  // for (let i = 0; i < squares.length; i++) {
  //   squares[i].style.backgroundColor = generateColor();
  //   squares[i].classList.toggle("flipped");
  // }
  var pickedSquare = pickSquare(difficulty);
  console.log(pickedSquare);
  var pickedColor = window.getComputedStyle(pickedSquare).getPropertyValue('background-color');
  console.log(`Picked color is ${pickedColor}`);
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
    console.log(squareColor);
    resultsDisplay.innerHTML = "Try again...";
    this.classList.add("hidden");
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

newGame(3);
