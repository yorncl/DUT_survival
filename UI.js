class UI {

    constructor(ctx) {
        this.Buttons = new Array();
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

    draw() {
        for (let i = 0; i < this.Buttons.length; i++) {
            this.Buttons[i].draw();
        }
    }

}