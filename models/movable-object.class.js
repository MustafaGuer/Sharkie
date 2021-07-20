class MovableObject extends DrawableObject {

    speed = 0.15;
    otherDirection = false;
    lastHit = 0;
    speedY = 0;
    acceleration = 1.5;
    energy = 100;
    checkPoint = false;
    

    caveTopBarrier;
    caveBottomBarrier;


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speed > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        }
    }

    hit() {
        this.energy -= 5;

        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }

    isCollidingCave(mo) {
        this.caveTopBarrier = this.x + this.width > mo.x &&
            this.x < mo.x + mo.width &&
            this.y + 50 < mo.y + 50


        this.caveBottomBarrier = this.x + this.width > mo.x &&
            this.x < mo.x + mo.width &&
            this.y + this.height - 50 > mo.y + mo.height - 120

    }

    isCollidingLeft(mo) {
        return this.x + this.width - 35 > mo.x &&
            this.x - 35 < mo.x + mo.width &&
            this.x + this.width < mo.x + mo.width &&
            this.y + this.height - 50 > mo.y &&
            this.y + 125 > mo.y
    }

    isCollidingRight(mo) {
        return this.x + 35 < mo.x + mo.width &&
            this.x > mo.x &&
            this.y + this.height - 50 > mo.y &&
            this.y + 125 > mo.y
    }

    isCollidingTop(mo) {
        return this.y + this.height - 50 > mo.y &&
            this.x + this.width - 35 > mo.x &&
            this.x < mo.x + mo.width &&
            this.x + 70 < mo.x + mo.width
    }

    isCollidingBottom(mo) {
        return this.y - 100 > mo.y + mo.height &&
            this.x + this.width - 35 > mo.x &&
            this.x < mo.x + mo.width &&
            this.x + 70 < mo.x + mo.width
    }

    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height
    }

    characterIsColliding(mo) {
        return this.x + this.width - 35 > mo.x &&
            this.y + this.height - 100 > mo.y &&
            this.x - 70 < mo.x &&
            this.y + 130 < mo.y + mo.height
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveUp() {
        this.y -= this.speed;
    }

    moveDown() {
        this.y += this.speed;
    }
}