 function drawTime() {
    //Ikke angivet globalt da den kun bruges her
     let time;
     //Hvis minutter under 9 så er time :minutter
    if (minutes>9){
     time=':'+minutes;
    } 
    //Ellers så skriv 0 foran minutter
    else {
     time=':0'+minutes;
    }
 
    if (hours>9){
      //Når timer er over 9 så er det timer+minutter
     time=hours+time;
    } 
    //Ellers så skriv 0 foran minutter
    else{
     time='0'+hours+time;
    }
 
   text(time, 650,40)
  }
 
  function updateTime() {
    //Når updateTime kaldes på så læg 1 til minutter
    minutes++;
    //Når der er gået 60 'minutter' så er der gået 1 time
    if(minutes>59){
      minutes=0;
      hours++;
    } else if (hours>13){
      days++;
    }
  }
  
function drawTime() {
  //Ikke angivet globalt da den kun bruges her
   let time;
   //Hvis minutter under 9 så er time :minutter
  if (minutes>9){
   time=':'+minutes;
  } 
  //Ellers så skriv 0 foran minutter
  else {
   time=':0'+minutes;
  }

  if (hours>9){
    //Når timer er over 9 så er det timer+minutter
   time=hours+time;
  } 
  //Ellers så skriv 0 foran minutter
  else{
   time='0'+hours+time;
  }

 text(time, 650,40)
}

function updateTime() {
  //Når updateTime kaldes på så læg 1 til minutter
  minutes++;
  //Når der er gået 60 'minutter' så er der gået 1 time
  if(minutes>59){
    minutes=0;
    hours++;
  } else if (hours>13){
    days++;
  }
}