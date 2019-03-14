class Map {

    constructor(json_asset) {
        this.layout = JSON.parse(json_asset.content);
        console.log(this.layout);
    }

}