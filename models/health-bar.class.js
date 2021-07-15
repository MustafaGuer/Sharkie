class HealthBar extends StatusBar {

    y = 0;


    constructor() {
        super().loadImage('img/4. Marcadores/orange/0_  copia.png');
        this.loadImages(this.IMAGES);
        
        
    }

    IMAGES = [
        'img/4. Marcadores/orange/0_  copia.png',
        'img/4. Marcadores/orange/20_  copia.png',
        'img/4. Marcadores/orange/40_  copia.png',
        'img/4. Marcadores/orange/60_  copia.png',
        'img/4. Marcadores/orange/80_  copia.png',
        'img/4. Marcadores/orange/100_  copia.png'
    ];
}