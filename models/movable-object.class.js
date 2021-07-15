class MovableObject extends DrawableObject {

    speed = 0.15;
    otherDirection = false;
    lastHit = 0;
    speedY = 0;
    acceleration = 1.5;
    energy = 100;

    applyGravity() {
        setInterval(() => {
            if(this.isAboveGround() || this.speed > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000/25);
    }

    isAboveGround() {
        if(this instanceof ThrowableObject) {
            return true;
        } 
    }



    hit() {
        this.energy -= 5;

        if(this.energy < 0) {
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

    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height
    }

    characterIsColliding(mo) {
        return this.x + this.width - 35 > mo.x &&
            this.y + this.height -50 > mo.y &&
            this.x - 70  < mo.x &&
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