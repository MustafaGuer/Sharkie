let canvas; // Die "Leinwand" auf der gezeichnet wird
let ctx;    // Mit dem Context zeichnet man auf den Canvas (der Pinsel im übertragenen Sinn)
let character = new Image();


function init() {

    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');




    character.src = '../img/1.Sharkie/3.Swim/1.png';

    ctx.drawImage(character, 20, 20, 50, 150);

}