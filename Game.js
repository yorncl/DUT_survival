


class Game {

    constructor(ctx) {
        this.ctx = ctx;
        this.ui = null;

    }

    login() {
        this.ui = new UI(this.ctx);
        this.ui.add_button(300, 50, 80, 40, "Login", () => {
            console.log("Button working");
        });
    }

    menu() {

    }

    play() {

    }

    score() {

    }

    draw() {
        this.ui.draw();
    }

    onclick(mx, my) {
        this.ui.onclick(mx, my);
    }
}