scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    game.over(false, effects.confetti)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -100
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . f f f f . . . f f f f . . 
        . f 7 7 7 7 f f f 7 7 7 7 f . 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        f 7 7 1 1 1 7 7 7 1 1 1 7 7 f 
        f 7 7 1 f 1 7 7 7 1 f 1 7 7 f 
        f 7 7 1 1 1 f 7 f 1 1 1 7 7 f 
        f 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f f 7 f f f f f 7 f f . . 
        . . . f 7 f . . . f 7 f . . . 
        . . . f 7 f . . . f 7 f . . . 
        . . f 7 7 f . . . f 7 7 f . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . 
        . . . . f 7 7 7 7 7 f . . . . 
        f . . f 7 7 7 7 7 7 7 f . . . 
        7 f f f 7 7 1 1 1 7 7 f . . . 
        7 7 7 7 7 7 1 f 1 7 7 f . . . 
        f f f f 7 7 1 1 1 7 7 f . . . 
        . . . f 7 7 f 7 7 7 f . . . . 
        . . . f 7 f 7 7 7 7 f . . . . 
        . . . f 7 7 f 7 7 7 f . . . . 
        f f f f 7 7 1 1 1 7 7 f . . . 
        7 7 7 7 7 7 1 f 1 7 7 f . . . 
        7 f f f 7 7 1 1 1 7 7 f . . . 
        f . . f 7 7 7 7 7 7 7 f . . . 
        . . . . f 7 7 7 7 7 f . . . . 
        . . . . . f f f f f . . . . . 
        `,img`
        . . f f f f . . . f f f f . . 
        . . f 7 7 f . . . f 7 7 f . . 
        . . . f 7 f . . . f 7 f . . . 
        . . . f 7 f . . . f 7 f . . . 
        . . f f 7 f f f f f 7 f f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        f 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
        f 7 7 1 1 1 f 7 f 1 1 1 7 7 f 
        f 7 7 1 f 1 7 7 7 1 f 1 7 7 f 
        f 7 7 1 1 1 7 7 7 1 1 1 7 7 f 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 f f f 7 7 7 7 f . 
        . . f f f f . . . f f f f . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = 100
    animation.runImageAnimation(
    mySprite,
    [img`
        . . f f f f . . . f f f f . . 
        . . f 7 7 f . . . f 7 7 f . . 
        . . . f 7 f . . . f 7 f . . . 
        . . . f 7 f . . . f 7 f . . . 
        . . f f 7 f f f f f 7 f f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        f 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
        f 7 7 1 1 1 f 7 f 1 1 1 7 7 f 
        f 7 7 1 f 1 7 7 7 1 f 1 7 7 f 
        f 7 7 1 1 1 7 7 7 1 1 1 7 7 f 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        . f 7 7 7 7 f f f 7 7 7 7 f . 
        . . f f f f . . . f f f f . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . 
        . . . . f 7 7 7 7 7 f . . . . 
        f . . f 7 7 7 7 7 7 7 f . . . 
        7 f f f 7 7 1 1 1 7 7 f . . . 
        7 7 7 7 7 7 1 f 1 7 7 f . . . 
        f f f f 7 7 1 1 1 7 7 f . . . 
        . . . f 7 7 f 7 7 7 f . . . . 
        . . . f 7 f 7 7 7 7 f . . . . 
        . . . f 7 7 f 7 7 7 f . . . . 
        f f f f 7 7 1 1 1 7 7 f . . . 
        7 7 7 7 7 7 1 f 1 7 7 f . . . 
        7 f f f 7 7 1 1 1 7 7 f . . . 
        f . . f 7 7 7 7 7 7 7 f . . . 
        . . . . f 7 7 7 7 7 f . . . . 
        . . . . . f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . f f f f . . . f f f f . . 
        . f 7 7 7 7 f f f 7 7 7 7 f . 
        f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
        f 7 7 1 1 1 7 7 7 1 1 1 7 7 f 
        f 7 7 1 f 1 7 7 7 1 f 1 7 7 f 
        f 7 7 1 1 1 f 7 f 1 1 1 7 7 f 
        f 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f f 7 f f f f f 7 f f . . 
        . . . f 7 f . . . f 7 f . . . 
        . . . f 7 f . . . f 7 f . . . 
        . . f 7 7 f . . . f 7 7 f . . 
        . . f f f f . . . f f f f . . 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    game.over(false, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    game.over(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(false, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    game.over(false, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.confetti)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . f f f f . . . f f f f . . 
    . f 7 7 7 7 f f f 7 7 7 7 f . 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 1 1 1 7 7 7 1 1 1 7 7 f 
    f 7 7 1 f 1 7 7 7 1 f 1 7 7 f 
    f 7 7 1 1 1 7 f 7 1 1 1 7 7 f 
    f 7 7 7 7 7 f 7 f 7 7 7 7 7 f 
    . f 7 7 7 7 7 7 7 7 7 7 7 f . 
    . . f f 7 f f f f f 7 f f . . 
    . . . f 7 f . . . f 7 f . . . 
    . . . f 7 f . . . f 7 f . . . 
    . . f 7 7 f . . . f 7 7 f . . 
    . . f f f f . . . f f f f . . 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . f f f f . . . f f f f . . 
    . f 2 2 2 2 f f f 2 2 2 2 f . 
    f 2 2 2 f 2 2 2 2 2 f 2 2 2 f 
    f 2 2 2 2 f 2 2 2 f 2 2 2 2 f 
    f 2 2 1 1 1 f 2 f 1 1 1 2 2 f 
    f 2 2 1 f 1 2 2 2 1 f 1 2 2 f 
    f 2 2 1 1 1 2 f 2 1 1 1 2 2 f 
    f 2 2 2 2 2 f 2 f 2 2 2 2 2 f 
    . f 2 2 2 2 2 2 2 2 2 2 2 f . 
    . . f f 2 f f f f f 2 f f . . 
    . . . f 2 f . . . f 2 f . . . 
    . . . f 2 f . . . f 2 f . . . 
    . . f 2 2 f . . . f 2 2 f . . 
    . . f f f f . . . f f f f . . 
    `, SpriteKind.Enemy)
mySprite.ax = 35
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundColor(9)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile3`)
scene.cameraFollowSprite(mySprite)
mySprite2.follow(mySprite)
tiles.placeOnRandomTile(mySprite2, assets.tile`myTile4`)
info.setScore(0)
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(5)
})
forever(function () {
    music.setVolume(12)
    music.playMelody("G B A G A C5 B A ", 120)
})
