var p1Display = document.getElementById("p1score");
var p2Display = document.getElementById("p2score");
var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var maxPtDisplay = document.getElementById("maxPtDisplay");
var maxPtSetter = document.getElementById("maxPtSetter");
var p1 = 0;
var p2 = 0;
var gameOver = false;
var maxPt = Number(maxPtDisplay.innerHTML);

/* define event handlers */
function addPointP1() {
  if (!gameOver) {
    p1++;
    p1Display.innerHTML = p1;
  }
  if (p1 >= maxPt) {
    gameOver = true;
    p1Display.classList.add("winner");
    p2Display.classList.add("loser");
    console.log("Player One won! Add points to keep playing or reset!");
  }
}
function addPointP2() {
  if (!gameOver) {
    p2++;
    p2Display.innerHTML = p2;
  }
  if (p2 >= maxPt) {
    gameOver = true;
    p1Display.classList.add("loser");
    p2Display.classList.add("winner");
    console.log("Player Two won! Add points to keep playing or reset!");
  }
}

function resetScore() {
  p1 = 0;
  p2 = 0;
  p1Display.innerHTML = 0;
  p2Display.innerHTML = 0;
  p1Display.classList.remove("winner", "loser");
  p2Display.classList.remove("winner", "loser");
  gameOver = false;
}

function setMaxPt() {
  if (this.value < p1 || this.value < p2) {
    resetScore();
  }
  maxPtDisplay.innerHTML = this.value;
  maxPt = this.value;
}

/* add event listeners for each button */
p1Button.addEventListener("click", addPointP1);
p2Button.addEventListener("click", addPointP2);
resetButton.addEventListener("click", resetScore);
maxPtSetter.addEventListener("input", setMaxPt);
