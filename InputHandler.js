class InputHandler{



    constructor(keys,action){

        if(typeof this.keys['UP']===undefined || 
        typeof this.keys['DOWN']===undefined || 
        typeof this.keys['LEFT']===undefined ||
        typeof this.keys['RIGHT']===undefined )
        throw  new Error("Les controles sont mal renseignés");

        this.Controls={"UP":1,"DOWN":2,"LEFT":3,"RIGHT":4}
        this.keys=keys;
        this.active=false;
        this.onKeyPress=action;
    }


    listen(){
        this.active=true;
    }

}