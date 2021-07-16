class MobyDickHealthBar extends StatusBar {



    constructor(x, y, width) {
        super().loadImage('img/4. Marcadores/orange/0_  copia.png')
        this.loadImages(this.IMAGES);

        this.x = x ;
        this.y = y + 35;
        this.width = width;
        this.height = 60;

        this.setPercentage(20);
    }


    resolveImageIndex() {
        if(this.percentage == 20) {
            return 5;
        } else if(this.percentage == 15) {
            return 4;
        }
        //  else if(this.percentage > 60) {
        //     return 3;
        // }
         else if(this.percentage == 10) {
            return 2;
        } else if(this.percentage == 5) {
            return 1;
        } else {
            return 0;
        }
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