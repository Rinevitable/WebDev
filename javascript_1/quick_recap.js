//start//
    console.log('Hello World');
    let b=98;
    a=[12,34,454,44,3]
    console.log(a);
    console.log(b);

// basic var let fxns:-
    c=23;//global variable
    var d=34;//function Scope
    let e=56;//Block Scope
    //below is the function declaration ;
    function fun(){
        let a=4;
        var b=67;
        if(a==4){
            console.log("inside the scope of fxn ", a);
        }
        console.log("Insde the fxn using var", b);
    }
    fun();
    console.log("Now a got the valuue of a in start that is global value",a);
    var square_root=function(n){
      console.log("inside fxn expression ")
      return Math.sqrt(n);
    }//these fxn are not hoisted ;

// Array and Methods
    let arr =["apple","Mango","Banana","orange"];
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
    arr.push("KIWI");//will add at last
    arr.unshift("guava");//will add at start
    console.log("After Adding");
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
    arr.pop();//will pop last element
    arr.shift();//will pop from front
    console.log("After deleting");
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
    arr.indexOf("Mango");//will return index of passed string/var

//oops in js
//object creation
//don't use "equal to" rather "Double colon" also inside the class don't use semi colon
  var bird={
    x:100,
    y:455,
    eggs:["first","second","third"],
    color:"blue",
    //again don't write function then fly
    fly:function(){
      console.log("in the fly fxn searching ");
      console.log("the bird is flying at : ",this.x,this.y);//have to use this keyword otherwise won't work
    }
  };//object
  for(let i=0;i<bird.eggs.length;i++){
    console.log(bird.eggs[i]);
  }
  //for each loop
  bird.eggs.forEach((value, idx) => {
    console.log(idx,value);
  });
  bird.fly();
  var apple={
    color:"red",
    taste:"sweet",
  };
  //another way
  function fruit(color,taste){
      this.color=color;
      this.taste=taste;
  }
  var apple=new fruit("red","sweet");
  var orange=new fruit("orange","sour");
//using classes
  class Fruitclass{
    constructor(color,taste){
      this.color=color;
      this.taste=taste;
    }
  };
  var kiwi=new Fruitclass("green","sour");

  var banana=class fruitclass2{
    constructor(color,taste){
      this.taste=taste;
      this.color=color;
    }
  };
