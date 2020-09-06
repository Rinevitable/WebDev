// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
function addNew(){
  var name= promt("Enter the name to be added : ");
  roster.push(name);
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster
function remove(){
  var name= promt("Enter the name to be added : ");
  //find the  index of that name by indexOf fxn
  var index=roster.indexOf(name);
  // now use splice fxn (index to be deleted , no. of elements to be deleted)
  roster.splice(indedx,1);

}
// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

// DISPLAY ROSTER
function display(){
  console.log(roster);
}
// Create a function called display that prints out the orster to the console.


// Start by asking if they want to use the web app
var yes=prompt("Would you like to use web app? y for yes and n for No");
var action="nothing"
// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
if(yes==="y"){
  while(action!=="quit"){
    action = prompt("What do you wand type: add,remove, display or quit.");
    if(action==="add"){
      addNew();
    }
    else if (action==="remove") {
      remove();
    }
    else if (action==="display") {
      display();
    }
    else if (action==="quit") {
      break;
    }
  }
}
prompt("Thanks for using the Web App! Please refresh the page to start over.");
