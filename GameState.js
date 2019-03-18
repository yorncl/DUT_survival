class GameState {

    constructor(game) {
        this.game = game;
        this.name = "UNINITIALIZED";
        this.ui = null;
        this.ctx = game.ctx;
        this.input_handler = new InputHandler(this);
        this.asset_manager = game.asset_manager;
        this.player = null;
    }

    set_to(name) {

        switch (name) {

            case "STARTING":
                this.draw = () => { };
                this.asset_manager
                    .require("assets/img/test.png", "test_img", "img")
                    .require("ConfigMap.json", "map", "json")
                    .require("assets/img/player.png", "player", "img")
                    .require("assets/img/map_spritesheet.png", "map_spritesheet", "img")
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
                this.map = new Map(this.asset_manager.get_asset("map"), new Spritesheet(this.asset_manager.get_asset("map_spritesheet").content, 32, 10, 10));
                this.camera = new Camera(0.5, 0.5, this.game.viewport, this);
                this.player = new Player(2, 2, new Sprite(this.asset_manager.get_asset("player").content));
                // Input handling
                this.input_handler.listen_keyboard(true);
                this.input_handler.set_keys_action((event) => {

                    if (this.input_handler.pressed_keys['ArrowUp'])
                        this.player.y -= this.player.speed;

                    if (this.input_handler.pressed_keys['ArrowDown'])
                        this.player.y += this.player.speed;

                    if (this.input_handler.pressed_keys['ArrowLeft'])
                        this.player.x -= this.player.speed;

                    if (this.input_handler.pressed_keys['ArrowRight'])
                        this.player.x += this.player.speed;

                    if (this.input_handler.pressed_keys['-'])
                        this.camera.distance += 0.01;

                    if (this.input_handler.pressed_keys['+'])
                        this.camera.distance -= 0.01;



                    this.camera.update_position();

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