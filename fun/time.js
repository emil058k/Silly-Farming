//Uret i højre hjørne

function drawTime() {
  //Den funktion der skriver tiden

  //Ikke angivet globalt da den kun bruges her
  let time;

  //In game minutter
  //Hvis minutter er under 9 så er 'time' = :'minutes'
  if (minutes > 9) {
    time = ':' + minutes;
  }
  //Ellers så skriv 0 foran 'minutes'
  else {
    time = ':0' + minutes;
  }

  //In game timer
  if (hours > 9) {
    //Når 'hours' er over 9 så bliver 'time' til 'hours'+ forrige'time'
    time = hours + time;
  }
  //Ellers så skriv 0 foran 'hours'
  else {
    time = '0' + hours + time;
  }
  //indstillingerne for min tekst
  fill(119, 89, 73);
  textFont(pixel);
  textSize(35);
  text(time, 800, 40)
  text(days, 750, 40)
}

function updateTime() {
  //Den funktion der tæller tiden

  //Når updateTime kaldes på så læg 1 til minutter
  minutes++;
  //Når der er gået 60 'minutter' så er der gået 1 time
  if (minutes > 59) {
    minutes = 0;
    hours++;
    //Når der er gået 18 timer så bliver det en ny dag
    //Men nu står den bare direkte i game funktionen, da det betyder game over
  } /* else if (hours >= 18) {
    hours = 0;
    days++;
  } */
}

