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

        //Translation matrix
        this.delta_x = this.x - this.width / 2;
        this.delta_y = this.y - this.height / 2;

        let start_x = ~~this.delta_x;
        let start_y = ~~this.delta_y;
        let end_x = start_x + this.width + 1;
        let end_y = start_y + this.height + 1;

        start_x = start_x < 0 ? 0 : start_x;
        start_y = start_y < 0 ? 0 : start_y;

        //Map rendering
        for (let i = start_y; i < end_y; i++) {
            for (let j = start_x; j < end_x; j++) {
                //console.log(i + " - " + this.delta_y + " OU " + j + " - " + this.delta_x);
                if (i > this.delta_y - 1 && j > this.delta_x - 1) {
                    if (this.map.layout[i][j] == 1) {
                        this.gamestate.ctx.fillStyle = "#FF0000";
                        this.gamestate.ctx.fillRect((j - this.delta_x) * this.GU_draw, (i - this.delta_y) * this.GU_draw, this.GU_draw, this.GU_draw);
                    }
                    if (i == 0 && j == 0) {
                        this.gamestate.ctx.fillStyle = "#0000FF";
                        this.gamestate.ctx.fillRect((j - this.delta_x) * this.GU_draw, (i - this.delta_y) * this.GU_draw, this.GU_draw, this.GU_draw);
                    }
                }
            }
        }

    }

}

