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
    growth = 0;
    //Plantning af frø med c(67) og r(82)
    for (r = 0; r < fieldSprite.length; r++) {
        if (player.overlap(fieldSprite[r]) & keyIsDown(67) & data.fields[r].sowed == false & data.fields[r].watered == true) {
            data.fields[r].sowed = true;
            carrot[r].changeFrame(1);

        } else if (data.fields[r].watered == false) {
        }
    }
}

/* function sleep() {
    if (player.overlap(door) & keyIsDown(67) & data.fields[r].sowed == false & data.fields[r].watered == true) {
        data.fields[r].sowed = true;
        growth++;
        carrot[r].changeFrame(growth);

    }
} */