let canvas; // Die "Leinwand" auf der gezeichnet wird
let ctx;    // Mit dem Context zeichnet man auf den Canvas (der Pinsel im übertragenen Sinn)

function init() {
    
    
    canvas = document.getElementById('canvas');

    ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';  // .fillStyle bewirkt das der ctx mit einer farbe gefüllt wird
    ctx.fillRect(0, 0, canvas.width, canvas.height); // mit .fillRect sagt man das man ein rechteck malen will mit den Werten in den Klammer

}