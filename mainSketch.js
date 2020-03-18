let minutes = 0;
let hours = 0;
let days = 0;

//Hvilken tilstand programmet er i feks. "menu" mode eller "game" mode
let mode = 0;

function setup() {
  createCanvas(800, 600);
  background(120);
  //setInterval er en funktion der egentlig bare er en timer
  //For hver 1000 milisekund, så kalder den på updateTime funktionen
  setInterval(updateTime, 1000);
}

function draw() {
  console.log(mouseX, mouseY)

  //Menuen
  if (mode == 0) {
    //I menuen sættes timeren til nul, for den tæller nemlig hele tiden
    minutes, hours, days = 0;

    //Knappen
    background(180);

    //Hover effect. Når markøren er over knappen så skifter baggrunden.
    if (mode == 0 && mouseX >= 300 && mouseX <= 500 && mouseY >= 336 && mouseY <= 386) {
      background(150);
    }

    //Selve knappen
    rectMode(CENTER);
    noStroke();
    rect(width / 2, height / 5 * 3, 200, 50)
  }

  //Spil
  else if (mode == 1) {
    background(120);
    textSize(35);

    //Kalder på funktionen der skriver tiden
    drawTime();

    //Når timeren når over 18 så går det videre til game over
    if (hours > 18) {
      mode++
    }
  }

  //Game over
  else if (mode == 2) {
    background(0);

    //Genstartknappen
    rect(width - 200, height - 50, 200, 50)
  }
}

function mouseClicked() {
  //'Klik-området' for knappen i menuen
  if (mode == 0 && mouseX >= 300 && mouseX <= 500 && mouseY >= 336 && mouseY <= 386) {
    //Når man er i menuen og trykker på knappen så skifter man til spillet
    mode++
  }

  //'Klik-området' for genstart knappen
  if (mode == 2 && mouseX >= 600 && mouseX <= 800 && mouseY >= 550 && mouseY <= 600) {
    //Når man trykker på genstart går den tilbage til menuen
    mode = 0;
  }
}

//Knap til at teste timeren
function keyReleased() {
  hours++
}