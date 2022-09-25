input.onSound(DetectedSound.Loud, function () {
    game.addScore(1)
})
input.setSoundThreshold(SoundThreshold.Loud, 199)
servos.P0.setAngle(160)
basic.forever(function () {
    if (game.score() == 2) {
        servos.P0.setAngle(160)
        game.setScore(0)
    }
})
basic.forever(function () {
    if (game.score() == 1) {
        servos.P0.setAngle(30)
    }
})
