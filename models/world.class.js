class World {
    canvas;
    ctx;
    character = new Character();

    constructor(canvas) {

        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addToMap(this.character);

        let self = this;
        requestAnimationFrame(() => {
            self.draw();
        });
    }

    addToMap(mo) {
        mo.draw(this.ctx);
    }

}
