let minutes = 0;
let hours = 0;
let days=0;

function setup() {
  createCanvas(800,600);
  background(120);
  //setInterval er en funktion der egentlig bare er en timer
  //For hver 1000 milisekund, så kalder den på updateTime funktionen
  setInterval(updateTime, 1000);
}

function draw() {
  background(120);
  textSize(35);
  //Kalder på funktionen der skriver tiden
  drawTime();
}
