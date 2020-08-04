var canvas,form,game,player
var gameState=0;
var playerCount
var database,position
function setup(){
    database=firebase.database();
canvas=    createCanvas(400,400);
    game=new Game();
    game.getState()
    game.start()
}

function draw(){
    background("white");
   
    drawSprites();
}

