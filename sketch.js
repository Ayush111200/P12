var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
 movingRect = createSprite(400,200,50,80);
 movingRect.shapeColor = "green";

 fixedRect = createSprite(200,200,80,50);
 fixedRect.shapeColor = "green";
 }

function draw() {
  background(255,255,255);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  console.log(movingRect.x -fixedRect.x);
  if(movingRect.x -fixedRect.x < fixedRect.width/2 +movingRect.width/2
    &&  fixedRect.x -movingRect.x < fixedRect.width/2 +movingRect.width/2
    &&  movingRect.y -fixedRect.y < fixedRect.height/2 +movingRect.height/2
    &&  fixedRect.y -movingRect.y < fixedRect.height/2 +movingRect.height/2

    )
    {
movingRect.shapeColor = "red";
fixedRect.shapeColor = "red";
  }
else{
  movingRect.shapeColor = "green";
fixedRect.shapeColor = "green";
}
  drawSprites();
}