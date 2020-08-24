var x = 0;

while(x < 5){
    console.log("x is currently: "+ x);
    console.log("x is still less than 5, adding 1 to x");
    x++;
}

var x = 0
while(x < 5){
    console.log("x is currently: "+ x);
    if(x === 3){
      console.log("x is equal to 3, BREAK")
      break;
    }
    console.log("x is still less than 5, adding 1 to x");
    x++;
}

//while loop that prints out only the even numbers from 1 to 10.
var x=2;
while(x<=10){
  console.log(x);
  x+=2;
}
