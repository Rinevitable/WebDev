function name(parameter1, parameter2, parameter3) {
  //code
}

function hello(){
    console.log("hello world!");
}

hello
 //: it will return the hello fxn not execute it

// add parenthesis to execute the function.
hello()

function helloYou(name){
    console.log("hello "+name);
}
helloYou("Jose")

function addNum(num1,num2){
    console.log(num1+num2);
}
addNum(30,20)
//Frankie act as place holder
function helloSomeone(name="Frankie"){
    console.log("Hello "+name);
}
helloSomeone()

function formal(name="Rishabh",title="Sir"){
    console.log(title+" "+name)
}

"Welcome " + formal()
//result will be WelcomeUndefined
cause its not returning something which could be catenated

function formal(name="Rishabh",title="Sir"){
    return title+" "+name;
}

"Welcome "+formal()


var result = formal()


function times5(numInput) {
  var result = numInput * 5
  return result
}

times5(5)

numInput // Error
//cause these are local variables.
result // Error

var v = "I'm global v"
var stuff = "I'm global stuff"

function fun(stuff){
    console.log(v);
    stuff = "Reassign stuff inside func";
    console.log(stuff);
}
fun()
