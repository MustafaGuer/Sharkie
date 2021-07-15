let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas'); 
    world = new World(canvas, keyboard);
}

function fullScreen() {
    canvas = document.getElementById('canvas');
    canvas.requestFullscreen();
}

function reset() {
    location.reload();
}

window.addEventListener('keydown', (e) => {
    // console.log(e.key);
    if (e.key == 'ArrowUp') {
        keyboard.UP = true;
    }
    if (e.key == 'ArrowDown') {
        keyboard.DOWN = true;
    }
    if(e.key == 'ArrowRight') {
        keyboard.RIGHT = true;
    }
    if(e.key == 'ArrowLeft') {
        keyboard.LEFT = true;
    }
    if(e.key == ' ') {
        keyboard.SPACE = true;
    }
    if(e.key == 'd') {
        keyboard.D = true;
    }
})

window.addEventListener('keyup', (e) => {
    if(e.key == 'ArrowUp') {
        keyboard.UP = false;
    }
    if(e.key == 'ArrowDown') {
        keyboard.DOWN = false;
    }
    if(e.key == 'ArrowRight') {
        keyboard.RIGHT = false;
    }
    if(e.key == 'ArrowLeft') {
        keyboard.LEFT = false;
    }
    if(e.key == ' ') {
        keyboard.SPACE = false;
    }
    if(e.key == 'd') {
        keyboard.D = false;
    }
})