function Character_Face_Logic () {
    if (Speed_Y < -1) {
        mySprite.setImage(img`
            . . . 8 8 . . . 
            . . . 8 8 . . . 
            . . 8 8 8 8 . . 
            . . 8 8 8 8 . . 
            . 9 8 8 8 8 9 . 
            . 6 9 9 9 9 6 . 
            . 6 6 . . 6 6 . 
            . 6 . . . . 6 . 
            `)
    }
    if (Speed_Y > 1) {
        mySprite.setImage(assets.image`myImage5`)
    }
    if (Speed_X > 1) {
        mySprite.setImage(assets.image`myImage2`)
    }
    if (Speed_X < -1) {
        mySprite.setImage(assets.image`myImage1`)
    }
    if (Speed_Y < -4 && Speed_X < -4) {
        mySprite.setImage(assets.image`myImage0`)
    }
    if (Speed_Y < -4 && Speed_X > 4) {
        mySprite.setImage(assets.image`myImage`)
    }
    if (Speed_Y > 4 && Speed_X < -4) {
        mySprite.setImage(assets.image`myImage3`)
    }
    if (Speed_Y > 4 && Speed_X > 4) {
        mySprite.setImage(assets.image`myImage4`)
    }
}
function Wrap_Logic () {
    if (mySprite.y < 0) {
        mySprite.y = 120
    }
    if (mySprite.y > 120) {
        mySprite.y = 0
    }
    if (mySprite.x < 0) {
        mySprite.x = 160
    }
    if (mySprite.x > 160) {
        mySprite.x = 0
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        1 1 1 1 
        1 1 1 1 
        1 1 1 1 
        1 1 1 1 
        `, mySprite, Speed_X * 2, Speed_Y * 2)
    projectile.setFlag(SpriteFlag.DestroyOnWall, true)
    projectile.setFlag(SpriteFlag.AutoDestroy, true)
    pause(Shoot_Delay)
})
function Move_Logic () {
    if (controller.down.isPressed()) {
        Speed_Y += 2
    }
    if (controller.up.isPressed()) {
        Speed_Y += -2
    }
    if (controller.right.isPressed()) {
        Speed_X += 2
    }
    if (controller.left.isPressed()) {
        Speed_X += -2
    }
}
function Friction_Logic () {
    if (Speed_Y <= -1) {
        Speed_Y += 1
    }
    if (Speed_Y >= 1) {
        Speed_Y += -1
    }
    if (Speed_X <= -1) {
        Speed_X += 1
    }
    if (Speed_X >= 1) {
        Speed_X += -1
    }
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Speed_X = Speed_X * -20
    Speed_Y = Speed_Y * -20
    pause(5000)
})
function Max_Speed_Logic () {
    if (Speed_X < -75) {
        Speed_X = -75
    }
    if (Speed_X > 75) {
        Speed_X = 75
    }
    if (Speed_Y < -75) {
        Speed_Y = -75
    }
    if (Speed_Y > 75) {
        Speed_Y = 75
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pause(500)
})
let projectile: Sprite = null
let Shoot_Delay = 0
let Speed_X = 0
let Speed_Y = 0
let mySprite: Sprite = null
info.setScore(0)
scene.setBackgroundColor(2)
color.setPalette(
color.originalPalette
)
scene.setBackgroundImage(img`
    fffffffffffffffffffff5fffffffffffff5ffffbbbbbbbbbbbb333333333333333333333bbbbbbbbbbbffffffffffffffffffffffffffffffffbbbbbbbbbbb333333333333333333333333333333333
    ffffffffffffffffffffffffffffffffffffffffbbbbbb33333b333333333333333333333bbbbbbbbbbbffffffffffffffffffffffffffffffffbbbbbbbbbbb333333333333333333333333333333333
    ffffffffffffffffffffffffffffffffffffffffbbbbbb333333333333333333333333333bbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbbb333333333333333333333333333333333
    ffffffffffffffffffffffffffffffffffffffffbbbbbb3333333333333333333333333bbbbbbbbbbbbbfffffffffffffffffffffffffffffffffbbbbbbbbb3333333333333333333333333333333333
    ffffffffffffffffffffffffffffffffffffffffbbbbbb33333333333333333333333bbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffbbbbbbbb3333333333333333333333333333333333
    ffff5ffffffffffffffffffffffffffffffffffbbbbbbb3333333333333333333333bbbbbbbbbbbbbbffffffffff5ffffffffffffffffffffffffffbbbbbbb3333333333333333333333333333333333
    ffffffffffffff5ffffffffffffffffffffffffbbbbbbb333333333333333333333bbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffbbbbbbb3333333333333333333333333333333333
    ffffffffffffffffffffffffffff5fffffffffbbbbbbbbb3333333333333333333bbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffbbbbbb3333333333333333333333333333333333
    fffffff5fffffffffffffffffff555ffffffffbbbbbbbbb3333333333333333333bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffbbbbbb333333333333333333333333333333333
    ffffffffffffffffffffffffff55555fffffffbbbbbbbbbb333333333333333333bbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffbbbbbbbb3333333333333333333333333333333
    fffffff5fffffffffffffffffff555fffffffbbbbbbbbbbb333333333333333333bbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbb33333333333333333333333333333
    ffffffffffffffffffffffffffff5fffffffbbbbbbbbbbbb333333333333333333bbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbb333333333333333333333333333
    ffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbb3333333333333333bbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbb3333333333333333333333333
    ffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbb3333333333333bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbb33333333333333333333333
    ffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbb3333333333bbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbb333333333333333333333
    ffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbb333333333bbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbb33333333333333333333
    fffff5ffffffffffffffffffffffffffffffbbbbbbbbbbbbbbb33333bbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbb333333333333333333
    ffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbb33333333333333333
    ffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbb3333333333333333
    ffffffffffffffffffff5fffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbb33333333333333
    ffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbb3333333333333
    ffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbb333333333333
    fffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb33333333333
    fffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbb3333333333
    ffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbb333333333
    ffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbb33333333
    ffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbb3333333
    f5fffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbb3333333
    fffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbb333333
    ffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbfffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb33333
    fffffffffff5fffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb3333
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbb333
    ffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbb
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbb
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbb
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbb
    5ffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbb
    ff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbb
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbb
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbb
    ffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbb
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffff5fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff5ffffffffffff5fffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffff5ffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbb333333bbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbb33333333bbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbb333333333333bbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbb333333333333333333bbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbb3333333333333333333333bbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbb33333333333333333333333bbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbb33333333333333333333333bbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffff
    5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbb3333333333333333333333333bbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbb33333333333333333333333333bbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffff5ffffffffffffffffffffffffffff5fffffffffffffffffffbbbbbbbbbbbb33333333333333333333333333bbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffbbbbbbbbbbbb3333333333333333333333333333bbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbb33333333333333333333333333333bbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbb33333333333333333333333333333bbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbb333333333333333333333333333333bbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbb333333333333333333333333333333bbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbb333333333333333333333333333333bbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbb33333333333333333333333333333bbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbb3333333333333333333333333333bbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff5ffffffff5ffffffbbbbbbbbbbbbbbbbb333333333333333333333333333bbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffbbbbbbbbbbbbbbbbb33333333333333333333333333bbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffbbbbbbbbbbbbbbbbb33333333333333333333333333bbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffff
    fffffffffffffff5ffffffffffffffffffffffffffff555ffffffffffffffffbbbbbbbbbbbbbbbb33333333333333333333333333bbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffbbbbbbbbbbbbbbbbb3333333333333333333333333bbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffbbbbbbbbbbbbbbbbbbb33333333333333333333333bbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffbbbbbbbbbbbbbbbbbbbb3333333333333333333bbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff55555555555fffffffffffffbbbbbbbbbbbbbbbbbbbbbbb333333bbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffff
    fffffffff5fffffffffffffffffffff5fffff55555555555555555fffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff55555555555ffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff5ffffffffffffffffffffffffff555fffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffff
    5fffffffffffffffffffffff5ffffffffffffffffffff5ffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff5fffffffffffffff5ffffffffffffffffffffffffffffffffffffffbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
let myEnemy = sprites.create(img`
    2 . . . . . . . . . . . . . . 2 
    . 2 . . . . . . . . . . . . 2 . 
    . . 2 . . . . . . . . . . 2 . . 
    . . . 2 . . . . . . . . 2 . . . 
    . . . . 2 . . . . . . 2 . . . . 
    . . . . . 2 . . . . 2 . . . . . 
    . . . . . . 2 . . 2 . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . 2 . . 2 . . . . . . 
    . . . . . 2 . . . . 2 . . . . . 
    . . . . 2 . . . . . . 2 . . . . 
    . . . 2 . . . . . . . . 2 . . . 
    . . 2 . . . . . . . . . . 2 . . 
    . 2 . . . . . . . . . . . . 2 . 
    2 . . . . . . . . . . . . . . 2 
    `, SpriteKind.Enemy)
mySprite = sprites.create(img`
    . . . 8 8 . . . 
    . . . 8 8 . . . 
    . . 8 8 8 8 . . 
    . . 8 8 8 8 . . 
    . 9 8 8 8 8 9 . 
    . 6 9 9 9 9 6 . 
    . 6 6 . . 6 6 . 
    . 6 . . . . 6 . 
    `, SpriteKind.Player)
mySprite.startEffect(effects.trail)
Speed_Y = 0
Speed_X = 0
Shoot_Delay = 250
info.setLife(3)
myEnemy.setPosition(160, 0)
forever(function () {
    mySprite.setVelocity(Speed_X, Speed_Y)
    Move_Logic()
    Friction_Logic()
    Wrap_Logic()
    Max_Speed_Logic()
    Character_Face_Logic()
    console.logValue("Speed Y", Speed_Y)
    console.logValue("Speed X", Speed_X)
    if (info.life() == 1) {
        mySprite.startEffect(effects.fire, 50)
    }
    if (info.life() == 0) {
        color.startFade(color.originalPalette, color.GrayScale)
        color.FadeToBlack.startScreenEffect()
        mySprite.startEffect(effects.disintegrate)
    }
    myEnemy.follow(mySprite, 25)
})
