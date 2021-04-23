let Grad = 0
input.onButtonPressed(Button.A, function () {
    Grad = input.temperature()
    for (let index = 0; index < 3; index++) {
        basic.showString("Grad C")
        basic.showNumber(Grad)
    }
})
basic.forever(function () {
	
})
