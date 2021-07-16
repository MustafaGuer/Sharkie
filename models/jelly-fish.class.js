class JellyFish extends MovableObject {
    speed = 2;

    constructor(x, y) {
        super().loadImage('img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png');
        this.loadImages(this.IMAGES_REGULAR);

        this.x = x;
        this.y = y;
        this.energy = 5;

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.otherDirection = this.otherDirection ? false : true;
        }, 3000);

        setInterval(() => {
            if (this.otherDirection) {
                this.y += this.speed;
            } else {
                this.y -= this.speed;
            }
        }, 50);

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else {
                this.playAnimation(this.IMAGES_REGULAR);
            }
        }, 100);
    }


    IMAGES_REGULAR = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png'
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/2 Jelly fish/Dead/green/g1.png',
        'img/2.Enemy/2 Jelly fish/Dead/green/g2.png',
        'img/2.Enemy/2 Jelly fish/Dead/green/g3.png',
        'img/2.Enemy/2 Jelly fish/Dead/green/g4.png'
    ];
}