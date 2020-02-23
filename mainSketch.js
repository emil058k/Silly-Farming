 let minutes = 0;
 let hours = 0;
 let days=0;

 function setup() {
   createCanvas(800,600);
   background(120);
   //setInterval er en funktion der egentlig bare er en timer
   //For hver 1000 milisekund, så kalder den på updateTime funktionen
   setInterval(updateTime, 1000);
 }

 function draw() {
   background(120);
   textSize(35);
   //Kalder på funktionen der skriver tiden
   drawTime();
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
 