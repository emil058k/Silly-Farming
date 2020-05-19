function interactions() {
    //Alle interaktionerne i en
    water();
    sow();
    sleep();
}

function water() {
    //Vanding af marker med w knappen
    for (r = 0; r < fieldSprite.length; r++) {
        if (player.overlap(fieldSprite[r]) & keyIsDown(87) & data.fields[r].watered == false) {
            //Hvis spilleren overlapper med en mark, w er nede, vandet er falsk,
            //så er den vandet og ændre 'animation'/billede
            data.fields[r].watered = true;
            fieldSprite[r].changeAnimation("wet");
        } else if (data.fields[r].watered == false) {
            //ellers hvis den ikke er vandet er den tør.
            fieldSprite[r].changeAnimation("dry");
        }
    }
}

function sow() {
    //Plantning af frø med q knappen
    for (r = 0; r < fieldSprite.length; r++) {
        if (player.overlap(fieldSprite[r]) & keyIsDown(81) & data.fields[r].sowed == false & data.fields[r].watered == true) {
            //Hvis marken er vandet og ikke sået, kan man så frø.
            data.fields[r].sowed = true;
            data.fields[r].growth = 1;
            //Der tegnes så en spire
            carrot[r].changeFrame(data.fields[r].growth);
        }
    }
}

function sleep() {
    //når man overlapper døren og trykke e knappen, går man i seng.
    if (player.overlap(door) & keyIsDown(69)) {
        mode = 2;
    }
}