class Cursor extends Drawable{

    constructor(width, height, sprite) {
        super(0, 0, width, height);
        this.sprite=sprite;
    }


    update(x,y){
        this.x=x;
        this.y=y;
    }
    
    draw(ctx){
        ctx.drawImage(this.sprite,this.x-this.width/2,this.y-this.height/2,this.width,this.height);
    }

}