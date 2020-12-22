  
var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 600,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -2;
  fixedRect.velocityY = +2;
}

function draw() {
  background(0,0,0); 

bounceOff(movingRect,fixedRect);

  drawSprites();
}

