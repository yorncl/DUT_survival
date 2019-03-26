class Map {

    constructor(json_asset,spritesheet) {
        this.data = JSON.parse(json_asset.content);
        this.layout = this.data.lol;
        this.spritesheet=spritesheet;
        this.pickups=new Array();
        this.width=this.layout[0].length;
        this.height=this.layout.length;
    }

    
    intialize_pickups(int){

        
        for(let i =0;i<15;i++){
            this.pickups.push(new Pickup(Math.random()*this.width,Math.random()*this.height,0.8,0.8,Pickup.sprite))
        }

    }

}