class GameObject{

    constructor(x,y,sprite){
        this.x=x;
        this.y=y;
        this.sprite=sprite;
    }

    draw(x,y,w,h,ctx){
        this.sprite.draw(x,y,w,h,ctx);
    }

}