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
                this.update = () => { };
                this.asset_manager
                    .require("assets/map/ConfigMap.json", "map", "json")
                    .require("assets/img/player.png", "player", "img")
                    .require("assets/img/map_spritesheet.png", "map_spritesheet", "img")
                    .require("assets/img/loading.png", "loading_splashscreen", "img")
                    .require("assets/img/parchemin.png", "parchemin", "img")
                    .require("assets/img/risitas.png", "enemy", "img")
                    .require("assets/img/sight.png", "sight", "img")
                    .require("assets/img/blood.png", "blood", "img")
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
                this.update = () => { };
                setTimeout(() => {
                    this.set_to("LOGIN");
                }, 1000);
                break;
            case "LOGIN":
                this.draw = () => { this.ui.draw(); };
                this.update = () => { };
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
                this.update = () => { };
                this.ui = new UI(this.ctx);
                this.ui.add_sprite(300, 300, 50, 50, this.asset_manager.get_asset("loading_splashscreen"));
                setTimeout(() => {
                    this.set_to("PLAYING");
                }, 1000);
                break;
            case "PLAYING":

                // UI
                this.ui = new UI(this.ctx)
                    .add_button(500, 50, 80, 40, "Loading", () => { })
                    .add_cursor(100, 100, this.asset_manager.get_asset("sight").content);

                //MAP
                this.map = new Map(this.asset_manager.get_asset("map"), new Spritesheet(this.asset_manager.get_asset("map_spritesheet").content, 32, 24, 124));

                //CAMERA
                this.camera = new Camera(0.5, 0.5, this.game.viewport, this);

                //PLAYER
                this.player = new Player(2, 2, this.asset_manager.get_asset("player").content);

                //Sprite init
                Pickup.sprite = this.asset_manager.get_asset("parchemin").content;
                Enemy.sprite = this.asset_manager.get_asset("enemy").content;
                Bullet.sprite = this.asset_manager.get_asset("player").content;
                Decal.blood_sprite = this.asset_manager.get_asset("blood").content;

                //MAP init
                this.map.init();

                // Input handling
                this.input_handler.set_keys_action((event) => {

                    if (this.input_handler.pressed_keys['z'])
                        if (this.map.layout[~~(this.player.y - this.player.hitbox_radius)][~~this.player.x] == 0)
                            this.player.y -= this.player.speed;

                    if (this.input_handler.pressed_keys['s'])
                        if (this.map.layout[~~(this.player.y + this.player.hitbox_radius)][~~this.player.x] == 0)
                            this.player.y += this.player.speed;

                    if (this.input_handler.pressed_keys['q'])
                        if (this.map.layout[~~(this.player.y)][~~(this.player.x - this.player.hitbox_radius)] == 0)
                            this.player.x -= this.player.speed;

                    if (this.input_handler.pressed_keys['d'])
                        if (this.map.layout[~~(this.player.y)][~~(this.player.x + this.player.hitbox_radius)] == 0)
                            this.player.x += this.player.speed;

                    if (this.input_handler.pressed_keys['-'])
                        this.camera.distance += 0.01;

                    if (this.input_handler.pressed_keys['+'])
                        this.camera.distance -= 0.01;

                });


                this.input_handler.set_onclick_action((x, y) => {
                    let dx = x - this.game.viewport.width / 2;
                    let dy = y - this.game.viewport.height / 2;
                    let angle = Math.atan2(dy, dx);
                    this.map.bullets.push(new Bullet(this.player.x, this.player.y, 0.5, 0.5, Bullet.sprite, Math.cos(angle) * 0.4, Math.sin(angle) * 0.4));
                });

                this.input_handler.set_onmousemove_action((x, y) => {
                    this.ui.cursor.x = x;
                    this.ui.cursor.y = y;
                });

                this.input_handler.listen_keyboard(true);
                this.input_handler.listen_mouse(true);

                this.update = () => {

                    this.camera.update_position();

                    //Pickups
                    let dx;
                    let dy;
                    for (let i = 0; i < this.map.pickups.length; i++) {
                        if (this.map.pickups[i] != null) {
                            dx = Math.abs(this.player.x - this.map.pickups[i].x);
                            dy = Math.abs(this.player.y - this.map.pickups[i].y);
                            if (dx * dx + dy * dy < this.player.hitbox_radius * this.player.hitbox_radius) {
                                this.map.pickups[i] = null;
                            }
                        }
                    }
                    for (let i = 0; i < this.map.enemies.length; i++) {
                        this.map.enemies[i].x += 0.02 * (this.player.x - this.map.enemies[i].x);
                        this.map.enemies[i].y += 0.02 * (this.player.y - this.map.enemies[i].y);
                    }

                    for (let i = 0; i < this.map.bullets.length; i++) {
                        this.map.bullets[i].update();

                        for (let j = 0; j < this.map.enemies.length; j++) {
                            dx=Math.abs(this.map.bullets[i].x -this.map.enemies[j].x);
                            dy=Math.abs(this.map.bullets[i].y -this.map.enemies[j].y);
                           if(dx*dx + dy*dy < 0.25)
                                this.map.decals.push(Decal.new_blood_decal(this.map.enemies[j].x,this.map.enemies[j].y,0.5,0.5));
                        }
                    }

                }

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