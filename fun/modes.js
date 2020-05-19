//De forskellige 'modes' spillet er i. Menuen, spil delen og gameover.

function menu() {
  //Her gør jeg skyerne usynlige, så det lagger mindre.
  clouds.visible = false;

  //Når start trykkes er timeren nul, for den tæller nemlig hele tiden
  minutes = 0;
  hours = 6;
  days = 0;

  //Hover effect. Når markøren er over knappen så skifter baggrunden.
  if (mouseX >= 330 && mouseX <= 540 && mouseY >= 330 && mouseY <= 390) {
    //By-baggrund
    image(setting[2], 0, 0);
    //By-Startknappen
    image(startCity, width / 2 - 90, height / 5 * 3 - 30)

  }
  else {
    //Hus-baggrunden
    image(setting[1], 0, 0);
    //Hus-startknappen
    image(start, width / 2 - 90, height / 5 * 3 - 30)
  }
}


function game() {
  //Hvis der er hus, så tegnes huset
  if (house == true) {
    //skyerne vises ikke
    clouds.visible = false;
    //huset
    image(setting[3], 0, 0)
    //Dør spriten tegnes
    drawSprite(door);
    //Hjælpe tekst
    if (player.overlap(door)) {
      fill(0);
      textFont(pixel);
      textSize(35);
      text("press 'e' to sleep", 600, 250)
    }
  }
  //Hvis ikke hus, tegnes der ikke hus
  if (house == false) {
    //skyerne vises
    clouds.visible = true;
    //Telefonpæle-baggrunden
    image(setting[4], 0, 0);
    //Sprite gruppen 'fields' (markerne) tegnes.
    drawSprites(fields)
    //skyernes animation
    animation(clouds, 450, 300);
    //Gulerøddernes animation. De tegnes ovenpå markerne. 
    for (o = 0; o < fields.length; o++) {
      animation(carrot[o], data.fields[o].x, data.fields[o].y)
      //Deres animationer stopper jeg med det samme
      carrot[o].stop();
    }
    if (player.overlap(fields)) {
      //Hjælpe tekster til markerne
      fill(0);
      textFont(pixel);
      textSize(35);
      text("press 'w' to water", 330, 250)
      text("press 'q' to sow", 330, 300)
    }
  }

  //Når timeren når over 18 så går det videre til game over
  if (hours >= 18) {
    mode = 3;
  }

  //alle mine funktioner
  //Tegner tiden
  drawTime();
  //Spillerens bevægelse
  movement();
  //Skiftningen mellem bagrundene i spil.
  sceneChange();
  //'Trappe' funktionen.
  if (house == true) {
    stairs();
  }
  //Spillerens animationer
  playerAni();
  //Tegner spilleren
  drawSprite(player);
  //Spillerens interaktionerne
  interactions();

  //Tegner jorden ovenpå mine sprites så græsset går over dem.
  image(dirt, 0, 0);
}

function night() {
  //Der skiftes til nat
  image(setting[6], 0, 0);

  //Fortsætknappen
  image(resume, 684, 540)
  if (!(mouseX >= 684 && mouseX <= 900 && mouseY >= 540 && mouseY <= 600)) {
    //nat effekt
    noStroke();
    fill(9, 18, 71, 130);
    rect(684, 540, 216, 60);
  }

  //Spilleren sættes tilbage til startposition
  player.position.x = 520 + pW / 2;
  player.position.y = 480 - pH / 2;

  //Huset tegnes igen som det første
  house = true;

  //Dagen starter på ny
  minutes = 0;
  hours = 6;

  //Hvis en eller flere marker er blevet vandet og sået, så ændres deres growth
  //Hvis en marks growth er 1, så ændres den til 2 osv.
  for (r = 0; r < fieldSprite.length; r++) {
    if (data.fields[r].sowed == true & data.fields[r].watered == true & data.fields[r].growth == 1) {
      data.fields[r].growth = 2;
      data.fields[r].watered = false;
    } else if (data.fields[r].sowed == true & data.fields[r].watered == true & data.fields[r].growth == 2) {
      data.fields[r].growth = 3;
      data.fields[r].watered = false;
    } else if (data.fields[r].sowed == true & data.fields[r].watered == true & data.fields[r].growth == 3) {
      data.fields[r].growth = 4;
      data.fields[r].watered = false;
    }
  }

  //De marker der er sået opdaterer deres frame til deres growth.
  for (r = 0; r < fieldSprite.length; r++) {
    if (data.fields[r].sowed == true) {
      carrot[r].changeFrame(data.fields[r].growth);
    }
  }
}

function gameOver() {
  //Skiftes til gameover baggrund
  image(setting[5], 0, 0);
  //Skyerne gøres usynlige
  clouds.visible = false;

  //Genstartknappen
  image(restart, 672, 540)

  //Hover effekt for genstart knappen
  if (mouseX >= 672 && mouseX <= 900 && mouseY >= 540 && mouseY <= 600) {
    //hus-genstartknappen
    image(restartH, 672, 540)
  }

  //Spilleren sættes tilbage til startposition
  player.position.x = 520 + pW / 2;
  player.position.y = 480 - pH / 2;

  //Markernes booleans nulstilles
  for (r = 0; r < fieldSprite.length; r++) {
    data.fields[r].sowed = false;
    data.fields[r].watered = false;
  }

  //Gulerødderne genstartes
  for (o = 0; o < fields.length; o++) {
    carrot[o].changeFrame(0);
  }

  //Huset tegnes igen som det første
  house = true;
}