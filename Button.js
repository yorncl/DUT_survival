class Button extends Drawable {

    constructor(x, y, width, height, label, ctx, action) {
        super(x, y, width, height, ctx);
        this.label = label;
        this.onclick = action;
    }

    is_clicked(mx, my) {
        console.log(mx,this.dx,this.dx+this.width);
        if (mx >= this.dx && mx <= this.dx + this.width && my >= this.dy && my <= this.dy + this.height)
            return true;
        else
            return false;
    }

    draw() {
        this.ctx.fillStyle = "#FF0000";
        this.ctx.fillRect(this.dx, this.dy, this.x + this.width, this.y + this.height);
    }

}