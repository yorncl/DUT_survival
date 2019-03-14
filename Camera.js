class Camera {

    constructor(x, y, viewport, gamestate) {
        this.x = x;
        this.y = y;
        this.WIDTH_REFERENCE = viewport.width / viewport.unit;
        this.HEIGHT_REFERENCE = viewport.height / viewport.unit;
        this.width = null;
        this.height = null;
        this.viewport = viewport;
        this.gamestate = gamestate;
        this.start_x = null;
        this.end_x = null;
        this.start_y = null;
        this.end_y = null;
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
        this.GU_draw =this.viewport.unit/ (this.distance * this.distance);
        this.width = this.WIDTH_REFERENCE * this.distance;
        this.height = this.HEIGHT_REFERENCE * this.distance;
        

        this.start_x = ~~(this.x - this.width / 2);
        this.end_x = this.x + this.width / 2;
        this.start_y = ~~(this.y - this.height / 2);
        this.end_y = this.y + this.height / 2;

        this.map.draw(this.start_x,
            this.end_x,
            this.start_y,
            this.end_y,
            (this.x - this.width / 2),
            (this.y - this.height / 2),
            this.GU_draw,
            this.gamestate.ctx);

    }

}

