let minutes = 0;
let hours = 0;
let days = 0;
let clouds = 0;

//Player width & player height
let pW = 150;
let pH = 210;

//Hvilken tilstand programmet er i feks. "menu" mode eller "game" mode
let mode = 0;
//Er man ved huset eller ej
let house = true;

//baggrunde
let setting = [];

//Plante-objectet
let plant;


//Preloader billederne så der ikke er delay.
function preload() {
  //for loop til at indlæse alle baggrundene med
  for (z = 1; z <= 5; z++) {
    setting[z] = loadImage("image/background" + [z] + ".png");
  }

  //start knapperne
  start = loadImage("image/startButton.png");
  startCity = loadImage("image/startButton2.png");

  //genstart knapperne
  restart = loadImage("image/restart.png");
  restartH = loadImage("image/restart2.png");

  //Indlæser fonten til min tekst
  pixel = loadFont("image/font.ttf")

  //Indlæser spillerens udseende
  jårhn = loadImage("image/Jårhn.png")

  clouds = loadAnimation("image/Clouds/Cloud-kopi1.png", "image/Clouds/Cloud-kopi54.png");

  //jorden, så den kan tegnes foran spilleren
  dirt = loadImage("image/Dirt.png");
  //Markerne
  field = loadImage("image/field.png");

  //Indlæser mine plante objekter og deres animationer
  data = loadJSON(plants);
  /*  for (i = 1; i < growthAnimation.length; i++) {
     growthCarrot = loadImage("image/carrot" + [i] + ".png");
   }
   carrot = loadAnimation(data.plants[0].growthAnimation);
  */
}

//Her tegnes sprites og canvas
function setup() {
  createCanvas(900, 600);
  //setInterval er en funktion der egentlig bare er en timer
  //For hver 1000 milisekund, så kalder den på updateTime funktionen
  setInterval(updateTime, 1000);
  player = createSprite(520 + pW / 2, 480 - pH / 2, pW, pH);
  player.addImage("normal", jårhn);

  clouds.frameDelay = 10;

  /*  fields = new Group();
   fields.addImage(); */


}

//Her tegnes de forskellige 'modes'
function draw() {
  console.log(mouseX, mouseY);

  //Menuen
  if (mode == 0) {
    //Menu 'funktionen'
    menu();
    /* animation(clouds, 450, 300); */
  }

  //Spil
  else if (mode == 1) {
    //spil 'funktionen'
    game();
    if (house == false) {
      animation(clouds, 450, 300);
    }
  }

  //Game over
  else if (mode == 2) {
    //spillet der slutter 'funktionen'
    gameOver();
    /* animation(clouds, 450, 300); */
  }
}

//start og genstart knappen
function mouseClicked() {
  //Menuen - start
  //'Klik-området' for knappen i menuen
  if (mode == 0 && mouseX >= 360 && mouseX <= 540 && mouseY >= 330 && mouseY <= 390) {
    //Når start trykkes sættes timeren til nul, for den tæller nemlig hele tiden
    minutes, hours, days = 0;
    //Når man er i menuen og trykker på knappen så skifter man til spillet
    mode++
  }

  //gameover - genstart
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

  //Knap til at skifte modes. KeyCode 18 er option/alt knappen
  //startforfra
  if (mode == 2 & keyCode == 18) {
    mode = 0;
  }
  //Skift scene
  else if (keyCode == 18) {
    mode++;
  }
}