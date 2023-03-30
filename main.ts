input.onButtonPressed(Button.A, function () {
    if (randint(0, 4) == 0) {
        basic.showString("a")
    } else if (randint(0, 4) == 1) {
        basic.showString("e")
    } else if (randint(0, 4) == 2) {
        basic.showString("i")
    } else if (randint(0, 4) == 2) {
        basic.showString("o")
    } else {
        basic.showString("u")
    }
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})
