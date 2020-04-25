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
    if (keyIsDown(RIGHT_ARROW) && keyIsDown(SHIFT)) {
      speed = 4;
      player.setSpeed(speed, 0);
    }
  
    if (keyIsDown(LEFT_ARROW) && keyIsDown(SHIFT)) {
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


function limits() {
  //Hvis spilleren rammer højre eller venstre side af canvas,
  //så tegnes de ved kanten igen.
  if (player.position.x > width - 50) {
    player.position.x = width - 50;
  }
  //venstre side
  else if (player.position.x < 50) {
    player.position.x = 0 + 50
  }
}


function stairs() {
  //når funktion kaldes så laver den boolean 'onStairs'
  let onStairs = false


// & player.position.y <= 540-140/2

  //hvis spilleren står ved trappen så er de på trappen og går ned 
  if (player.position.x >= 677+25 & player.position.x <= 750+60){
    onStairs = true

    //ned
    if (keyIsDown(RIGHT_ARROW) & player.position.y <= 540-140/2) {
      player.position.y = player.position.y+1.25;
    }

    //op
    if (keyIsDown(LEFT_ARROW) & player.position.y >= 480-140/2) {
      player.position.y = player.position.y-1.24;
    }
  }
}