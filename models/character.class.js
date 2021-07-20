class Character extends MovableObject {

    height = 250;
    width = 200;
    y = 130;
    speed = 7;
    world;
    afkTimer = 0;
    energy = 100;
    swimAnimateVar = false;
    attackAnimateVar = false;
    barrier = false;
    swim_sound = new Audio('../audio/vibrations.mp3');
    slap_sound = new Audio('../audio/slap.mp3');
    bubble_shoot = new Audio('../audio/bubbleShoot.mp3');
    electro_zap = new Audio('../audio/electroZap.mp3');
    poison_hurt = new Audio('../audio/punchGrunt.mp3');
    collision = false;
    fail_sound = new Audio('../audio/failSound.mp3');

    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE_START);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_FIN_SLAP);
        this.loadImages(this.IMAGES_WHALE_ATTACK);
        this.loadImages(this.IMAGES_BUBBLE_TRAP);
        this.loadImages(this.IMAGES_POISONED);
        this.loadImages(this.IMAGES_ELECTRIC_SHOCK);
        this.loadImages(this.IMAGES_ELECTROSHOCK_DEAD);
        this.loadImages(this.IMAGES_POISONED_DEAD);


        this.hurtAndDeadAnimate();
        this.swimAnimate();
        this.attackAnimate();
        this.moveAnimate();
        this.animate();
    }

    swimAnimate() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                if (!this.isDead()) {
                    this.playAnimation(this.IMAGES_SWIM);
                    this.swimAnimateVar = true;
                    this.swim_sound.play();
                }
            } else {
                this.swimAnimateVar = false;
            }
        }, 1000 / 15);
    }

    attackAnimate() {
        setInterval(() => {
            if (this.world.keyboard.D && !this.isDead()) {
                this.playAnimation(this.IMAGES_BUBBLE_TRAP);
                this.bubble_shoot.play();
                this.resetAfkTime();
                this.attackAnimateVar = true;
            } else if (this.world.keyboard.SPACE && !this.isDead()) {
                this.playAnimation(this.IMAGES_FIN_SLAP);
                this.resetAfkTime();
                this.slap_sound.play();
                this.attackAnimateVar = true;
            } else if (this.world.keyboard.F && !this.isDead()) {
                this.playAnimation(this.IMAGES_WHALE_ATTACK);
                this.resetAfkTime();
                this.attackAnimateVar = true;
            } else {
                this.attackAnimateVar = false;
            }
        }, 1000 / 30);
    }

    animate() {
        setInterval(() => {
            if (this.afkTimer < 50 && !this.swimAnimateVar && !this.attackAnimateVar && !this.isDead()) {
                this.playAnimation(this.IMAGES_IDLE);
                this.afkTimer++;
            } else if (this.afkTimer >= 50 && this.afkTimer <= 60) {
                this.playAnimation(this.IMAGES_LONG_IDLE_START);
                this.afkTimer++;
            } else if (this.afkTimer == 61) {
                this.playAnimation(this.IMAGES_LONG_IDLE);
            }
        }, 1000 / 7);
    }

    hurtAndDeadAnimate() {
        let animationsInterval = setInterval(() => {
            if (this.isDead() && this.world.jellyfish) {
                this.playAnimation(this.IMAGES_ELECTROSHOCK_DEAD);
                this.electroDead();
                this.fail_sound.play();
                setTimeout(() => {
                    clearInterval(animationsInterval);
                }, 250);
            } else if (this.isDead()) {
                this.playAnimation(this.IMAGES_POISONED_DEAD);
                this.fail_sound.play();
                setTimeout(() => {
                    clearInterval(animationsInterval);
                }, 250);
            } else if (this.isHurt() && this.world.jellyfish) {
                this.electro_zap.play();
                this.playAnimation(this.IMAGES_ELECTRIC_SHOCK);
            } else if (this.isHurt()) {
                this.poison_hurt.play();
                this.playAnimation(this.IMAGES_POISONED);
            }
        }, 1000 / 60);
    }

    moveAnimate() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x && !this.isDead() && !this.collision) {
                this.moveRight();
                this.otherDirection = false;
                this.resetAfkTime();
            }
            if (this.world.keyboard.LEFT && this.x > 0 && !this.isDead() && !this.collision) {
                this.moveLeft();
                this.otherDirection = true;
                this.resetAfkTime();
            }
            if (this.world.keyboard.UP && this.y > -80 && !this.isDead() && !this.collision) {
                this.moveUp();
                this.resetAfkTime();
            }
            if (this.world.keyboard.DOWN && this.y < 190 && !this.isDead() && !this.collision) {
                this.moveDown();
                this.resetAfkTime();
            }
            
            this.world.camera_x = -this.x + 80;
        }, 1000 / 60);
    }

    electroDead() {
        setInterval(() => {
            if (this.y < 150) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    resetAfkTime() {
        this.afkTimer = 0;
    }


    IMAGES_IDLE = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png'
    ];

    IMAGES_LONG_IDLE_START = [
        'img/1.Sharkie/2.Long_IDLE/i1.png',
        'img/1.Sharkie/2.Long_IDLE/I2.png',
        'img/1.Sharkie/2.Long_IDLE/I3.png',
        'img/1.Sharkie/2.Long_IDLE/I4.png',
        'img/1.Sharkie/2.Long_IDLE/I5.png',
        'img/1.Sharkie/2.Long_IDLE/I6.png',
        'img/1.Sharkie/2.Long_IDLE/I7.png',
        'img/1.Sharkie/2.Long_IDLE/I8.png',
        'img/1.Sharkie/2.Long_IDLE/I9.png',
        'img/1.Sharkie/2.Long_IDLE/I10.png'
    ];

    IMAGES_LONG_IDLE = [
        'img/1.Sharkie/2.Long_IDLE/I11.png',
        'img/1.Sharkie/2.Long_IDLE/I12.png',
        'img/1.Sharkie/2.Long_IDLE/I13.png',
        'img/1.Sharkie/2.Long_IDLE/I14.png'
    ];

    IMAGES_SWIM = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png'
    ];

    IMAGES_WHALE_ATTACK = [
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png'
    ];

    IMAGES_BUBBLE_TRAP = [
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png'
    ];

    IMAGES_FIN_SLAP = [
        'img/1.Sharkie/4.Attack/Fin slap/1.png',
        'img/1.Sharkie/4.Attack/Fin slap/2.png',
        'img/1.Sharkie/4.Attack/Fin slap/3.png',
        'img/1.Sharkie/4.Attack/Fin slap/4.png',
        'img/1.Sharkie/4.Attack/Fin slap/5.png',
        'img/1.Sharkie/4.Attack/Fin slap/6.png',
        'img/1.Sharkie/4.Attack/Fin slap/7.png',
        'img/1.Sharkie/4.Attack/Fin slap/8.png'
    ];

    IMAGES_POISONED = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/5.png'
    ];

    IMAGES_ELECTRIC_SHOCK = [
        'img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/3.png'
    ];

    IMAGES_POISONED_DEAD = [
        'img/1.Sharkie/6.dead/1.Poisoned/1.png',
        'img/1.Sharkie/6.dead/1.Poisoned/2.png',
        'img/1.Sharkie/6.dead/1.Poisoned/3.png',
        'img/1.Sharkie/6.dead/1.Poisoned/4.png',
        'img/1.Sharkie/6.dead/1.Poisoned/5.png',
        'img/1.Sharkie/6.dead/1.Poisoned/6.png',
        'img/1.Sharkie/6.dead/1.Poisoned/7.png',
        'img/1.Sharkie/6.dead/1.Poisoned/8.png',
        'img/1.Sharkie/6.dead/1.Poisoned/9.png',
        'img/1.Sharkie/6.dead/1.Poisoned/10.png',
        'img/1.Sharkie/6.dead/1.Poisoned/11.png',
        'img/1.Sharkie/6.dead/1.Poisoned/12.png'
    ];

    IMAGES_ELECTROSHOCK_DEAD = [
        'img/1.Sharkie/6.dead/2.Electro_shock/1.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/2.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/3.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/4.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/5.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/6.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/7.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/8.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/9.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/10.png'
    ];
}