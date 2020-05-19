//Variablerne til tiden
let minutes = 0;
let hours = 0;
let days = 0;

//Et array til alle marke-spritesene
let fieldSprite = [];

//Player width & player height. For det bruger jeg ofte.
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

function preload() {
  //Preloader billederne så der ikke er delay.

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

  //resume knappen
  resume = loadImage("image/resume.png")

  //Indlæser fonten til min tekst
  pixel = loadFont("image/font.ttf")

  //Indlæser spillerens udseende
  jårhn = loadImage("image/Jårhn.png")
  //Billede af når han sår frø
  sowingIMG = loadImage("image/sowing.png")
  //Billede af når han vander
  wateringIMG = loadImage("image/watering.png")

  //Jorden, som et seperat billede.
  dirt = loadImage("image/Dirt.png");
  doorIMG = loadImage("image/door.png");

  //Markerne til planterne
  fieldImg = loadImage("image/field.png");
  //Vandet
  fieldWet = loadImage("image/fieldWatered.png");

  //Indlæser animationen af skyerne
  clouds = loadAnimation("image/Clouds/Cloud-kopi1.png", "image/Clouds/Cloud-kopi54.png");

  //Indlæser 'animationen' for gulerødderne
  for (o = 0; o < 4; o++) {
    carrot[o] = loadAnimation("image/Carrot0.png", "image/Carrot1.png", "image/Carrot2.png", "image/Carrot3.png", "image/Carrot4.png");
  }

  //Indlæser mine plante objekter
  data = loadJSON("json/FieldsData.json");

}

function setup() {
  //Her defineres sprites og canvas

  createCanvas(900, 600);

  //setInterval er en funktion der egentlig bare er en timer
  //For hver 1000 milisekund, så kalder den på updateTime funktionen
  setInterval(updateTime, 1000);

  //Markerne til afgrøder.
  fields = new Group();
  //I et loop med dataen fra json filen.
  for (o = 0; o < 4; o++) {
    fieldSprite[o] = createSprite(data.fields[o].x, data.fields[o].y, data.fields[o].width, data.fields[o].height);
    fieldSprite[o].addImage("dry", fieldImg);
    fieldSprite[o].addImage("wet", fieldWet);
    fields.add(fieldSprite[o]);
  }

  //Døren, så den kan gøres interaktiv
  door = createSprite(486 + 30 / 2, 480 - 222 / 2, 30, 222)
  door.addImage(doorIMG);

  //Spilleren
  player = createSprite(520 + pW / 2, 480 - pH / 2, pW, pH);
  //Her tilføjer jeg spillerens aktioner til spriten
  player.addImage("normal", jårhn);
  player.addImage("watering", wateringIMG);
  player.addImage("sowing", sowingIMG);

  //Gør sky animationen langsommere.
  clouds.frameDelay = 10;
}

function draw() {
  //Her tegnes de forskellige 'modes'

  //Giver mig musens x og y. Brugt til at finde positioner.
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

  //Nat
  else if (mode == 2) {
    //spil 'funktionen'
    night();
  }


  //Game over
  else if (mode == 3) {
    //spillet der slutter 'funktionen'
    gameOver();
  }
}

function mouseClicked() {
  //start, forsæt og genstart knappen

  //Menuen - start
  //'Klik-området' for knappen i menuen
  if (mode == 0 && mouseX >= 360 && mouseX <= 540 && mouseY >= 330 && mouseY <= 390) {
    //Når start trykkes sættes timeren til nul, for den tæller nemlig hele tiden
    minutes, hours, days = 0;
    //Når man er i menuen og trykker på knappen så skifter man til spillet
    mode++
  }

  //Nat - fortsæt
  //'Klik-området' for forsæt knappen
  if (mode == 2 && mouseX >= 684 && mouseX <= 900 && mouseY >= 540 && mouseY <= 600) {
    //Når man trykker på fortsæt går den tilbage til spil, og tæller en dag.
    mode = 1;
    days++;
  }

  //gameover - genstart
  //'Klik-området' for genstart knappen
  if (mode == 3 && mouseX >= 672 && mouseX <= 900 && mouseY >= 540 && mouseY <= 600) {
    //Når man trykker på genstart går den tilbage til menuen
    mode = 0;
  }
}

function keyPressed() {
  //Knapper til at teste

  //Til at teste tiden.
  if (keyCode == ENTER) {
    hours++
  }


  //Knap til at skifte modes. KeyCode 18 er option/alt knappen
  if (mode == 3 & keyCode == 18) {
    //Når der nås mode 3, så starter den forfra.
    mode = 0;
  }
  else if (keyCode == 18) {
    //Går til næste mode
    mode++;
  }
}