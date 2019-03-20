class Button extends Drawable {

    constructor(x, y, width, height, label, ctx, action) {
        super(x, y, width, height, ctx);
        this.label = label;
        this.onclick = action;
    }

    is_clicked(mx, my) {
        if (mx >= this.dx && mx <= this.dx + this.width && my >= this.dy && my <= this.dy + this.height)
            return true;
        else
            return false;
    }

    draw() {
        this.ctx.fillStyle = "#FF0000";
        this.ctx.fillRect(this.dx, this.dy, this.width, this.height);
        this.ctx.font = "15px Arial";
        this.ctx.strokeText(this.label, this.x-this.width/4, this.y+this.height/4); 
    }

}