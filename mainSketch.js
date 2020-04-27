let minutes = 0;
let hours = 0;
let days = 0;

//Hvilken tilstand programmet er i feks. "menu" mode eller "game" mode
let mode = 0;
//Er man ved huset eller ej
let house = true;

//baggrunde
let setting = [];


//Preloader billederne så der ikke er delay.
function preload() {
  //for loop til at indlæse alle billederne med
  for (z = 1; z <= 4; z++) {
    setting[z] = loadImage("image/background" + [z] + ".png");
  }
  /* cloudsAnimation = loadAnimation("image/Clouds/Cloud-kopi1.png", "image/Clouds/Cloud-kopi54.png") */
  dirt = loadImage("image/Dirt.png");
}

function setup() {
  createCanvas(900, 600);
  background(120);
  //setInterval er en funktion der egentlig bare er en timer
  //For hver 1000 milisekund, så kalder den på updateTime funktionen
  setInterval(updateTime, 1000);
  player = createSprite(520 + 100 / 2, 480 - 140 / 2, 100, 140);
  player.shapeColor = color(0);


}

function draw() {
  console.log(mouseX, mouseY);

  //Menuen
  if (mode == 0) {
    //Menu 'funktionen'
    menu();
  }

  //Spil
  else if (mode == 1) {
    //spil 'funktionen'
    game();
  }

  //Game over
  else if (mode == 2) {
    //spillet der slutter 'funktionen'
    gameOver();
  }
}

//Menu knappen
function mouseClicked() {
  //Menuen
  //'Klik-området' for knappen i menuen
  if (mode == 0 && mouseX >= 300 && mouseX <= 500 && mouseY >= 336 && mouseY <= 386) {
    //Når start trykkes sættes timeren til nul, for den tæller nemlig hele tiden
    minutes, hours, days = 0;
    //Når man er i menuen og trykker på knappen så skifter man til spillet
    mode++
  }

  //gameover
  //'Klik-området' for genstart knappen
  if (mode == 2 && mouseX >= 600 && mouseX <= 800 && mouseY >= 550 && mouseY <= 600) {
    //Når man trykker på genstart går den tilbage til menuen
    mode = 0;
  }
}

//Knap til at teste timeren
function keyPressed() {
  if (keyCode == ENTER) {
    hours++
  }
}