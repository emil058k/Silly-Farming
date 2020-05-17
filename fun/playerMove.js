let speed = 0;


function movement() {

  //Så normalt er player speed
  player.setSpeed(speed, 0);

  //Enkelte knapper
  if (keyIsDown(RIGHT_ARROW)) {
    //Vinklen er til højre.
    speed = 2;
    player.setSpeed(speed, 0);
  }

  if (keyIsDown(LEFT_ARROW)) {
    //Man har samme vinklen som højre, men farten bliver negativ, derfor går den venstre.
    speed = -2;
    player.setSpeed(speed, 0);
  }

  //Løb
  if (keyIsDown(RIGHT_ARROW) && keyIsDown(SHIFT) & house == false) {
    speed = 4;
    player.setSpeed(speed, 0);
  }

  if (keyIsDown(LEFT_ARROW) && keyIsDown(SHIFT) & house == false) {
    speed = -4;
    player.setSpeed(speed, 0);
  }


  //Realistisk bevægelse. Når en figur bevæger sig har de stadig noget fart på bagefter.
  //'Hvis speed ikke er 0, så...'
  if (speed != 0) {
    //sætter speed til at være speed minus absoulut værdien af speed dividerede den nuværende speed
    //også til sidst gange 0.1
    speed = speed - (abs(speed) / speed) * 0.1;
    player.setSpeed(speed, 0);

    if (abs(speed) < 0.2) {
      speed = 0;
    }
  }
}

//'når du rammer kanten skifter scenen/setting'
function sceneChange() {
  //Hvis spilleren rammer højre eller venstre side af canvas,
  //så tegnes de ved kanten igen.

  //Hvis de rammer kanten og det er hus, så tegnes næste scene
  if (player.position.x > width - pW / 2 & house == true) {
    house = false;
    player.position.x = 0 + pW / 2;
  }

  //Ellers hvis hus er falsk så teleporteres de tilbage igen.
  else if (player.position.x > width - pW / 2) {
    player.position.x = width - pW / 2;
  }

  //Spilleren kan ikke gå gennem døren
  if (player.position.x < 0 + pW / 2 & house == true) {
    player.position.x = 0 + pW / 2;
  }

  else if (player.position.x < 0 + pW / 2) {
    house = true;
    player.position.x = width - pW / 2;
  }

}

//'indenfor dette felt vil man gå op indtil y eller ned indtil y2'
function stairs() {
  //når funktion kaldes så laver den boolean 'onStairs'
  let onStairs = false

  //hvis spilleren står ved trappen så er de på trappen og går ned 
  if (player.position.x >= 677 + 30 & player.position.x <= 750 + 60) {
    onStairs = true

    //ned
    if (keyIsDown(RIGHT_ARROW) & player.position.y <= 540 - pH / 2) {
      player.position.y = player.position.y + 1.25;
    }

    //op
    if (keyIsDown(LEFT_ARROW) & player.position.y >= 480 - pH / 2) {
      player.position.y = player.position.y - 1.25;
    }
  }
}

function playerAni() {
  if (keyIsDown(87)) {
    player.changeAnimation("watering");
  } else if (keyIsDown(81)) {
    player.changeAnimation("sowing");
  } else {
    player.changeAnimation("normal");
  }
}