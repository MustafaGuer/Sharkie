class World {
    canvas;
    level = level1;
    ctx;
    character = new Character();
    mobyDick = new MobyDick();
    mobyDickHealthBar = new MobyDickHealthBar(this.mobyDick.x, this.mobyDick.y, this.mobyDick.width);
    healthBar = new HealthBar();
    coinBar = new CoinBar();
    poisonBar = new PoisonBar();
    keyboard;
    camera_x = 0;
    jellyfish = false;
    throwableObjects = [];
    throwablePoisonBubbles = [];
    coins = [];
    poisons = [];


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
            this.checkCollectedObjects(this.level.coins, this.level.poisons);
            this.checkSlapEnemy();
            this.checkThrowPoisonBubble();
        }, 1000 / 10);
    }

    checkCharacterCheckpoint() {
        if (this.character.x > 3800) {

            this.intro = true;
        }
    }

    checkCollectedObjects(coins, poisons) {
        coins.forEach((coin, index) => {
            if (this.character.characterIsColliding(coin)) {
                this.coins.push(coin);
                coins.splice(index, 1);
                this.coinBar.setPercentage(this.coins.length);
            }
        });
        poisons.forEach((poison, index) => {
            if (this.character.characterIsColliding(poison)) {
                this.poisons.push(poison);
                poisons.splice(index, 1);
                this.poisonBar.setPercentage(this.poisons.length);
            }
        })
    }

    checkThrowObjects() {
        if (this.keyboard.D && !this.character.isDead() && !this.character.otherDirection) {
            this.bubble = new ThrowableObject(this.character.x + 150, this.character.y + 105, this.character.otherDirection);
            this.throwableObjects.push(this.bubble);
        } else if (this.keyboard.D && !this.character.isDead() && this.character.otherDirection) {
            this.bubble = new ThrowableObject(this.character.x - 40, this.character.y + 105, this.character.otherDirection);
            this.throwableObjects.push(this.bubble);
        }
        this.checkThrowedCollision();
    }

    checkThrowedCollision() {
        this.level.jellyfishes.forEach((jellyfish, index) => {
            this.throwableObjects.forEach((bubble, number) => {
                if (bubble.isColliding(jellyfish)) {
                    this.level.jellyfishes[index].hit();
                    this.throwableObjects.splice(number, 1);
                    setTimeout(() => {
                        this.level.jellyfishes.splice(index, 1);
                    }, 400);

                    this.dead = true;
                }
            })
        })
    }

    checkThrowPoisonBubble() {
        if (this.keyboard.F && !this.character.isDead() && !this.character.otherDirection && this.poisons.length > 0) {
            this.poisonBubble = new PoisonBubble(this.character.x + 150, this.character.y + 105, this.character.otherDirection);
            this.throwablePoisonBubbles.push(this.poisonBubble);
            this.poisons.splice(0, 1);
            this.poisonBar.setPercentage(this.poisons.length);
        } else if (this.keyboard.F && !this.character.isDead() && this.character.otherDirection && this.poisons.length > 0) {
            this.poisonBubble = new PoisonBubble(this.character.x - 40, this.character.y + 105, this.character.otherDirection);
            this.throwablePoisonBubbles.push(this.poisonBubble);
            this.poisons.splice(0, 1);
            this.poisonBar.setPercentage(this.poisons.length);
        }
        this.checkCollisionWithPoisonBubble();
    }

    checkCollisionWithPoisonBubble() {
        this.throwablePoisonBubbles.forEach(poisonBubble => {
            if (poisonBubble.isColliding(this.mobyDick)) {
                this.mobyDick.hit();
                this.mobyDickHealthBar.setPercentage(this.mobyDick.energy);
            }
        })
    }

    checkSlapEnemy() {
        this.level.pufferfishes.forEach((pufferfish, index) => {
            if (this.character.isColliding(pufferfish) && this.keyboard.SPACE && !this.character.isDead()) {
                this.level.pufferfishes[index].hit();
                setTimeout(() => {
                    this.level.pufferfishes.splice(index, 1);
                }, 400);
            }
        })
    }

    checkSlapMobyDick() {
        if (this.character.isColliding(this.mobyDick) && this.keyboard.SPACE && !this.character.isDead()) {
            this.mobyDick.hit();
        }
    }

    checkCollisions() {
        this.level.jellyfishes.forEach((jellyfish) => {
            if (this.character.characterIsColliding(jellyfish)) {
                this.character.hit();
                this.jellyfish = true;
            }
        })

        this.level.pufferfishes.forEach((pufferfish) => {
            if (this.character.characterIsColliding(pufferfish)) {
                this.character.hit();
                this.jellyfish = false;
            }
        })

        if(this.character.characterIsColliding(this.mobyDick) && !this.mobyDick.isDead()) {
            this.character.hit();
        }
        this.healthBar.setPercentage(this.character.energy);
    }

    setWorld() {
        this.character.world = this;
        // this.mobyDick.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.pufferfishes);
        this.addObjectsToMap(this.level.jellyfishes);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.poisons);
        this.addToMap(this.character);
        this.addToMap(this.mobyDick);
        this.addObjectsToMap(this.level.floor);
        this.addToMap(this.mobyDickHealthBar);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.throwablePoisonBubbles);

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
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
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
