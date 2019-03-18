class Sprite extends Drawable{

    constructor(width, height,ctx,img){
        super(width, height,ctx);
        this.img=img;
    }

    draw(x,y){
        this.ctx.drawImage(this.img,x-this.width/2,y-this.height/2,this.width,this.height);
    }

}