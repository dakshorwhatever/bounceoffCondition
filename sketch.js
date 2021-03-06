var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityX = -1;
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityX = 1;
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  /*movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;*/

  if (isTouching(movingRect,fixedRect)) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  bounceOff(movingRect,fixedRect);
  drawSprites();
}