alert("Welcome to the Website .\n Please provide the information asked.");
var req_name=false;
var req_age=false;
var req_height=false;
var req_petname=false;

var fname=prompt("Enter Your First name");
var lname = prompt("Enter your Last Name");
var age= prompt("Enter your Age");
var height=prompt("Enter your Height in cm ");
var petname= prompt("Enter your petname")

if(fname[0]==lname[0]){
  req_name=true;
}
if(age>=20 && age<=30){
  req_age=true;
}
if(height>170){
  req_height=true;
}
var x=petname.length;
if(petname[x-1]=='y'){
  req_petname=true;
}

if(req_name && req_age && req_height && req_petname){
  console.log("The secret lies within you go Kung Fu Panda!");
}
else{
  console.log("Nothing to see here .");
}
