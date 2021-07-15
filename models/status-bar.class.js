class StatusBar extends DrawableObject {

    x = 30;
    width = 200;
    height = 40;


    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
}