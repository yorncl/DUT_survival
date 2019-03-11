class InputHandler {

    constructor(state) {
        this.state = state;
        this.keys = null;
        this.onclick_action = null;
        this.keydown_action = null;
        this.keys_active = false;
        this.mouse_active= false;
        document.addEventListener("keydown", (event) => { this.onkeydown(event) });
        this.state.ctx.canvas.addEventListener("click", (event) => { this.onclick(event) });
    }

    listen_keyboard(value) {
        this.keys_active = value;
    }

    listen_mouse(value) {
        this.mouse_.active = value;
    }

    set_onkeydown_action(action){
        this.onkeydown_action=action;
    }

    set_onclick_action(action){
        this.onclick_action=action;
    }

    onkeydown(event) {
        if (this.onkeydown_action === null)
            throw new Error("Please define onkeydown action with set_onkeydown_action()");
    }

    onclick(event) {
        if (this.onclick_action === null)
            throw new Error("Please define onkeydown action with set_onclick_action()");
        let pos = this.get_mouse_xy(event);
        this.onclick_action(pos.x, posY);
    }

    set_action(action) {
        this.action = action;
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

}