class PoisonBar extends StatusBar {

    x = 400;

    constructor() {
        super().loadImage('img/4. Marcadores/orange/0_ copia.png');
        this.loadImages(this.IMAGES);

        this.setPercentage(0);
    }

    resolveImageIndex() {
        if(this.percentage == 5) {
            return 5;
        } else if(this.percentage >= 4) {
            return 4;
        } else if(this.percentage >= 3) {
            return 3;
        } else if(this.percentage >= 2) {
            return 2;
        } else if(this.percentage >= 1) {
            return 1;
        } else {
            return 0;
        }
    }

    IMAGES = [
        'img/4. Marcadores/orange/0_ copia.png',
        'img/4. Marcadores/orange/20_ copia.png',
        'img/4. Marcadores/orange/40_ copia.png',
        'img/4. Marcadores/orange/60_ copia.png',
        'img/4. Marcadores/orange/80_ copia.png',
        'img/4. Marcadores/orange/100_ copia.png'
    ];
}