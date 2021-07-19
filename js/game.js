let canvas;
let world;
let keyboard = new Keyboard();
let startscreen;
let start_sound = new Audio('../audio/waterSplash.mp3');
let background_music = new Audio('../audio/bgmChill.mp3');


function init() {
    hide('canvas');
    hide('tryAgainBtn');
    background_music.play();
    background_music.volume = 0.4;
    background_music.loop = true;
}

function startGame() {
    show('canvas');
    hide('startScreen');
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    start_sound.play();
    start_sound.volume = 0.3;
    background_music.pause();
    muteGame();
    
}

function muteGame() {
    
}

function hide(id) {
    document.getElementById(id).classList.add('d-none');
}

function show(id) {
    document.getElementById(id).classList.remove('d-none');
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
    if (e.key == 'ArrowRight') {
        keyboard.RIGHT = true;
    }
    if (e.key == 'ArrowLeft') {
        keyboard.LEFT = true;
    }
    if (e.key == ' ') {
        keyboard.SPACE = true;
    }
    if (e.key == 'd') {
        keyboard.D = true;
    }
    if (e.key == 'f') {
        keyboard.F = true;
    }
    if (e.key == 'Enter') {
        keyboard.ENTER = true;
    }
})

window.addEventListener('keyup', (e) => {
    if (e.key == 'ArrowUp') {
        keyboard.UP = false;
    }
    if (e.key == 'ArrowDown') {
        keyboard.DOWN = false;
    }
    if (e.key == 'ArrowRight') {
        keyboard.RIGHT = false;
    }
    if (e.key == 'ArrowLeft') {
        keyboard.LEFT = false;
    }
    if (e.key == ' ') {
        keyboard.SPACE = false;
    }
    if (e.key == 'd') {
        keyboard.D = false;
    }
    if (e.key == 'f') {
        keyboard.F = false;
    }
    if (e.key == 'Enter') {
        keyboard.ENTER = false;
    }
})