/* function tools() {
    sow(seeds)
    water
    crop.

        water
    crop.watered = true

    sleep
        .if, i, felt, så, næste, dag          
}mn,                  
 */
function interactions() {
    water();
    sow();
    sleep();
}

function water() {
    //Vanding med w
    for (r = 0; r < fieldSprite.length; r++) {
        if (player.overlap(fieldSprite[r]) & keyIsDown(87) & data.fields[r].watered == false) {
            data.fields[r].watered = true;
            fieldSprite[r].changeAnimation("wet");
        } else if (data.fields[r].watered == false) {
            fieldSprite[r].changeAnimation("dry");
        }
    }
}

function sow() {
    //Plantning af frø med q(81)
    for (r = 0; r < fieldSprite.length; r++) {
        if (player.overlap(fieldSprite[r]) & keyIsDown(81) & data.fields[r].sowed == false & data.fields[r].watered == true) {
            data.fields[r].sowed = true;
            data.fields[r].growth = 1;
            carrot[r].changeFrame(data.fields[r].growth);
        }
    }
}

function sleep() {
    if (player.overlap(door) & keyIsDown(69)) {
        growth++;
        mode = 2;
    }
}