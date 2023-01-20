function mover_pelota () {
    basic.pause(300)
    paleta.move(1)
    paleta.ifOnEdgeBounce()
    if (paleta.isTouching(paleta_1) || paleta.isTouching(paleta_2)) {
        paleta.set(LedSpriteProperty.Direction, 0)
        AZAR = Math.randomBoolean()
        if (AZAR == true) {
            paleta.turn(Direction.Right, 45)
        } else {
            paleta.turn(Direction.Left, 75)
        }
        PUNTOS += 1
    } else {
        if (paleta.get(LedSpriteProperty.Y) == 4) {
            basic.clearScreen()
            basic.showString("GAME OVER")
            basic.showString("PUNTOS:")
        }
    }
}
input.onButtonPressed(Button.A, function () {
    if (posicion_de_la_paleta > 0) {
        paleta_1.move(-1)
        paleta_2.move(-1)
        posicion_de_la_paleta += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (posicion_de_la_paleta < 3) {
        paleta_1.move(1)
        paleta_2.move(1)
        posicion_de_la_paleta += 1
    }
})
let AZAR = false
let posicion_de_la_paleta = 0
let paleta: game.LedSprite = null
let paleta_2: game.LedSprite = null
let paleta_1: game.LedSprite = null
paleta_1 = game.createSprite(2, 4)
paleta_2 = game.createSprite(3, 4)
paleta = game.createSprite(2, 0)
posicion_de_la_paleta += 2
let PUNTOS = 0
paleta.turn(Direction.Right, 90)
basic.forever(function () {
    mover_pelota()
})
