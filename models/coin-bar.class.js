class CoinBar extends StatusBar {
 
    x = 200;
    
    constructor() {
        super().loadImage('img/4. Marcadores/orange/0_  copia 2.png');
        this.loadImages(this.IMAGES);

        
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