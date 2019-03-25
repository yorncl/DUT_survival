class Map {

    constructor(json_asset,spritesheet) {
        this.data = JSON.parse(json_asset.content);
        this.layout = this.data.lol;
        this.spritesheet=spritesheet;
        this.pickups=new Array();
        
    }

    
    intialize_pickups(int){

        this.pickups.push(new Pickup(0,0,1,1,Pickup.sprite))

    }

}