class AssetManager {

    constructor() {
        this.queue = new Array();
        this.assets = new Array();
        this.download_success = 0;
    }

    require(asset_path, asset_name, asset_type) {
        this.queue.push({ path: asset_path, name: asset_name, type: asset_type });
        return this;
    }

    get_asset(name) {
        let asset = this.assets.find((object) => {
            return object.name = name;
        });

        if (asset === null)
            throw new Error("No such asset");

        return asset;
    }

    is_download_complete() {
        return this.download_success == this.queue.length ? true : false;
    }

    download_all_assets(callback) {
        let request;
        let img;
        for (let i = 0; i < this.queue.length; i++) {
            if (this.queue[i].type === "img") {
                img = new Image();
                img.addEventListener("load", () => {
                    this.assets.push({ name: this.queue[i].name, content: img });
                    this.download_success++;
                    if (this.is_download_complete())
                        callback();
                });
                img.addEventListener("error", () => {
                    throw new Error("Error loading an asset");
                });
                img.src = this.queue[i].path;
            } else {
                request = new XMLHttpRequest();
                request.overrideMimeType("application/json")
                request.open('GET', this.queue[i].path, true);
                request.onreadystatechange = () => {
                    if (request.readyState === 4 && request.stattus === "200") {
                        this.assets.push({ name: this.queue[i].name, content: request.responseText });
                        this.download_success++;
                        if (this.is_download_complete())
                            callback();
                    }
                };
                request.send(null);
            }
        }
    }
    
} 