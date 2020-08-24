var hot = false;
var temp = 60;
if (temp > 80){
    hot = true;
}
console.log(hot);
var temp = 100;
if (temp > 80){
    hot = true;
}
console.log(hot);
temp = 30;
if (temp > 105){
    console.log("Hot outside!");
} else{
    console.log("Its not too hot today!");
}
temp = 55;


if (temp > 80){
    console.log("Hot outside!");
} else if(temp <= 80 && temp >= 50){
    console.log('Nice outside!');
} else if(temp <= 50 && temp >= 32){
    console.log("Its cooler outside!");
} else{
    console.log("Its really cold outside!");
}

var ham = 10;
var cheese = 10;
var report = 'blank';
if(ham >= 10 && cheese >= 10){
    report = "Strong sales of both items";

}else if(ham === 0 && cheese === 0){
    report = "Nothing sold!";
}else{
    report = 'We had sales';
}
console.log(report);
