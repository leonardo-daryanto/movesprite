namespace movement {
    /**
     * move the sprite
     */
    //% block
    export function moveSprite() : void {
        let mySprite = sprites.create(img`
            . . . . . . b b b b . . . . . .
            . . . . . . b 4 4 4 b . . . . .
            . . . . . . b b 4 4 4 b . . . .
            . . . . . b 4 b b b 4 4 b . . .
            . . . . b d 5 5 5 4 b 4 4 b . .
            . . . . b 3 2 3 5 5 4 e 4 4 b .
            . . . b d 2 2 2 5 7 5 4 e 4 4 e
            . . . b 5 3 2 3 5 5 5 5 e e e e
            . . b d 7 5 5 5 3 2 3 5 5 e e e
            . . b 5 5 5 5 5 2 2 2 5 5 d e e
            . b 3 2 3 5 7 5 3 2 3 5 d d e 4
            . b 2 2 2 5 5 5 5 5 5 d d e 4 .
            b d 3 2 d 5 5 5 d d d 4 4 . . .
            b 5 5 5 5 d d 4 4 4 4 . . . . .
            4 d d d 4 4 4 . . . . . . . . .
            4 4 4 4 . . . . . . . . . . . .
        `, SpriteKind.Player)

        controller.moveSprite(null)

        mySprite.setStayInScreen(true)
    }
    /**
     *  move the sprite from x, y, and speed
     */
    //% block
    export function moveSpriteTo(x: number, y: number, speed: number): void {
        let mySprite2 = sprites.create(img`
            . . . . . . b b b b a a . . . .
            . . . . b b d d d 3 3 3 a a . .
            . . . b d d d 3 3 3 3 3 3 a a .
            . . b d d 3 3 3 3 3 3 3 3 3 a .
            . b 3 d 3 3 3 3 3 b 3 3 3 3 a b
            . b 3 3 3 3 3 a a 3 3 3 3 3 a b
            b 3 3 3 3 3 a a 3 3 3 3 d a 4 b
            b 3 3 3 3 b a 3 3 3 3 3 d a 4 b
            b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e
            a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e
            a 3 3 3 3 3 3 3 d d a 4 4 4 e .
            a a 3 3 3 d d d a a 4 4 4 e e .
            . e a a a a a a 4 4 4 4 e e . .
            . . e e b b 4 4 4 4 b e e . . .
            . . . e e e e e e e e . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Player)
        story.spriteMoveToLocation(mySprite2, x, y, speed)
    }
}
