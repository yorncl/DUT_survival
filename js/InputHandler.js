class InputHandler {

    constructor(state) {
        this.state = state;
        this.onclick_action = null;
        this.keydown_action = null;
        this.keys_active = false;
        this.mouse_active = false;
        this.pressed_keys=new Array();
        document.addEventListener("keydown", event => { this.pressed_keys[event.key] = true; });
        document.addEventListener("keyup", event => { this.pressed_keys[event.key] = false; });
        this.state.ctx.canvas.addEventListener("click", (event) => { this.onclick(event) });
        this.state.ctx.canvas.addEventListener("mousemove", (event) => { this.onmousemove(event) });
    }

    listen_keyboard(value) {
        this.keys_active = value;
    }

    listen_mouse(value) {
        this.mouse_active = value;
    }

    set_keys_action(action) {
        this.handle_keys_action = action;
    }

    set_onclick_action(action) {
        this.onclick_action = action;
    }

    set_onmousemove_action(action){
        this.onmousemove_action=action;
    }

    onclick(event) {
        if (!this.mouse_active)
            return;
        if (this.onclick_action === null)
            throw new Error("Please define onclick action with set_onclick_action()");
        let pos = this.get_mouse_xy(event);
        this.onclick_action(pos.x, pos.y);
    }

    onmousemove(event){
        if (!this.mouse_active)
            return;
        if (this.onmousemove_action === null)
            throw new Error("Please define onmousemove action with set_onmousemove_action()");

        let pos = this.get_mouse_xy(event);
        this.onmousemove_action(pos.x, pos.y);
    }

    set_controls_to(keys) {
        this.keys = keys;
    }

    get_mouse_xy(event) {
        var rect = this.state.ctx.canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }

    handle(){
       if(this.keys_active){
            this.handle_keys_action();
       }
    }

}