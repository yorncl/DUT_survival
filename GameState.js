class GameState {

    constructor(game) {
        this.game = game;
        this.name = "UNINITIALIZED";
        this.ui = null;
        this.ctx = game.ctx;
        this.input_handler = new InputHandler(this);
        this.asset_manager = game.asset_manager;
    }

    set_to(name) {

        switch (name) {

            case "STARTING":
                this.draw = () => { };
                this.asset_manager
                    .require("assets/img/test.png", "test_img", "img")
                    .require("ConfigMap.json", "map", "json")
                    .require("assets/img/loading.png", "loading_splashscreen", "img")
                    .download_all_assets(() => {
                        setTimeout(() => {
                            this.set_to("PLAYING");
                        }, 0);
                    });
                break;
            case "LOADING_UI_ASSETS":
                this.ui = new UI(this.ctx);
                this.ui.add_button(500, 50, 80, 40, "Loading", () => { });
                this.ui.add_sprite(300, 300, 260, 260, this.asset_manager.get_asset("loading_splashscreen"));
                this.draw = () => { this.ui.draw(); };
                setTimeout(() => {
                    this.set_to("LOGIN");
                }, 1000);
                break;
            case "LOGIN":
                this.draw = () => { this.ui.draw(); };
                //UI init
                this.ui = new UI(this.ctx);
                this.ui.add_button(300, 300, 80, 40, "Play", () => {
                    this.set_to("LOADING_PLAYING_ASSETS");
                });

                //INPUT init
                this.input_handler.listen_mouse(true);
                this.input_handler.set_onclick_action((x, y) => (this.ui.onclick(x, y)));

                break;

            case "LOADING_PLAYING_ASSETS":
                //IMG
                this.draw = () => { this.ui.draw(); };
                this.ui = new UI(this.ctx);
                this.ui.add_sprite(300, 300, 50, 50, this.asset_manager.get_asset("loading_splashscreen"));
                setTimeout(() => {
                    this.set_to("PLAYING");
                }, 1000);
                break;
            case "PLAYING":

                // Elements
                this.ui = new UI(this.ctx);
                this.map = new Map(this.asset_manager.get_asset("map"));
                this.camera = new Camera(0.5, 0.5, this.game.viewport, this);

                // Input handling
                this.input_handler.listen_keyboard(true);
                this.input_handler.set_onkeydown_action((event) => {

                    if (event.keyCode == 109)
                        this.camera.increment_distance_by(0.01);

                    if (event.keyCode == 107)
                        this.camera.increment_distance_by(-0.01);
                    
                    if (event.keyCode == 37)
                        this.camera.x-=0.3;

                    if (event.keyCode == 39)
                        this.camera.x+=0.3;
                        
                    if (event.keyCode == 38)
                        this.camera.y-=0.3;

                    if (event.keyCode == 40)
                        this.camera.y+=0.3;

                });


                this.draw = () => {
                    this.camera.render();
                    this.ui.draw();
                };
                break;
            default:
                throw new Error("No such Gamestate as " + name);

        }

        this.name = name;

    }

}