let canvas; // Die "Leinwand" auf der gezeichnet wird
let ctx;    // Mit dem Context zeichnet man auf den Canvas (der Pinsel im übertragenen Sinn)
let character = new MovableObject();


function init() {

    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');




    console.log('My Character is: ', character);


}