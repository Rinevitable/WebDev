var headselect =document.querySelector("h1");

headselect.style.color="green";

// https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function pickcolor(){
  var col=getRandomColor();
  headselect.style.color=col;
}


// acts over intervals (milliseocnds):
setInterval("pickcolor()",200);
