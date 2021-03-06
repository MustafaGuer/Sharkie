let canvas;
let world;
let keyboard = new Keyboard();
let startscreen;
let start_sound = new Audio('audio/waterSplash.mp3');
let musicVolume = 2;
let soundVolume = 7;

function init() {
    hide('canvas');
    hide('tryAgainBtn');
    getMusicAndSoundSettings();
}

function getMusicAndSoundSettings() {
    document.getElementById('musicVolNumber').innerHTML = musicVolume;
    document.getElementById('soundVolNumber').innerHTML = soundVolume;
}

function startGame() {
    show('canvas');
    hide('startScreen');
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard, musicVolume / 10, soundVolume / 10);
    start_sound.play();
    start_sound.volume = soundVolume / 10;
}

function quieterMusic() {
    if(musicVolume == 0) {
        musicVolume = 0;
    } else {
        musicVolume--;
    }
    getMusicAndSoundSettings();
}

function louderMusic() {
    if(musicVolume == 10) {
        musicVolume = 10;
    } else {
        musicVolume++;
    }
    getMusicAndSoundSettings();
}

function quieterSound() {
    if(soundVolume == 0) {
        soundVolume = 0;
    } else {
        soundVolume--;
    }
    getMusicAndSoundSettings();
}

function louderSound() {
    if(soundVolume == 10) {
        soundVolume = 10;
    } else {
        soundVolume++;
    }
    getMusicAndSoundSettings();
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

function right() {
    keyboard.RIGHT = true;
}

function reset() {
    location.reload();
}

window.addEventListener('keydown', (e) => {
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

function listenForTouches() {
    document.getElementById('right-pad').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });
    document.getElementById('right-pad').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });
    document.getElementById('left-pad').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });
    document.getElementById('left-pad').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });
    document.getElementById('up-pad').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.UP = true;
    });
    document.getElementById('up-pad').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.UP = false;
    });
    document.getElementById('down-pad').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.DOWN = true;
    });
    document.getElementById('down-pad').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.DOWN = false;
    });
    document.getElementById('slap-pad').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });
    document.getElementById('slap-pad').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
    });
    document.getElementById('bubble-pad').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.D = true;
    });
    document.getElementById('bubble-pad').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.D = false;
    });
    document.getElementById('poison-bubble-pad').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.F = true;
    });
    document.getElementById('poison-bubble-pad').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.F = false;
    })
}