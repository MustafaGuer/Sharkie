class Poison extends DrawableObject {

    width = 100;
    height = 130;

    constructor(x, y) {
        super().loadImage('img/4. Marcadores/Posión/Animada/1.png');
        this.loadImages(this.IMAGES);

        this.x = x;
        this.y = y;

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 1000 / 10);
    }



    IMAGES = [
        'img/4. Marcadores/Posión/Animada/1.png',
        'img/4. Marcadores/Posión/Animada/2.png',
        'img/4. Marcadores/Posión/Animada/3.png',
        'img/4. Marcadores/Posión/Animada/4.png',
        'img/4. Marcadores/Posión/Animada/5.png',
        'img/4. Marcadores/Posión/Animada/6.png',
        'img/4. Marcadores/Posión/Animada/7.png',
        'img/4. Marcadores/Posión/Animada/8.png'
    ];
}