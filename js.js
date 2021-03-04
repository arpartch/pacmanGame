var score = 0;
var gscore = 0;
var player = {
    x:50,
    y:100,
    pacmouth:320,
    pacdir:0,
    psize:32,
    speed:5
}


var canvas = document.createElement("canvas"); 
var context = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;
mainImage = new Image();
mainImage.ready = false;
mainImage.onload = checkReady;
mainImage.src = "pac.png";


var keyclick = {};
document.addEventListener("keydown", function (event) {
    keyclick[event.KeyCode]=true;
    move(keyclick)
},false); 

document.addEventListener("keyup", function (event) {
    delete keyclick[event.KeyCode];
},false); 

function move(keyclick) {
    player.x++;
    render();
}

function checkReady() {
    this.ready = true;
    playgame();
}

function playgame() {
    render();
}

function render() {
    context.fillStyle = "black";
    context.fillRect(0,0,canvas.width,canvas.height);
    context.drawImage(mainImage,player.pacmouth,player.pacdir,32,32,player.x,player.y,32,32);
    context.font = "20px Verdana";
    context.fillStyle = "white";
    context.fillText("Pacman: "+score+" vs "+gscore, 2,18);
}


document.body.appendChild(canvas); 
// ctx.fillText("helloworld", 10, 150);
