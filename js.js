
var x1=0;
var x2=0;

/*********************


Rudiments:::

Easy:

"Singles",
"Doubles",
"Six Stroke Roll",
"Paradiddles",
"Swiss Triplet",
"Flam Singles",
"Thirds"

Harder:

"Accent Singles",
"Inv. Doubles",
"Inv. Six Stroke Roll",
"Paradiddles",
"Inv. Swiss Triplet",
"Inv. Flam Singles",
"Chops"

***********************/


var rudiments=[
  //EASY
  "Singles",
  "Doubles",
  "Six Stroke Roll",
  "Paradiddles",
  "Swiss Triplet",
  "Flam Singles",
  "Thirds",
  "Accent Singles",
  "Inv. Doubles",
  "Inv. Six Stroke Roll",
  "Paradiddles",
  "Inv. Swiss Triplet",
  "Inv. Flam Singles",
  "Chops"
];

function generate(){
  document.getElementById("info").style.display="none";
  document.getElementById("textbox").style.display="block";

sum();

function sum(){
x1=Math.round(Math.random()*(rudiments.length-1));
x2=Math.round(Math.random()*(rudiments.length-1));
}
if(x1==x2){
  sum();
}


document.getElementById("place1").innerHTML=rudiments[x1];
document.getElementById("place2").innerHTML=rudiments[x2];
}
