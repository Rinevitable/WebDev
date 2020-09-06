// array are mutable where as strings are not.
var countries = ["USA","Germany","China"];

var countries = [
  "USA",
  "Germany",
  "China"
]

var mixed = [true,70,"string"];

mixed.length // lenth of the array

// Great Resource:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

var myArr = ['one','two','three']
// Adding and removing elements (push and pop) like a vector in c++;

// Removing last item
// pop last item and return it to a new variable
// (could also just pop it off without reassigning it to a new var)
var lastItem = myArr.pop()

// Adding to end of Array
myArr.push("new_item")

// Indexing the last item (indexing starts at zero):
myArr[myArr.length - 1]

// Can nest arrays as well:
var matrix = [[1,2,3],[4,5,6],[7,8,9]]



////////////////////////////////////
// ----------------------------- //
// ----- ARRAY ITERATION ------ //
// --------------------------- //
////////////////////////////////

// You can use a classic for loop
var arr = ['A','B','C']

for(var i = 0;i<arr.length;i++){
  console.log(arr[i])
}


// A nice way of iterating through arrays in javascript is to use a for loop
// Now you may think that a for/in is a great choice, but an issue that arises
// the for/in statement will return the name of your user-defined properties
// in addition to the numeric indexes. So it will look like you are just
// returning the indexes of the array.

var arr = ['A','B','C']
// Don't do this!
for (letter in arr) {
  alert(letter);
}

// Because of this you will want to use a for/of loop. For example:
for (letter of arr) {
  alert(letter);
}

// But notice that it may be very common to issue a function for every element
// in an array, so common in fact, that an array has a special method for this.
// It's called the forEach method, check it out:

arr.forEach(alert);

// Let's show another example:
function awesomeAdder(name){
  console.log(name+" is awesome")
}

var topics = ["python",'django','science',"web_devlopement]"]

topics.forEach(awesomeAdder);
