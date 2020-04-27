function menu() {
  //Når start trykkes er timeren nul, for den tæller nemlig hele tiden
  minutes = 0;
  hours = 0;
  days = 0;


  //baggrunden
  image(setting[1], 0, 0);

  //Hover effect. Når markøren er over knappen så skifter baggrunden.
  if (mode == 0 && mouseX >= 300 && mouseX <= 500 && mouseY >= 336 && mouseY <= 386) {
    image(setting[2], 0, 0);
  }

  //Selve knappen
  rectMode(CENTER);
  noStroke();
  rect(width / 2, height / 5 * 3, 200, 50);
}


function game() {
  if (house == true) {
    image(setting[3], 0, 0)
  }
  if (house == false) {
    image(setting[4], 0, 0);
  }

  textSize(35);

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
  image(dirt, 0, 0)
  drawSprites();
}


function gameOver() {
  image(setting[2], 0, 0);

  //Genstartknappen
  noStroke();
  rect(width - 200, height - 50, 200, 50);
  player.position.x = 520 + 100 / 2;
  player.position.y = 480 - 140 / 2;

  //Huset tegnes igen som det første
  house = true;
}