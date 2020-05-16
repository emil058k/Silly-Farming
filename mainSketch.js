let minutes = 0;
let hours = 0;
let days = 0;

//Variablet til afgrøderne.
let growth = 0;


//et array til alle marke-spritesene
let fieldSprite = [];

//Player width & player height
let pW = 150;
let pH = 210;

//Hvilken tilstand programmet er i feks. "menu" mode eller "game" mode
let mode = 0;
//Er man ved huset eller ej
let house = true;

//baggrunde
let setting = [];

//Stadier af vækst hos gulerødderne
let carrot = [];

//Preloader billederne så der ikke er delay.
function preload() {
  //for loop til at indlæse alle baggrundene med
  for (z = 1; z <= 6; z++) {
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
  sowingIMG = loadImage("image/sowing.png")
  wateringIMG = loadImage("image/watering.png")

  clouds = loadAnimation("image/Clouds/Cloud-kopi1.png", "image/Clouds/Cloud-kopi54.png");

  //jorden, så den kan tegnes foran spilleren
  dirt = loadImage("image/Dirt.png");
  doorIMG = loadImage("image/door.png");
  //Markerne
  fieldImg = loadImage("image/field.png");
  fieldWet = loadImage("image/fieldWatered.png");

  //Indlæser billederne for grøntsagerne
  /* for (i = 0; i < 5; i++) {
    growthCarrot[i] = loadImage("image/Carrot" + [i] + ".png");
  } */
  for (o = 0; o < 4; o++) {
    carrot[o] = loadAnimation("image/Carrot0.png", "image/Carrot1.png", "image/Carrot2.png", "image/Carrot3.png", "image/Carrot4.png");
  }
  /* for (u = 0; u < 5; u++) {
    carrots[u].changeFrame(u);
  } */

  //Indlæser mine plante objekter og deres animationer
  data = loadJSON("json/FieldsData.json");

}

//Her tegnes sprites og canvas
function setup() {
  createCanvas(900, 600);
  //setInterval er en funktion der egentlig bare er en timer
  //For hver 1000 milisekund, så kalder den på updateTime funktionen
  setInterval(updateTime, 1000);

  //markerne til afgrøder
  fields = new Group();
  for (o = 0; o < 4; o++) {
    fieldSprite[o] = createSprite(data.fields[o].x, data.fields[o].y, data.fields[o].width, data.fields[o].height);
    fieldSprite[o].addImage("dry", fieldImg);
    fieldSprite[o].addImage("wet", fieldWet);
    fields.add(fieldSprite[o]);
  }

  //Døren, så den bliver interaktiv
  door = createSprite(486 + 30 / 2, 480 - 222 / 2, 30, 222)
  door.addImage(doorIMG);

  //Spilleren
  player = createSprite(520 + pW / 2, 480 - pH / 2, pW, pH);
  player.addImage("normal", jårhn);
  player.addImage("watering", wateringIMG);
  player.addImage("sowing", sowingIMG);

  //Gør sky animationen langsommere.
  clouds.frameDelay = 10;



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