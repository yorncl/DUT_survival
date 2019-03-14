class Camera {

    constructor(x, y, viewport, gamestate) {
        this.x = x;
        this.y = y;
        this.width = viewport.width / viewport.unit;
        this.height = viewport.height / viewport.unit;
        this.viewport = viewport;
        this.state = gamestate;
        this.start_x = null;
        this.end_x = null;
        this.start_y = null;
        this.end_y = null;
        this.distance = 1;
        this.GU_draw = viewport.unit;
    }

    render() {

        //Map rendering
        this.start_x = this.x - this.width / 2;
        this.end_x = this.x + this.width / 2;
        this.start_y = this.y - this.width / 2;
        this.end_y = this.y + this.width / 2;

        for (let i = 0; i < this.gamestate.map.length; i++) {
            const element = array[i];
            
        }

    }

}