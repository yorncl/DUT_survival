
let canvas;
let game;

window.onload = function () {

    //DOM elements getter
    canvas = document.getElementById("game_canvas")

    //Canvas initialization
    let UNIT=80;
    canvas.height = 9*UNIT;
    canvas.width = 16*UNIT;


    //Game initialization
    game = new Game(canvas.getContext("2d"));


    //Basic scripts
    game.set_state_to("STARTING");

    //Game loop
    function game_loop() {
        setTimeout(()=>{
            game.handleInput();
            game.update();
            game.draw();
            requestAnimationFrame(game_loop);
        }, 10);
    }
    game_loop();
}


//Get mouse position inside the canvas
