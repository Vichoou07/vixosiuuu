input.onGesture(Gesture.Shake, function () {
	
})
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        # . . . #
        . # # # .
        `)
})
