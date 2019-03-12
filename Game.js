


class Game {

    constructor(ctx) {
        this.playing = false;
        this.ctx=ctx;
        this.state=new GameState(this);
        this.asset_manager=new AssetManager();
        
    }
    
    set_state_to(state) {
        this.state.set_to(state);
    }

    
    draw() {
      //  this.ctx.clearRect(0, 0, this.ctx.canvas.clientWidth, this.ctx.canvas.clientHeight);
        
        this.state.draw();
    }

}