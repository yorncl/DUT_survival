class UI {

    constructor(ctx) {
        this.Buttons = new Array();
        this.Labels=new Array();
        this.Sprites= new Array();
        this.ctx = ctx;
    }

    onclick(mx, my) {
        for (let i = 0; i < this.Buttons.length; i++) {
            if (this.Buttons[i].is_clicked(mx, my))
                this.Buttons[i].onclick();
        }

    }

    add_button(x, y, width, height, label, action) {
        this.Buttons.push(new Button(x, y, width, height, label, this.ctx, action));
        return this;
    }

    add_sprite(x, y, width, height, asset) {
        this.Sprites.push(new Sprite(x, y, width, height, this.ctx, asset.content));
        return this;
    }

    draw() {
        for (let i = 0; i < this.Buttons.length; i++) {
            this.Buttons[i].draw();
        }
        for (let i = 0; i < this.Sprites.length; i++) {
            this.Sprites[i].draw();
        }
    }

}