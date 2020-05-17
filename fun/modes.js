//De forskellige 'modes' spillet er i. Menuen, spil delen og gameover.

function menu() {
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
  clouds.visible = false;
  //Hvis der er hus, så er der hus
  if (house == true) {
    image(setting[3], 0, 0)
    drawSprite(door);
  }
  //Hvis ikke hus, tegnes der ikke hus
  if (house == false) {
    clouds.visible = true;
    image(setting[4], 0, 0);
    drawSprites(fields)
    animation(clouds, 450, 300);
    for (o = 0; o < fields.length; o++) {
      animation(carrot[o], data.fields[o].x, data.fields[o].y)
      carrot[o].stop();
    }
  }


  //Kalder på funktionen der skriver tiden
  drawTime();

  //Når timeren når over 18 så går det videre til game over
  if (hours >= 18) {
    mode = 3;
  }


  //alle mine funktioner
  movement();
  sceneChange();
  if (house == true) {
    stairs();
  }
  playerAni();

  drawSprite(player);
  interactions();

  //Tegner jorden ovenpå mine sprites så græsset går over dem.
  image(dirt, 0, 0);


}

function night() {
  //Spilleren sættes tilbage til startposition
  player.position.x = 520 + pW / 2;
  player.position.y = 480 - pH / 2;

  //Huset tegnes igen som det første
  house = true;

  //Dagen starter på ny
  minutes = 0;
  hours = 6;

  image(setting[6], 0, 0);
  //Fortsætknappen
  image(resume, 684, 540)
  if (!(mouseX >= 684 && mouseX <= 900 && mouseY >= 540 && mouseY <= 600)) {
    //nat effekt/farve
    noStroke();
    fill(9, 18, 71, 130);
    rect(684, 540, 216, 60);
  }
  for (r = 0; r < fieldSprite.length; r++) {
    if (data.fields[r].sowed == true) {
      carrot[r].changeFrame(data.fields[r].growth);
    }
  }

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
}

function gameOver() {

  clouds.visible = false;
  image(setting[5], 0, 0);

  //Genstartknappen
  image(restart, 672, 540)

  //hover effect
  if (mouseX >= 672 && mouseX <= 900 && mouseY >= 540 && mouseY <= 600) {
    //hus-genstartknappen
    image(restartH, 672, 540)
  }

  //Spilleren sættes tilbage til startposition
  player.position.x = 520 + pW / 2;
  player.position.y = 480 - pH / 2;

  for (r = 0; r < fieldSprite.length; r++) {
    data.fields[r].sowed = false;
    data.fields[r].watered = false;
  }

  for (o = 0; o < fields.length; o++) {
    carrot[o].changeFrame(0);
  }

  //Huset tegnes igen som det første
  house = true;
}