let speed = 0;

function movement() {

  //Så normalt er player speed
  player.setSpeed(speed, 0);

  //Enkelte knapper
  if (keyIsDown(RIGHT_ARROW)) {
    //Vinklen er til højre.
    speed = 2;
  }

  if (keyIsDown(LEFT_ARROW)) {
    //Man har samme vinklen som højre, men farten bliver negativ, derfor går den venstre.
    speed = -2;
  }

  //Løb
  if (keyIsDown(RIGHT_ARROW) && keyIsDown(SHIFT) & house == false) {
    speed = 4;
  }

  if (keyIsDown(LEFT_ARROW) && keyIsDown(SHIFT) & house == false) {
    speed = -4;
  }


  //Realistisk bevægelse. Når en figur bevæger sig har de stadig noget fart på bagefter.
  //'Hvis speed ikke er 0, så...'
  if (speed != 0) {
    //Sætter speed til at være speed minus absoulut værdien af speed dividerede den nuværende speed
    //også til sidst gange 0.1
    speed = speed - (abs(speed) / speed) * 0.5;
    player.setSpeed(speed, 0);
    //Når den absoulutte speed endelig er under 0.2 sættes den til 0
    if (abs(speed) < 0.2) {
      speed = 0;
    }
  }
}

function sceneChange() {
  //'når du rammer kanten skifter scenen/setting'

  //Hvis de rammer højre side af canvas og der er hus, så tegnes næste scene
  if (player.position.x > width - pW / 2 & house == true) {
    house = false;
    //Og spilleren teleporteres til venstre side af canvas
    player.position.x = 0 + pW / 2;
  }

  //Ellers hvis hus er falsk så teleporteres de tilbage igen.
  else if (player.position.x > width - pW / 2) {
    player.position.x = width - pW / 2;
  }

  //Spilleren kan ikke gå venstre væg, når der er hus.
  if (player.position.x < 0 + pW / 2 & house == true) {
    player.position.x = 0 + pW / 2;
  }
  //Ellers hvis spilleren rammer venstre væg og der ikke er hus
  //så skiftes der tilbage til hus, og spilleren tegnes i højre side.
  else if (player.position.x < 0 + pW / 2) {
    house = true;
    player.position.x = width - pW / 2;
  }
}

function stairs() {
  //'indenfor dette felt vil man gå op indtil y eller ned indtil y2'

  //når funktion kaldes så laver den boolean 'onStairs'
  let onStairs = false

  //hvis spilleren står ved trappen, så er de på trappen
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
  //Spillerens animationer
  if (keyIsDown(87)) {
    //Vandings 'animation'. Det er bare et billede...
    player.changeAnimation("watering");
  } else if (keyIsDown(81)) {
    //Sånings 'animation'. Det er også bare et billede...
    player.changeAnimation("sowing");
  } else {
    //Jårhns stillestående tegning.
    player.changeAnimation("normal");
  }
}