function tools() {
    sow(seeds)
    water
    crop.

        water
    crop.watered = true

    sleep
        .if, i, felt, så, næste, dag
}

function interactions() {
    if (player.overlap(field & keyCode == 87)) {
        player.changeAnimation("water");
        crop.watered = true
    }
    else {
        player.changeAnimation("normal");
    }
}