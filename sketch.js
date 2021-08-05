
var path,runner,leftBoundary,rightBoundary;;
var pathImg,runnerImg;

function preload(){
  
pathImg=loadImage("path.png");
runnerImg=loadAnimation("Runner-1.png","Runner-1.png","Runner-2.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  
  pathImg=createSprite(400,200);
  pathImg.addImage(pathImg);
  pathImg.scale=1.2;
  pathImg.velocityY=4;
 

  ruunerImg=createSprite(200,100,30,30);
  runnerImg.addAnimation("runningpath",runnerImg);
  runnerImg.velocityY=4;

leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible=false;

rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible=false;
}

function draw() {
  background(0);
 
  if(keyDown("RIGHT_ARROW")){
   runnerImg.x=+2;
 }
 if(keyDown("LEFT_ARROW")){
   runnerImg.x=-2;
 }

  if(pathImg.y>400){
  pathImg.y=height/400;
}
edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
drawSprites();
}
