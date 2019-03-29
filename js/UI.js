class UI {

    constructor(ctx) {
        this.Buttons = new Array();
        this.Labels = new Array();
        this.Sprites = new Array();
        this.cursor=null;
        this.ctx = ctx;
    }

    onclick(mx, my) {
        for (let i = 0; i < this.Buttons.length; i++) {
            if (this.Buttons[i].is_clicked(mx, my))
                this.Buttons[i].onclick();
        }

    }

    add_button(x, y, width, height, label, action) {
        this.Buttons.push(new Button(x, y, width, height, label, action));
        return this;
    }

    // add_sprite(x, y, width, height, asset) {
    //     this.Sprites.push(new Sprite(x, y, width, height, this.ctx, asset.content));
    //     return this;
    // }

    add_cursor(width,height,sprite) {
        this.cursor = new Cursor(width,height,sprite);
        return this;
    }

    update_cursor(x,y){
        this.cursor.update(x,y);
    }

    // update() {
    //     if (typeof this.cursor != 'undefined') {
    //         this.cursor.update();
    //     }
    // }


    draw() {
        for (let i = 0; i < this.Buttons.length; i++) {
            this.Buttons[i].draw(this.ctx);
        }

        // for (let i = 0; i < this.Sprites.length; i++) {
        //     this.Sprites[i].draw(this.ctx);
        // }

        if (typeof this.cursor != 'undefined')
            this.cursor.draw(this.ctx);

    }

}