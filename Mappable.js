class Mappable {

    constructor() {
        this.layout = new Array();
        this.layout = [
            [1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1]
        ];
    }

    draw() {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                this.draw_outside()
            }    
        }
    }

}