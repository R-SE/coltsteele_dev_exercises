/* Todo List Iteration 1*/
//this can all be converted to a ToDo object with attached methods and props
function toDo() {
  var toDoList = [];
  function addTodo() {
    var item = prompt("What would you like to add?");
    toDoList.push(item);
    alert("item added!");
    var addAnother = prompt("Would you like to add another?");
    addAnother.toLowerCase() === "yes" ? addTodo() : runChoices();
  }
  function runChoices() {
    var userCommand = prompt("What would you like to do?");
    if (userCommand === "new") {
      addTodo();
    } else if (userCommand === "list") {
      console.log(toDoList);
      runChoices();
    } else if (userCommand === "quit") {
      console.log("Goodbye!");
    } else {
      console.log("Please see the other commands");
      runChoices();
    }
  }
}
// window.setTimeout(toDo, 500);

/* Todo List Iteration 2*/
function toDo2() {
  var toDoList = [];
  function add() {
    var userAdd = prompt("What would you like to add?");
    toDoList.push(userAdd);
    console.log("Item added!");
    var anotherChoice = prompt("Would you like to add another?").toLowerCase(); //options are "yes/no"
    anotherChoice === "yes" ? add() : ask();
  }
  function deleter() {
    var userDelete = Number(prompt("Which item number should be deleted?"));
    toDoList.splice(userDelete, 1);
    console.log("Item deleted!");
    list();
    var anotherChoice = prompt("Would you like to change another?").toLowerCase(); //options are "yes/no"
    anotherChoice === "yes" ? deleter() : ask();
  }
  function list() {
    console.log("Here is your current list:");
    toDoList.forEach(function(ele, index){
      var listItem = index + ". " + ele;
      console.log(listItem);
    });
    ask();
  }
  function ask() {
    var userChoice = prompt("What would you like to do?").toLowerCase(); //options are "add/delete/list/quit"
    if (userChoice === "add") {
      add();
    } else if (userChoice === "delete") {
      deleter();
    } else if (userChoice === "list") {
      list();
    } else if (userChoice === "quit") {
      console.log("see ya!");
    }
  }
  ask();
}
