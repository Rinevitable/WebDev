
// Creating an Object:
var carInfo = { make: "Toyota", year: 1990 , model: "Camry" };

// Call values by their key:
carInfo['model'];

// Flexible data types
var mess = { a: "hello", b: ['x','y','z'] , c: {'inside': [ 4 ,5, ["weird"]]}};

// Grabbing the letter y:
mess['b'][1];

// Changing the value that corresponds to a key:
carInfo['year'] = 2020;
//Show
carInfo['year'];

// Could also reference itself:
carInfo['year'] += 1

//show
carInfo['year'];

// Show Entire Object; Sometimes differs by browser -
console.dir(carInfo);

// Iterate through object:
for (var key in carInfo) {
  // Remember there is no order!
  console.log(key)
  console.log(carInfo[key])
  console.log("\n")
}
// Besides key-value pairs for normal data types, you can add in methods!

// Methods are essentially functions that are built into a javascript object.
// Usually we've called a function and then passed stuff as parameters, now we
// will build this function inside of an object, creating a method for that object.

// For Example:
var carInfo = {
  make: "Toyota",
  year: 1990 ,
  model: "Camry" ,
  carAlert: function(){
    alert("We've got a car here!")
  }
};

// Then you can call it!
carInfo.carAlert()

// But what if you (more realistically) want to actually reference an object's
// key-value pairs. For instance, if we want ot include this in our alert?

// You'll need to use the "this" keyword
var carInfo = {
  make: "Toyota",
  year: 1990 ,
  model: "Camry" ,
  carAlert: function(){
    alert('Your car info is, make: '+this.make+ " year: "+this.year+ " model:"+this.model)
  }
};
