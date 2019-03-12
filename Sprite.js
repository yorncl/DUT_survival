class Sprite extends Drawable{

    constructor(x, y, width, height,ctx,img){
        super(x, y, width, height,ctx);
        this.img=img;
    }

    draw(){
        this.ctx.drawImage(this.img,this.dx,this.dy,this.width,this.height);
    }

}