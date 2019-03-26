class Button extends Drawable {

    constructor(x, y, width, height, label, action) {
        super(x, y, width, height);
        this.label = label;
        this.onclick = action;
    }

    is_clicked(mx, my) {
        if (mx >= this.dx && mx <= this.dx + this.width && my >= this.dy && my <= this.dy + this.height)
            return true;
        else
            return false;
    }

    draw(ctx) {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.dx, this.dy, this.width, this.height);
        ctx.font = "15px Arial";
        ctx.strokeText(this.label, this.x-this.width/4, this.y+this.height/4); 
    }

}