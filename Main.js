
let canvas;


window.onload = function () {

    //DOM elements getter
    canvas = document.getElementById("game_canvas")

    //Canvas initialization
    canvas.height = 600;
    canvas.width = 600;


    //Game initialization
    let g = new Game(canvas.getContext("2d"));
    //Basic scripts

    //Game loop
    function game_loop() {
        setTimeout(requestAnimationFrame(game_loop), 1000);
    }
    game_loop();
}


//Get mouse position inside the canvas
