class Drawable {

    constructor(width, height,ctx) {
        if (this.constructor == Drawable)
            throw new TypeError("Cannot instantiate Drawable Type, extend it instead");
        this.height=height;
        this.width=width;
        this.ctx=ctx;
    }

}