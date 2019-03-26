class Player extends GameElement{

    constructor(x, y , sprite){
        super(x,y,1,1,sprite);
        this.score=0;
        this.speed=0.12;
        this.hitbox_radius=0.5;
    }

}