function stalk() {
  var firstName = prompt("What's your first name?");
  var lastName = prompt("What's your last name?");
  var age = prompt("Age?");
  console.log(`Your name is ${firstName} ${lastName}.`);
  console.log(`You're ${age} years old.`)
}

function calcDaysConsole() {
  var now = new Date();
  var birthMonth = prompt("What month were you born?");
  var birthDay = prompt("What day of the month were you born?");
  var birthYear = prompt("What year were you born?");
  var birthDateConcat = `${birthMonth} ${birthDay}, ${birthYear}`;
  var birthDate = new Date(birthDateConcat);
  var diffMS = now.getTime() - birthDate.getTime();
  var days = Math.floor(diffMS / (1000 * 60 * 60 * 24));
  var years = Math.floor(days / 365);
  console.log(`It has been ${days} days since you were born. This means you are ${years} years old.`)
}

function calcDays() {
  var now = new Date();
  var birthMonth = document.getElementById("month").value;
  var birthDay = document.getElementById("day").value;
  var birthYear = document.getElementById("year").value;
  var birthDateConcat = `${birthMonth} ${birthDay}, ${birthYear}`;
  var birthDate = new Date(birthDateConcat);
  var diffMS = now.getTime() - birthDate.getTime();
  var days = Math.floor(diffMS / (1000 * 60 * 60 * 24));
  var years = Math.floor(days / 365);
  var message = `It has been ${days} days since you were born. This means you are ${years} years old.`;
  document.getElementById("results").innerHTML = message;
}
// document.getElementById("calc").onsubmit = calcDays;

function ageGame() {
  var ageInput = prompt("Age?");
  var ageOutput = document.getElementById('ageGameResults');
  var perfSquares = [1,9,16,25,36,49,64,81,100,121,144];
  if (ageInput < 0) {
    alert("How did you do that? The input should've validated!");
  }
  if (ageInput === 21) {
    alert("Happy 21st!");
  } else if (ageInput % 2 === 1) {
    alert("You've aged oddly!");
  } else {
    perfSquares.forEach(function(e) {
      if (ageInput == e) {
        alert("hip to be square!");
      }
    });
  }
}

function numberGuess() {
  var secretNum = Math.floor((10 * Math.random()) + 1);
  var inputNum = parseInt(prompt("Guess a number from 1 through 10"));
  if (secretNum === inputNum) {
    alert("How'd you know?!");
  } else if (secretNum > inputNum) {
    alert("The secret number is actually higher...")
  } else {
    alert("The secret number is lower!");
  }
}

/* LOOPS PROBLEM SET */
// print all nums btween -10 and 19
function nums1() {
  for (let i = -10; i < 20; i++) {
    console.log(i);
  }
}
// print all even nums btween 10 and 40
function nums2() {
  for (let i = 10; i <= 40; i+=2) {
    console.log(i);
  }
}
// print all odd nums btwn 300 and 333
function nums3() {
  for (let i = 300; i <= 333; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}
// print all nums divisible by both 3 and 5, between 5 and 50
function nums4() {
  for (let i = 5; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i);
    }
  }
}

/* ANNOYOMATIC PROBLEM SET */
function whileAnnoyomatic() {
  var userInput;
  while (userInput !== "yes") {
    userInput = prompt("Are we there yet?");
  }
  alert("HOORAY");
}

function doAnnoyomatic() {
  do {
    var userInput = prompt("Are we there yet?");
  } while (userInput !== "yes");
  alert("HOORAY");
}

function doAnnoyomatic2() {
  do {
    var userInput = prompt("Are we there yet?").toLowerCase();
  } while (userInput.indexOf("yes") < 0);
  alert("HOORAY");
}

/* FUNCTION PROBLEM SET */
function isEven(num) {
  return num % 2 === 0;
}

function factorial(num) {
  var accumulator = 1;
  for (let i = 1; i <= num; i++) {
    accumulator *= i;
  }
  return accumulator;
}

function kebabToSnake(str) {
  return str.replace(/-/g, "_");
}

//side exercise lec 129
var ints = [1,2,3,4,5,6,7,8,9,10];
function forNums(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0) {
      console.log(array[i]);
    }
  }
}

/* ARRAY PROBLEM SET */
function printReverse(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}
function isUniform(array) {
  var compare = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== compare) {
      return false;
      
    }
  }
  return true;
}

function sumArray(array) {
  var accumulator = 0;
  for (let i = 0; i < array.length; i++) {
    accumulator += array[i];
  }
  return accumulator;
}

function max(array) {
  var max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
