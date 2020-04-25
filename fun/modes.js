function menu(){
        //I menuen sættes timeren til nul, for den tæller nemlig hele tiden
        minutes, hours, days = 0;

        //Knappen
        background(180);
    
        //Hover effect. Når markøren er over knappen så skifter baggrunden.
        if (mode == 0 && mouseX >= 300 && mouseX <= 500 && mouseY >= 336 && mouseY <= 386) {
          background(150);
        }
    
        //Selve knappen
        rectMode(CENTER);
        noStroke();
        rect(width / 2, height / 5 * 3, 200, 50)
}

function game(){
    textSize(35);

    //Kalder på funktionen der skriver tiden
    drawTime();

    //Når timeren når over 18 så går det videre til game over
    if (hours > 18) {
      mode++
    }
    drawSprites();
    movement();
    limits();
    stairs();
    image(dirt,0,0)
    
}

function gameOver(){
    background(0);

    //Genstartknappen
    rect(width - 200, height - 50, 200, 50);
    player.position.x = 520+100/2;
    player.position.y = 480-140/2;
}