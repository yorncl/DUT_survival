class Map {

    constructor(json_asset) {
        this.data = JSON.parse(json_asset.content);
        this.layout = this.data.lol;
    }

    draw(start_x, end_x, start_y, end_y, real_start_x, real_start_y, GU_draw, ctx) {

        start_x = start_x < 0 ? 0 : start_x;
        start_y = start_y < 0 ? 0 : start_y;

        end_x = end_x >= this.layout[0].length ? this.layout[0].length : end_x;
        end_y = end_y >= this.layout.length ? this.layout.length : end_y;


        let draw_x = start_x - real_start_x;
        let draw_y = start_y - real_start_y;
        for (let i = start_y; i < end_y; i++) {
            draw_x = start_x - real_start_x;
            for (let j = start_x; j < end_x; j++) {
                if (this.layout[i][j] == 1) {
                    ctx.fillStyle = "#FF0000";
                    ctx.fillRect(draw_x * GU_draw, draw_y * GU_draw, GU_draw, GU_draw);
                }

                if (i == start_y || i == end_y) {
                    ctx.fillStyle = "#0000FF";
                    ctx.fillRect(draw_x * GU_draw, draw_y * GU_draw, GU_draw, GU_draw);
                }

                if (j == start_x || j == end_x) {
                    ctx.fillStyle = "#00FF00";
                    ctx.fillRect(draw_x * GU_draw, draw_y * GU_draw, GU_draw, GU_draw);
                }
                draw_x++;
            }
            draw_y++;
        }
    }

}