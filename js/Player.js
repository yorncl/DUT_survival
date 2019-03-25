class Player extends GameObject{

    constructor(x, y , sprite){
        super(x,y,sprite);
        this.score=0;
        this.speed=0.12;
        this.hitbox_radius=1;
    }

}