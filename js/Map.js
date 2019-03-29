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
        this.initialize_pickups(10);
    }


    init() {
        this.initialize_current();
        this.pickups = this.current.pickups;
        //  this.initialize_enemies(15);
        this.initialize_teleporters();
    }

    initialize_current() {
        this.layout = this.current.layout;
        this.width = this.layout[0].length;
        this.height = this.layout.length;
    }

    initialize_pickups(nb) {

        for (let key in this.data) {
            this.data[key].pickups = new Array();
        }

        outerloop:
        while (nb > 0) {
            let width, height, x, y;
            for (let key in this.data) {
                width = this.data[key].layout[0].length;
                height = this.data[key].layout.length;
                if (nb <= 0)
                    break outerloop;
                if (Math.random() > 0.5) {
                    x = Math.random() * width ;
                    y = Math.random() * height;
                    while (this.data[key].layout[~~y][~~x] != 0 || ~~x<2 || ~~y<2 ||~~x ==width-1 || ~~y ==height-1 ) {
                        x = Math.random() * width;
                        y = Math.random() * height;
                    }
                    this.data[key].pickups.push(new Pickup(x, y, 0.8, 0.8, Pickup.sprite));
                    nb--;
                }

            }

        }
        1
        console.log(this.current);
        this.pickups = this.current.pickups;
    }

    initialize_enemies(nb) {
        this.enemies = new Array();
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
        this.save_current();
        this.current = tel.go_to_map;
        this.player.x = tel.go_to_x;
        this.player.y = tel.go_to_y;
        this.init();
    }

    save_current() {

    }

}