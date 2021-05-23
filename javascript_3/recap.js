// console.log("HELLO WORLD");

// STRINGS
let str = "this is rishabh\'s string";   //using esacpe character "\"
console.log(str,str.length);
// searching
let s = 'this is an example';
let key='is';
let pos=4;
console.log(s.indexOf(key)); //will give 2
console.log(s.indexOf(key,pos)); //will search after 4th pos
//methods
let mainstr ='this is a long string';
let smallstr = mainstr.slice(5,9);//slice & substr can have -ve parameters
let sstr=mainstr.substr(-5);
let ssstr=mainstr.substring(3,9);
console.log(smallstr,'\n',sstr,'\n',ssstr);

//arrays and loops
let arr=[1,'dghwjhgfd',567,'wgue',false,[3,8,'ty']];
console.log(arr);

//iteration
for(let i=0;i<arr.length;i++){
    console.log(arr[i],typeof arr[i]);
}

for(let val of arr){  //of use
    console.log(val);
}

for(let index in arr){
    console.log(index,arr[index]);
}

//remove and add{push pop works like stack i.e from back whereas shit an unshift woks from front }
let fruits=['apple'];

fruits.push('mango','orange');fruits.pop();
console.log(fruits);

fruits.shift();fruits.unshift('kiwi','papaya');
console.log(fruits);

//data changing
let notes = ['do','re','mi','fa','so','la','ti','do'];
//slice(position count start from white space) non-destructive unlike splice(1 argument only) it destruct the spliced part
console.log(notes.slice(3,7),'\n',notes);//two arguments are 1:from 2:to 

let omit=notes.splice(3,2);//two arguments 1st from 2nd how many 3:replace value
console.log(omit,notes);

console.log(notes.splice(0,3,'sa','re','ga'),notes);

//concat
console.log(notes.concat('ma','pa','dha',['ni','sa']),notes);

//const keyword
const obj={
    k1:'asdfgh',
    k2: 43,
    k3: false,
};
// obj=[3,7]; will not work as you cant reassign whereas
obj.k4=678;
delete obj.k1;
console.log(obj.k4,obj);//this will work

//variable are passed by value where as arrays by referance
//IIFE:- immediately invoked fxn expression
function sayhello(){
    console.log('hello');
}
sayhello();
(function(){
    var a=10;
    var b=98;
    console.log(a+b);//mainly used for creating local variable 
    console.log('hello by iife');
})();
//main use case
(function(l,p,r,s){
    l('3^4 = '+p(3,4));
    l('2^5 ='+p(2,5));
    l('sqrt of 9 is : '+r(9));
    l('sine of 30 is '+s(Math.PI/6));
})(console.log,Math.pow,Math.sqrt,Math.sin);

//closure scope: inside fxn has accss to outer variable
function count (){
    var initial=1;
    function plus(){
        console.log(++initial);
    }
    return plus;
}
var c = count();
c();
c();

//setTimeout and setInterval
var intervalId;
var runcount=0;
function sayHello(){
    runcount++;
    if(runcount>5){
       clearInterval(intervalId);
    }
    console.log('Hello!');
}
console.log("wait starts of 1000 sec");
intervalId=setInterval(sayHello,1000);