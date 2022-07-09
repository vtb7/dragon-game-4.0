var dragon,dragonImg;
var sky,skyImg;
var archer,archerImg;
var arrow,arrowImg;
var boundry1,boundry2
var fireballImg;
var fireballGroup
var arrowGroup
var archerLives=3
function preload(){
  dragonImg=loadImage("assets/Dragon.png")
  skyImg=loadImage("assets/Sky.jpg")
  arrowImg=loadImage("assets/Arrow.png")
  archerImg=loadImage("assets/Archer.png");
  fireballImg=loadImage("assets/fireball.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  sky=createSprite(200,200,windowWidth,windowHeight)
  sky.addImage(skyImg)
  sky.scale=0.9
  sky.velocityX=-2
  dragon=createSprite(1317,239)
  dragon.addImage(dragonImg)
  dragon.velocityY=-3;

  archer=createSprite(150,300)
  archer.addImage("archer",archerImg)

  boundry1=createSprite(1090,44,800,20)
  boundry2=createSprite(1090,689,800,20)
  boundry1.visible=false;
  boundry2.visible=false;

  arrowGroup=new Group()
  fireballGroup=new Group()
}

function draw() {
  //console.log(mouseX,mouseY);
  background(180);
  dragon.bounceOff(boundry1);
  dragon.bounceOff(boundry2);
 
  if (sky.x < 0){
    sky.x = sky.width/3;
  }
  //archer movement
  if(keyIsDown(UP_ARROW)) 
  archer.y=archer.y-5

  if(keyIsDown(DOWN_ARROW)) {
    archer.y=archer.y+5
  }

  if(keyDown("space")){
    arrow=createSprite(archer.x+100,archer.y+15);
    arrow.addImage(arrowImg);
    arrow.velocityX=6;
    arrow.scale=0.4
    arrowGroup.add(arrow)
  }
  spawnFireballs()
  drawSprites()
  if(fireballGroup.isTouching(archer)) {
    fireballGroup.destroyEach()
    archer.scale-=0.25
    archerLives=archerLives-1
    console.log(archerLives)
  
  }
  if(archerLives===0){
    archer.destroy()
    text("Game Over",width/2,height/2)
  }
    }
  function spawnFireballs() {
    if(frameCount%80==0) {
      var fireball = createSprite(dragon.x-100,dragon.y-40,40,40)
      fireball.addImage(fireballImg);
      fireball.velocityX=-5
      fireball.scale=0.3
      fireballGroup.add(fireball)
    }

  }
  
  
   
     
   
   
