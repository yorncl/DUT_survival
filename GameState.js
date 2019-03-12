class GameState {

    constructor(game) {
        this.name = "UNINITIALIZED";
        this.ui = null;
        this.ctx = game.ctx;
        this.input_handler = new InputHandler(this);
        this.asset_manager = this.game.asset_manager;
    }

    set_to(name) {

        switch (name) {
            case "LOGIN":

                //UI init
                this.ui = new UI(this.ctx);
                this.ui.add_button(500, 50, 80, 40, "Play", () => {
                    this.set_to("PLAYING");
                });

                //INPUT init
                this.input_handler.listen_mouse(true);
                this.input_handler.set_onclick_action((x, y) => (this.ui.onclick(x, y)));

                break;

            case "LOAD_ASSETS":
                //IMG
                this.asset_manager.require("assets/img/test.png","test_img","img");
                
                this.asset_manager.download_all_assets(this.set_to("PLAYING"));

            case "PLAYING"
        }

        this.name = name;

    }

    draw() {
        this.ui.draw();
    }


}