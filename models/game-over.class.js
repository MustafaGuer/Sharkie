class GameOver extends DrawableObject {


    IMAGES = [
        'img/6.Botones/Tittles/Game Over/Recurso 9.png',
        'img/6.Botones/Tittles/Game Over/Recurso 10.png',
        'img/6.Botones/Tittles/Game Over/Recurso 11.png',
        'img/6.Botones/Tittles/Game Over/Recurso 12.png'
    ];


    constructor() {
        super().loadImage('img/6.Botones/Tittles/Game Over/Recurso 9.png');
        this.loadImages(this.IMAGES)

        this.width = 400;
        this.height = 150;
        this.x = (720 - this.width) / 2;
        this.y = (480 - this.height) / 2;

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 500);
    }
}