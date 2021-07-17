class Barrier extends MovableObject {
width = 720;
height = 480;

    constructor(x) {
        super().loadImage('img/3. Background/Barrier/1.png');

        this.x = x;
        this.y = 480 - this.height;

    }
}