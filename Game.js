


class Game {

    constructor(ctx) {
        this.ctx=ctx;
        this.asset_manager=new AssetManager(); 
        this.state=new GameState(this);
        this.viewport=new Viewport(ctx.canvas.clientWidth,ctx.clientHeight);   
    }
    
    set_state_to(state) {
        this.state.set_to(state);
    }

    
    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.clientWidth, this.ctx.canvas.clientHeight);
        this.state.draw();
    }

}