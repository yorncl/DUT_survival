
let canvas;


window.onload = function () {

    //DOM elements getter
    canvas = document.getElementById("game_canvas")

    //Canvas initialization
    canvas.height = 600;
    canvas.width = 600;


    //Game initialization
    let g = new Game(canvas.getContext("2d"));

    //Basic Event Listeners
    //Keys
    document.addEventListener("keydown", (event)=>{

    });
    //Mouse
    canvas.addEventListener("click",(event)=>{
        mouse_pos=getMousePos(event);
        mouse_x=mouse_pos.x;
        mouse_y=mouse_pos.y;
        g.onclick(mouse_x,mouse_y);
    });

    //Basic scripts
    g.login();

    //Game loop
    function game_loop() {
        g.draw();
        setTimeout(requestAnimationFrame(game_loop), 1000);
    }
    game_loop();
}


//Get mouse position inside the canvas
function getMousePos(event) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
}