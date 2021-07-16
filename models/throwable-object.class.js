class ThrowableObject extends MovableObject {


    constructor(x, y, otherDirection) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');

        this.otherDirection = otherDirection;
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw();
    }
 
    throw() {
        this.speedY = 14;
        this.applyGravity();

        setInterval(() => {
            if (this.otherDirection) {
                this.x -= 7;
            } else {
                this.x += 7;
            }
        }, 25);
    }

}