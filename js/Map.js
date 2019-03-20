class Map {

    constructor(json_asset,spritesheet) {
        this.data = JSON.parse(json_asset.content);
        this.layout = this.data.lol;
        this.spritesheet=spritesheet;
    }

    


}