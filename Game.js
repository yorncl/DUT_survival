


class Game {

    constructor(ctx) {
        this.playing = false;
        this.ctx = ctx;
        this.ui = null;

    }

    login() {
        this.ui = new UI(this.ctx);
        this.ui.add_button(500, 50, 80, 40, "Login", () => {
            this.play();
        });
    }

    menu() {    

    }

    play() {
        this.ui = new UI(this.ctx);
        //this.map = new MAP();
        this.ui.add_button(30, 20, 80, 40, "Login", () => {
            this.login();
        });
    }

    score() {

    }

    draw() {
        this.ctx
        this.ctx.clearRect(0, 0, this.ctx.canvas.clientWidth, this.ctx.canvas.clientHeight);
        this.ui.draw();
    }

    onclick(mx, my) {
        this.ui.onclick(mx, my);
    }
}