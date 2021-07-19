class TryAgain extends DrawableObject {
    world;

    IMAGES = [
        'img/6.Botones/Try again/Recurso 15.png',
        'img/6.Botones/Try again/Recurso 18.png',
        'img/6.Botones/Try again/Recurso 16.png',
        'img/6.Botones/Try again/Recurso 17.png'

    ];

    constructor() {
        super().loadImage('img/6.Botones/Try again/Recurso 15.png');
        this.loadImages(this.IMAGES);

        this.width = 200;
        this.height = 80;
        this.x = (720 - this.width) / 2;
        this.y = 330;

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 500);
    }

    
}