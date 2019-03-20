class Sprite {

    constructor(img){
        this.img=img;
    }

    draw(x,y,w,h,ctx){
        ctx.drawImage(this.img,x-w/2,y-h/2,w,h);
    }

}