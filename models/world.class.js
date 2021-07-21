class World {
    canvas;
    level = level1;
    ctx;
    character = new Character();
    mobyDick = new MobyDick();
    mobyDickHealthBar = new MobyDickHealthBar();
    healthBar = new HealthBar();
    coinBar = new CoinBar();
    poisonBar = new PoisonBar();
    gameOver = new GameOver();
    winScreen = new WinGame();
    tryAgain = new TryAgain();
    keyboard;
    camera_x = 0;
    jellyfish = false;
    throwableObjects = [];
    throwablePoisonBubbles = [];
    coins = [];
    poisons = [];
    loose = false;
    win = false;
    musicVolume;
    soundVolume;
    play_music = new Audio('../audio/bgm2.mp3');
    claim_poison = new Audio('../audio/claimPoison.mp3');
    claim_coin = new Audio('../audio/coinGrab.mp3');
    dead_pufferfish_sound = new Audio('../audio/gameFishSound.mp3');
    dead_jellyfish_sound = new Audio('../audio/electroZap.mp3');
    fail_sound = new Audio('../audio/failSound.mp3');
    win_sound = new Audio('../audio/winSound.mp3');

    moby_dick_growl = new Audio('../audio/monsterSound.mp3');
    bite_sound = new Audio('../audio/biteSound.mp3');
    moby_dick_die = new Audio('../audio/monsterDie.mp3');
    moby_dick_pain = new Audio('../audio/monsterPain.mp3');

    poison_hurt = new Audio('../audio/punchGrunt.mp3');
    electro_zap = new Audio('../audio/electroZap.mp3');
    slap_sound = new Audio('../audio/slap.mp3');
    swim_sound = new Audio('../audio/vibrations.mp3');
    bubble_shoot = new Audio('../audio/bubbleShoot.mp3');


    constructor(canvas, keyboard, musicVolume, soundVolume) {

        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.musicVolume = musicVolume;
        this.soundVolume = soundVolume;
        this.draw();
        this.setWorld();
        this.run();
        this.runFast();
        this.setMusicSettings(this.musicVolume, this.soundVolume);
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
            this.checkCollectedObjects(this.level.coins, this.level.poisons);
            this.checkSlapEnemy();
            this.checkSlapMobyDick();
            this.checkThrowPoisonBubble();
            this.checkDistanceToEnemy();
            this.checkMobyDickAttackRange();
            this.checkIfWinOrLoose();
            this.checkKeyboard();
            this.checkHeight();
        }, 1000 / 10);
    }

    runFast() {
        setInterval(() => {
            this.checkCollisionWithBarrier();
            this.checkCollisionWithTheCave();
        }, 1000 / 60);
    }

    checkKeyboard() {
        if (this.keyboard.SPACE) {
            this.slap_sound.play();
        }
        if (this.keyboard.UP || this.keyboard.DOWN || this.keyboard.RIGHT || this.keyboard.LEFT) {
            this.swim_sound.play();
        }
        if (this.keyboard.D) {
            this.bubble_shoot.play();
        }
    }

    setMusicSettings() {
        this.play_music.play();
        this.play_music.volume = this.musicVolume;
        this.play_music.loop = true;

        this.claim_poison.volume = this.soundVolume;
        this.claim_coin.volume = this.soundVolume;
        this.dead_pufferfish_sound.volume = this.soundVolume;
        this.dead_jellyfish_sound.volume = this.soundVolume;
        this.fail_sound.volume = this.soundVolume;
        this.win_sound.volume = this.soundVolume;
        this.moby_dick_growl.volume = this.soundVolume;
        this.bite_sound.volume = this.soundVolume;
        this.moby_dick_die.volume = this.soundVolume;
        this.moby_dick_pain.volume = this.soundVolume;
        this.poison_hurt.volume = this.soundVolume;
        this.electro_zap.volume = this.soundVolume;
        this.slap_sound.volume = this.soundVolume;
        this.swim_sound.volume = this.soundVolume;
        this.bubble_shoot.volume = this.soundVolume;
    }

    checkIfWinOrLoose() {
        if (this.character.isDead()) {
            this.loose = true;
            show('tryAgainBtn');
            this.fail_sound.play();
        }
        if (this.mobyDick.isDead()) {
            show('tryAgainBtn');
            this.win = true;
            this.win_sound.play();
            this.moby_dick_die.play();
        }
    }

    checkCollisionWithBarrier() {
        this.level.separateBarrier.forEach(barrier => {
            if (this.character.isCollidingLeft(barrier)) {
                this.character.collision = true;
                this.character.x -= 10;
                this.character.y -= 5;
            } else if (this.character.isCollidingRight(barrier) && this.character.otherDirection) {
                this.character.collision = true;
                this.character.x += 10;
                this.character.y -= 5;
            } else if (this.character.isCollidingTop(barrier)) {
                this.character.collision = true;
                this.character.y -= 10;
            } else if (this.character.isCollidingBottom(barrier)) {
                this.character.collision = true;
                this.character.y += 10;
            } else {
                this.character.collision = false;
            }
        });
    }

    checkCollisionWithTheCave() {
        this.level.barrier.forEach(barrier => {
            this.character.isCollidingCave(barrier)
            if (this.character.caveTopBarrier) {
                this.character.collision = true;
                this.character.y += 10;
            } else if (this.character.caveBottomBarrier
            ) {
                this.character.collision = true;
                this.character.y -= 10;
            } else {
                this.character.collision = false;
            }
        })
    }

    checkDistanceToEnemy() {
        this.level.jellyfishes.forEach((mo, index) => {
            if (this.character.isNear(mo, 200)) {
                this.level.jellyfishes[index].jellyfishDanger = true;
            } else {
                this.level.jellyfishes[index].jellyfishDanger = false;
            }
        });

        this.level.pufferfishes.forEach((mo, index) => {
            if (this.character.isNear(mo, 150)) {
                this.level.pufferfishes[index].pufferfishTransition = false;
                this.level.pufferfishes[index].pufferfishDanger = true;
            } else if (this.character.isNear(mo, 200)) {
                this.level.pufferfishes[index].pufferfishTransition = true;
            } else {
                this.level.pufferfishes[index].pufferfishDanger = false;
                this.level.pufferfishes[index].pufferfishTransition = false;
            }
        })

        if (this.character.isNear(this.mobyDick, 300) && !this.mobyDick.isDead() /* && !this.character.isOtherSide(this.mobyDick)*/) {
            this.mobyDick.animateIntro();
            this.character.checkPoint = true;
            this.moby_dick_growl.play();

            this.mobyDick.otherDirection = false;
            this.mobyDick.x -= this.mobyDick.speedX;
        } 
        //  else if (this.character.isOtherSide(this.mobyDick) && this.character.isNearOtherSide(this.mobyDick, 300)) {
        //     this.mobyDick.otherDirection = true;
        //     this.mobyDick.x += this.mobyDick.speedX;
        // }
    }

    checkHeight() {
        if (this.character.isAbove(this.mobyDick)) {
            this.mobyDick.y -= this.mobyDick.speedY;
        } else if (this.character.isBeneath(this.mobyDick)) {
            this.mobyDick.y += this.mobyDick.speedY;
        }
    }

    checkMobyDickAttackRange() {
        if (this.character.isNear(this.mobyDick, 100)) {
            this.mobyDick.attack = true;
            this.mobyDick.x -= 5;
            this.bite_sound.play();
        // } else if(this.character.isNearOtherSide(this.mobyDick, 100) && this.character.isOtherSide(this.mobyDick)) {
        //     this.mobyDick.attack = true;
        //     // this.mobyDick.x += 20;
        //     this.bite_sound.play();
        } else {
            this.mobyDick.attack = false;
        }
    }

    checkCollectedObjects(coins, poisons) {
        coins.forEach((coin, index) => {
            if (this.character.isCollidingEnemiesAndCollectable(coin)) {
                this.coins.push(coin);
                coins.splice(index, 1);
                this.coinBar.setPercentage(this.coins.length);
                this.claim_coin.play();
            }
        });
        poisons.forEach((poison, index) => {
            if (this.character.isCollidingEnemiesAndCollectable(poison)) {
                this.poisons.push(poison);
                poisons.splice(index, 1);
                this.poisonBar.setPercentage(this.poisons.length);
                this.claim_poison.play();
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
                    this.dead_jellyfish_sound.play();
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
                this.moby_dick_pain.play();
            }
        })
    }

    checkSlapEnemy() {
        this.level.pufferfishes.forEach((pufferfish, index) => {
            if (this.character.isColliding(pufferfish) && this.keyboard.SPACE && !this.character.isDead()) {
                this.level.pufferfishes[index].hit();
                this.dead_pufferfish_sound.play();
                setTimeout(() => {
                    this.level.pufferfishes.splice(index, 1);
                }, 1000);
            }
        })
    }

    checkSlapMobyDick() {
        if (this.character.isColliding(this.mobyDick) && this.keyboard.SPACE && !this.character.isDead()) {
            this.mobyDick.hit();
            this.mobyDickHealthBar.setPercentage(this.mobyDick.energy);
            this.moby_dick_pain.play();
        }
    }

    checkCollisions() {
        this.level.jellyfishes.forEach((jellyfish) => {
            if (this.character.isCollidingEnemiesAndCollectable(jellyfish)) {
                this.character.hit();
                this.jellyfish = true;
                this.electro_zap.play();
            }
        })

        this.level.pufferfishes.forEach((pufferfish) => {
            if (this.character.isCollidingEnemiesAndCollectable(pufferfish)) {
                this.character.hit();
                this.jellyfish = false;
                this.poison_hurt.play();
            }
        })

        if (this.character.isCollidingEndboss(this.mobyDick) && !this.mobyDick.isDead()) {
            this.character.hit();
            this.jellyfish = false;
            this.character.collision = true;
            this.character.x -= 5;
        }
        this.healthBar.setPercentage(this.character.energy);
    }

    setWorld() {
        this.character.world = this;
        this.tryAgain.world = this;
        this.mobyDick.world = this;
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
        this.addObjectsToMap(this.level.floor);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.throwablePoisonBubbles);
        this.addObjectsToMap(this.level.barrier);
        this.addObjectsToMap(this.level.separateBarrier);
        if (this.character.checkPoint) {
            this.addToMap(this.mobyDick);
            this.mobyDick.isIn = true;
        }

        // ------SPACE FOR FIXED OBJECTS------
        this.ctx.translate(-this.camera_x, 0);

        if (this.loose) {
            this.addGameOverToMap(this.gameOver);
            this.addGameOverToMap(this.tryAgain);
        }

        if (this.win) {
            this.addGameOverToMap(this.winScreen);
            this.addGameOverToMap(this.tryAgain);
        }

        if (this.mobyDick.isIn) {
            this.addToMap(this.mobyDickHealthBar);
        }

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

    addGameOverToMap(object) {
        object.draw(this.ctx);
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
