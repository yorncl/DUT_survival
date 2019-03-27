class Decal extends GameElement {

    constructor(x, y, w, h, sprite) {
        super(x, y, w, h, sprite);
    }

    static new_blood_decal(x, y, w, h) {
        return new Decal(x, y, w, h, Decal.blood_sprite);
    }

}


Decal.max=10;