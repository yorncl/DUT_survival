
let canvas;
let game;

window.onload = function () {

    //DOM elements getter
    canvas = document.getElementById("game_canvas")

    //Canvas initialization
    canvas.height = 600;
    canvas.width = 600;


    //Game initialization
    game = new Game(canvas.getContext("2d"));


    //Basic scripts
    game.set_state_to("LOGIN");

    //Game loop
    function game_loop() {
        game.draw();
        setTimeout(requestAnimationFrame(game_loop), 1000);
    }
    game_loop();
}


//Get mouse position inside the canvas
