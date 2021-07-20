class MobyDick extends MovableObject {

    width = 350;
    height = 350;
    energy = 20;
    intro = false;
    attack = false;
    counter = 0;
    dead = 0;
    isIn = false;
    bite_sound = new Audio('../audio/biteSound.mp3');
    monster_pain = new Audio('../audio/monsterPain.mp3');
    monster_growl = new Audio('../audio/monsterSound.mp3');
    monster_die = new Audio('../audio/monsterDie.mp3');

    constructor() {
        super().loadImage('img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2.png');
        this.loadImages(this.IMAGES_INTRO);
        this.loadImages(this.IMAGES_FLOATING);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);

        this.x = 3900;
        this.y = 30;

        
    }

    animateIntro() {
        let animationIntro = setInterval(() => {
            if (this.counter == 10) {
                clearInterval(animationIntro);
                this.animate();
                this.monster_growl.play();
            } else {
                this.playAnimation(this.IMAGES_INTRO);
                this.counter++;
            }
        }, 1000 / 7);
    }
    win_sound = new Audio('../audio/winSound.mp3');
    animate() {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                this.monster_die.play();
                this.win_sound.play();
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
                this.monster_pain.play();
            } else if (this.attack) {
                this.playAnimation(this.IMAGES_ATTACK);
                this.bite_sound.play();
            } else {
                this.playAnimation(this.IMAGES_FLOATING);
            }
    }


    IMAGES_INTRO = [
        'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/10.png'
    ];

    IMAGES_FLOATING = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png'
    ];

    IMAGES_ATTACK = [
        'img/2.Enemy/3 Final Enemy/Attack/1.png',
        'img/2.Enemy/3 Final Enemy/Attack/2.png',
        'img/2.Enemy/3 Final Enemy/Attack/3.png',
        'img/2.Enemy/3 Final Enemy/Attack/4.png',
        'img/2.Enemy/3 Final Enemy/Attack/5.png',
        'img/2.Enemy/3 Final Enemy/Attack/6.png'
    ];

    IMAGES_HURT = [
        'img/2.Enemy/3 Final Enemy/Hurt/1.png',
        'img/2.Enemy/3 Final Enemy/Hurt/2.png',
        'img/2.Enemy/3 Final Enemy/Hurt/3.png',
        'img/2.Enemy/3 Final Enemy/Hurt/4.png'
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png'
    ];
}