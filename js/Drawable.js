class Drawable {

    constructor(x,y,width, height) {
        if (this.constructor == Drawable)
            throw new TypeError("Cannot instantiate Drawable Type, extend it instead");
        this.height=height;
        this.width=width;
        this.x=x;
        this.y=y;
        this.dx=x-width/2;
        this.dy=y-height/2;
    }

}