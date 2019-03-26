class GameElement{

    constructor(x, y, w, h, sprite){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.sprite = sprite;
    }

    draw(ctx,delta_x,delta_y,GU_draw){
        ctx.drawImage(this.sprite,
            (this.x - delta_x -0.5*this.width) * GU_draw,
            (this.y - delta_y - 0.5* this.height) * GU_draw,
            GU_draw * this.width,
            GU_draw * this.height);
    }
}