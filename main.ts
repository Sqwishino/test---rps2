input.onButtonPressed(Button.A, function () {
    music.setBuiltInSpeakerEnabled(true)
})
input.onButtonPressed(Button.B, function () {
    music.setBuiltInSpeakerEnabled(false)
})
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
        music.playMelody("G A G C5 B B - - ", 100)
    } else if (hand == 2) {
        basic.showLeds(`
            . # # . .
            # . . # .
            . . # . .
            . # . . .
            # # # # #
            `)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Triangle, 3040, 200, 255, 0, 555, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    } else {
        basic.showLeds(`
            . # # # .
            . . . . #
            . . # # .
            . . . . #
            # # # # .
            `)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 200, 575, 255, 0, 900, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    }
})
let hand = 0
basic.showIcon(IconNames.EigthNote)
