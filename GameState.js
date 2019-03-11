class GameState{

    constructor(game){
        this.name="UNINITIALIZED";
        this.ui=null;
        this.ctx = game.ctx;
    }

    set_to(name){

        switch (name){
            case "LOGIN" :
            this.ui = new UI(this.ctx);
            this.ui.add_button(500, 50, 80, 40, "Play", () => {
                this.set_to("PLAYING");
            });
            break;
            case "PLAYING" :
            this.ui = new UI(this.ctx);
            //this.map = new MAP();
            this.ui.add_button(30, 20, 80, 40, "Login", () => {
                this.set_to("LOGIN");
            });
            break;
        }

    }

    draw(){
        this.ui.draw();
    }


}