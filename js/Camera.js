class Camera {

    constructor(x, y, viewport, gamestate) {
        this.x = x;
        this.y = y;
        this.v_width = viewport.width / viewport.unit;
        this.v_height = viewport.height / viewport.unit;
        this.width = 16;
        this.height = 9;
        this.GU_draw = null
        this.viewport = viewport;
        this.gamestate = gamestate;
        this.delta_x = null;
        this.delta_y = null;
        this.distance = 1;
        this.GU_draw = viewport.unit;
        this.map = gamestate.map;
    }

    increment_distance_by(value) {
        this.distance += value;
    }

    set_distance(value) {
        this.distance = value;
    }


    render() {

        //Unit and length computing
        this.GU_draw = this.viewport.unit / this.distance;
        this.width = this.v_width * this.distance;
        this.height = this.v_height * this.distance;

        //Translation
        this.delta_x = this.x - this.width / 2;
        this.delta_y = this.y - this.height / 2;

        let start_x = ~~this.delta_x;
        let start_y = ~~this.delta_y;
        let end_x = start_x + this.width + 1;
        let end_y = start_y + this.height + 1;

        start_x = start_x < 0 ? 0 : start_x;
        start_y = start_y < 0 ? 0 : start_y;

        end_x = end_x < this.map.layout[0].length ? this.map.layout[0].length : end_x;
        end_y = end_y > this.map.layout.length ? this.map.layout.length : end_y;

        //Map rendering
        for (let i = start_y; i < end_y; i++) {
            for (let j = start_x; j < end_x; j++) {
                if (i > this.delta_y - 1 && j > this.delta_x - 1) {

                    this.gamestate.ctx.drawImage(
                        this.map.spritesheet.content,
                        (this.map.layout[i][j] % this.map.spritesheet.width) * this.map.spritesheet.sprite_size,
                        ~~(this.map.layout[i][j] / this.map.spritesheet.width) * this.map.spritesheet.sprite_size,
                        this.map.spritesheet.sprite_size,
                        this.map.spritesheet.sprite_size,
                        ~~((j - this.delta_x) * Math.round(this.GU_draw)),
                        ~~((i - this.delta_y) * Math.round(this.GU_draw)),
                        Math.round(this.GU_draw),
                        Math.round(this.GU_draw)
                    )

                }
            }
        }
                
        // Decals rendering
        for (let i = 0; i < this.map.decals.length; i++) {
            if (this.map.decals[i] != null)
            this.map.decals[i].draw(this.gamestate.ctx, this.delta_x, this.delta_y, this.GU_draw);
        }
        
        // Player rendering
        this.gamestate.player.draw(this.gamestate.ctx, this.delta_x, this.delta_y, this.GU_draw);
        
        //Pickups rendering
        for (let i = 0; i < this.map.pickups.length; i++) {
            if (this.map.pickups[i] != null)
                this.map.pickups[i].draw(this.gamestate.ctx, this.delta_x, this.delta_y, this.GU_draw);
        }

        //Enemies rendering
        for (let i = 0; i < this.map.enemies.length; i++) {
            if (this.map.enemies[i] != null)
                this.map.enemies[i].draw(this.gamestate.ctx, this.delta_x, this.delta_y, this.GU_draw);
        }

        //Bullets rendering
        for (let i = 0; i < this.map.bullets.length; i++) {
            if (this.map.bullets[i] != null)
                this.map.bullets[i].draw(this.gamestate.ctx, this.delta_x, this.delta_y, this.GU_draw);
        }


    }

    update_position() {

        let vx = this.gamestate.player.x - this.x;
        let vy = this.gamestate.player.y - this.y;
        let speed = this.gamestate.player.speed;

        if (Math.abs(vx) > 1)
            this.x += vx > 0 ? speed : -speed;
        else
            this.x += 0.05 * vx;

        if (Math.abs(vy) > 1)
            this.y += vy > 0 ? speed : -speed;
        else
            this.y += 0.05 * vy;

    }

}

