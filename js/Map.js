class Map {

    constructor(json_asset, spritesheet) {
        this.data = JSON.parse(json_asset.content);
        this.current = this.data.main;
        this.layout = null;
        this.spritesheet = spritesheet;
        this.player = new Player(0, 0, Player.sprite);
        this.teleporters = null;
        this.pickups = new Array();
        this.enemies = new Array();
        this.bullets = new Array();
        this.decals = new Array();
        this.width = null;
        this.height = null;
        this.initialize_player();
    }


    init() {
        this.initialize_current();
        // this.initialize_pickups(15);
        // this.initialize_enemies(15);
        this.initialize_teleporters();
    }

    initialize_current() {
        this.layout = this.current.layout;
        this.width = this.layout[0].length;
        this.height = this.layout.length;
    }

    initialize_pickups(nb) {
        for (let i = 0; i < nb; qi++) {
            this.pickups.push(new Pickup(Math.random() * this.width, Math.random() * this.height, 0.8, 0.8, Pickup.sprite))
        }
    }

    initialize_enemies(nb) {
        for (let i = 0; i < nb; i++) {
            this.enemies.push(new Enemy(Math.random() * this.width, Math.random() * this.height, 0.8, 0.8, Enemy.sprite))
        }
    }

    initialize_teleporters() {
        this.teleporters = new Array();
        let tel = this.current.teleporters;
        for (let i = 0; i < tel.length; i++) {
            this.teleporters.push(new Teleporter(tel[i].x, tel[i].y, tel[i].go_to_x, tel[i].go_to_y, this.data[tel[i].go_to_map]))
        };
    }

    initialize_player() {
        if (typeof this.current.player !== 'undefined') {
            this.player.x = this.current.player.x;
            this.player.y = this.current.player.y;
        }
    }

    switch(tel) {
        this.current = tel.go_to_map;
        this.player.x = tel.go_to_x;
        this.player.y = tel.go_to_y;
        this.init();
    }

}