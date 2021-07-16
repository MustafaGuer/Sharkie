class PoisonBubble extends MovableObject {


    constructor(x, y , otherDirection) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');

        this.otherDirection = otherDirection;
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw();
    }

    throw() {
        this.speedY = 5;
        this.applyGravity();

        setInterval(() => {
            if(this.otherDirection) {
                this.x -= 15;
            } else {
                this.x += 20;
            }
        }, 25);

    }
}