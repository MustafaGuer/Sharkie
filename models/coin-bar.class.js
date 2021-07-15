class CoinBar extends StatusBar {
 
    x = 200;
    
    constructor() {
        super().loadImage('img/4. Marcadores/orange/0_  copia 2.png');
        this.loadImages(this.IMAGES);

        this.setPercentage(0);
    }

    resolveImageIndex() {
        if(this.percentage == 25) {
            return 5;
        } else if(this.percentage >= 20) {
            return 4;
        } else if(this.percentage >= 15) {
            return 3;
        } else if(this.percentage >= 10) {
            return 2;
        } else if(this.percentage >= 5) {
            return 1;
        } else {
            return 0;
        }
    }

    IMAGES = [
        'img/4. Marcadores/orange/0_  copia 2.png',
        'img/4. Marcadores/orange/20_  copia.png',
        'img/4. Marcadores/orange/40_  copia 2.png',
        'img/4. Marcadores/orange/60_  copia 2.png',
        'img/4. Marcadores/orange/80_  copia 2.png',
        'img/4. Marcadores/orange/100_ copia 2.png'
    ];
}