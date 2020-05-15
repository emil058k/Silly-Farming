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
        if (player.overlap(fieldSprite[r]) & keyCode == 87 & data.fields[r].watered == false) {
            data.fields[r].watered = true;
            fieldSprite[r].changeAnimation("wet");
        } else if (data.fields[r].watered == false) {
            fieldSprite[r].changeAnimation("dry");
            player.changeAnimation("normal");
        }
    }
}

function sow() {
    //Plantning af frø med c(67) og r(82)
    for (r = 0; r < fieldSprite.length; r++) {
        if (player.overlap(fieldSprite[r]) & keyCode == 67 & data.fields[r].sowed == false & data.fields[r].watered == true) {
            data.fields[r].sowed = true;
            carrotSprite[r].changeAnimation("25%");
        } else if (player.overlap(fieldSprite[r])) {

        }
        else if (data.fields[r].watered == false) {
            carrotSprite[r].changeAnimation("growth" + [0]);
            player.changeAnimation("normal");
        }
    }
}

function sleep() {

}