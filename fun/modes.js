//De forskellige 'modes' spillet er i. Menuen, spil delen og gameover.

function menu() {
  clouds.visible = false;
  //Når start trykkes er timeren nul, for den tæller nemlig hele tiden
  minutes = 0;
  hours = 0;
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
  clouds.visible = true;

  //Dagen starter kl. 6
  hours = 6;

  //Hvis der er hus, så er der hus
  if (house == true) {
    image(setting[3], 0, 0)
  }
  //Hvis ikke hus, tegnes der ikke hus
  if (house == false) {
    image(setting[4], 0, 0);
    drawSprites(fields)
    drawSprites(plants)
    animation(clouds, 450, 300);
  }

  //Kalder på funktionen der skriver tiden
  drawTime();

  //Når timeren når over 18 så går det videre til game over
  if (hours > 18) {
    mode++;
  }


  //alle mine funktioner
  movement();
  sceneChange();
  if (house == true) {
    stairs();
  }

  drawSprite(player);

  //Tegner jorden ovenpå mine sprites så græsset går over dem.
  image(dirt, 0, 0);
  water();
  sow();
}


function gameOver() {
  /* removeSprites(plants); */

  clouds.visible = false;
  image(setting[5], 0, 0);

  //Genstartknappen
  image(restart, 672, 540)

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

  //Huset tegnes igen som det første
  house = true;
}