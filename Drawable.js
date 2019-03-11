class Drawable {

    constructor(x, y, width, height,ctx) {
        if (this.constructor == Drawable)
            throw new TypeError("Cannot instantiate Drawable Type, extend it instead");
        this.x = x;
        this.y = y;
        this.height=height;
        this.width=width;
        this.dx=this.x-width/2;
        this.dy=this.y-height/2;
        this.ctx=ctx;
    }

}