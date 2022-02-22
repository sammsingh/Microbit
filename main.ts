enum RadioMessage {
    message1 = 49434,
    Left = 14947,
    Right = 32391,
    Back = 39633,
    Forward = 16348,
    CrazyJem = 34622
}
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.Left)
    basic.showLeds(`
        . . . . .
        . # # # .
        # # # . .
        . # # # .
        . . . . .
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendMessage(RadioMessage.Forward)
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        . # . # .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendMessage(RadioMessage.Back)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . # # # .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.Right)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . # # #
        . # # # .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendMessage(RadioMessage.CrazyJem)
    basic.showLeds(`
        . # # # .
        # . # . #
        # # # # #
        . # # # .
        . # # # .
        `)
})
