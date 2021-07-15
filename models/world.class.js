class World {
    canvas;
    level = level1;
    ctx;
    character = new Character();
    healthBar = new HealthBar();
    coinBar = new CoinBar();
    poisonBar = new PoisonBar();
    keyboard;
    camera_x = 0;
    jellyfish = false;
    throwableObjects = [];

    constructor(canvas, keyboard) {

        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 1000/10);
    }

    checkThrowObjects() {
        if(this.keyboard.D) {
            let bubble = new ThrowableObject(this.character.x+150, this.character.y+105);
            this.throwableObjects.push(bubble);
        }
    }

    checkCollisions() {
        this.level.jellyfishes.forEach((jellyfish) => {
            if(this.character.isColliding(jellyfish)) {
                this.character.hit();
                this.jellyfish = true;
            }
        })

        this.level.pufferfishes.forEach((pufferfish) => {
            if(this.character.isColliding(pufferfish)) {
                this.character.hit();
                this.jellyfish = false;
            }
        })
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.pufferfishes);
        this.addObjectsToMap(this.level.jellyfishes);
        // this.addToMap(this.level.mobydick);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.poisons);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.floor);
        this.addObjectsToMap(this.throwableObjects);

        // ------SPACE FOR FIXED OBJECTS------
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.healthBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.poisonBar);
        this.ctx.translate(this.camera_x, 0);
    
        this.ctx.translate(-this.camera_x, 0);




        let self = this;
        requestAnimationFrame(() => {
            self.draw();
        });
    }

    addToMap(mo) {
        if(mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if(mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1; 
    }

    flipImageBack(mo) {
        this.ctx.restore();
        mo.x = mo.x * -1;
    }
}
