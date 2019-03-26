class Bullet extends GameElement {

    constructor(x, y, w, h, sprite, dx, dy) {
        super(x, y, w, h, sprite);
        this.dx = dx;
        this.dy = dy;
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;
    }

}