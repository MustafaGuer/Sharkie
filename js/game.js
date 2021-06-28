let canvas;
let ctx;

function init() {
    
    
    canvas = document.getElementById('canvas');

    ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

}