var player1 = document.getElementById("p1");
var player2 = document.getElementById("p2");
var reset = document.getElementById("reset");
var maxPtSetter = document.getElementById("maxPtSetter");
var playingToNum = document.getElementById("playingToNum");
var maxPts = Number(playingToNum.innerHTML);
var p1score = document.getElementById("p1score");
var p2score = document.getElementById("p2score");

function addPoint() {
  var p1Current = Number(p1score.innerHTML);
  var p2Current = Number(p2score.innerHTML);
  var numReached = !(p1Current < maxPts && p2Current < maxPts);
  if (!numReached) {
    var player;
    this.innerHTML === "Player One"
    ? player = p1score
    : player = p2score;
    player.innerHTML = Number(player.innerHTML) + 1;
  } else {
    var winner;
    p1Current > p2Current ?
      winner = "Player One" :
      winner = "Player Two" ;
    alert(`${winner} won! Increase the max points to continue playing, or reset.`);
  }
}
//issue: the winner alert only triggers upon clicking again after the max is reached


function resetScore() {
  p1score.innerHTML = "0";
  p2score.innerHTML = "0";
}

function maxPtUpdate() {
  playingToNum.innerHTML = maxPtSetter.value;
  maxPts = maxPtSetter.value;
}

player1.addEventListener("click", addPoint);
player2.addEventListener("click", addPoint);
reset.addEventListener("click", resetScore);
maxPtSetter.addEventListener("input", maxPtUpdate);


//was messing with callback functions down here to try to figure out a cleaner solution

// function numReached() {
//   var p1Current = Number(p1score.innerHTML);
//   var p2Current = Number(p2score.innerHTML);
//   return !(p1Current < maxPts && p2Current < maxPts);
// }
//
// function addPoint(callbackFunc) {
//   var numReached = callbackFunc;
//   if (numReached) {
//     console.log("reach");
//       var player;
//       this.innerHTML === "Player One"
//       ? player = p1score
//       : player = p2score;
//       player.innerHTML = Number(player.innerHTML) + 1;
//     }
// }
