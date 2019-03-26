class Map {

    constructor(json_asset, spritesheet) {
        this.data = JSON.parse(json_asset.content);
        this.layout = this.data.lol;
        this.spritesheet = spritesheet;
        this.pickups = new Array();
        this.enemies = new Array();
        this.bullets = new Array();
        this.decals=new Array();
        this.width = this.layout[0].length;
        this.height = this.layout.length;
    }


    init() {
        this.initialize_pickups(15);
        this.initialize_enemies(15);
    }

    initialize_pickups(nb) {
        for (let i = 0; i < nb; i++) {
            this.pickups.push(new Pickup(Math.random() * this.width, Math.random() * this.height, 0.8, 0.8, Pickup.sprite))
        }
    }

    initialize_enemies(nb) {
        for (let i = 0; i < nb; i++) {
            this.enemies.push(new Enemy(Math.random() * this.width, Math.random() * this.height, 0.8, 0.8, Enemy.sprite))
        }
    }

}