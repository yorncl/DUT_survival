class Teleporter{
    
    constructor(x,y,go_to_x,go_to_y,go_to_map){
        this.x=x;
        this.y=y;
        this.go_to_x=go_to_x;
        this.go_to_y=go_to_y;
        this.go_to_map=go_to_map;
    }

    is_on(x,y){
            return this.x==x && this.y==y;
    }

}