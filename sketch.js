
function preload(){
 //load your images here 
  coinI=loadImage("coin.png")
  dragonI=loadImage("dragon.png")
  fireI=loadImage("fire.png")
  ironmanI=loadImage("iron man.png")
  pumpkinI=loadImage("pumpkin.png")
  weaponI=loadImage("w.png")
  brick=loadImage("brick.JPG")
  backgroundI=loadImage("background.jpg")
  winI=loadImage("win.jpg")
  startI=loadImage("start.JPG")
}

function setup() {
  createCanvas(500,400);
  
Background=createSprite(250,200,10,10)
  Background.addImage(backgroundI)
  Background.scale=0.12
  
  ironman=createSprite(30,360,500,10)
  ironman.addImage(ironmanI)
  ironman.scale=0.10
  
  block=createSprite(180,300,10,10)
  block.addImage(brick)
  block.scale=0.30
  block2=createSprite(315,200,10,10)
  block2.addImage(brick)
  block2.scale=0.30
  block3=createSprite(180,100,10,10)
  block3.addImage(brick)
  block3.scale=0.30
  
  coin=createSprite(50,50,10,10)
  coin.addImage(coinI)
  coin.scale=0.10
  
  dragon=createSprite(100,50,10,10)
  dragon.addImage(dragonI)
  dragon.scale=0.10
  
  pumpkin=createSprite(300,260,10,10)
  pumpkin.addImage(pumpkinI)
  pumpkin.scale=0.10
  
  pumpkin2=createSprite(200,160,10,10)
  pumpkin2.addImage(pumpkinI)
  pumpkin2.scale=0.10
  
  
  edges=createEdgeSprites();
  
  pumpkin.velocityX=15
  pumpkin2.velocityX=20
  dragon.velocityY=2
  
  fire=createSprite(110,50,0.1,0.1)
  weapon=createSprite(30,360,0.1,0.1)
  
  start=createSprite(253,200,10,10)
  start.addImage(startI)
  start.scale=0.74
  
}

function draw() {
  ironman.velocityX=0
  ironman.velocityY=0
  if(keyDown("s")){
    start.destroy()
  }
  
  
  
  block3.bounceOff(edges)
  
  background("white");
  ironman.collide(block)
  ironman.collide(block2)
  ironman.collide(block3)
  ironman.collide(edges)
  
  if(keyDown("up")){
    ironman.velocityY=-4
    ironman.rotation=0
  }
  if(keyDown("down")){
    ironman.velocityY=4
    ironman.rotation=180
  }
  if(keyDown("left")){
    ironman.velocityX=-4
    ironman.rotation=-90
  }
  if(keyDown("right")){
    ironman.velocityX=4
    ironman.rotation=90
  }
  
  pumpkin.bounceOff(edges)
  pumpkin2.bounceOff(edges)
  dragon.bounceOff(edges)
  dragon.bounceOff(block3)
  
  
  
if(ironman.y<110){
  fire.velocityX=7
  fire.addImage(fireI);
  fire.scale=0.05
  if(fire.x>390){
    fire.x=110
      fire.y=50
  
}}
  
  
  if(fire.isTouching(ironman)){
    ironman.x=30 
    ironman.y=360
    
  }
  if(pumpkin.isTouching(ironman)){
    ironman.x=30 
    ironman.y=360
  }
  if(pumpkin2.isTouching(ironman)){
    ironman.x=30
    ironman.y=360
  }
  
  
  if(keyDown("space")){

    if(ironman.rotation==90){
      weapon.addImage(weaponI)
    weapon.scale=0.05
    weapon.velocityX=7
      weapon.velocityY
      weapon.x=ironman.x
    weapon.y=ironman.y
  } 
    if(ironman.rotation==-90){
      weapon.addImage(weaponI)
    weapon.scale=0.05
    weapon.velocityX=-7
      weapon.x=ironman.x
    weapon.y=ironman.y}
  }
  if(weapon.isTouching(dragon)){
    dragon.destroy()
  if(dragon.destroy){
    fire.destroy()
  }}
  if(weapon.isTouching(pumpkin)){
    pumpkin.destroy()
  }
  if(weapon.isTouching(pumpkin2)){
    pumpkin2.destroy()
  }
  
  if(ironman.isTouching(coin)){
    win=createSprite(250,200,1,1)
    win.addImage(winI)
    win.scale=1.2
    
  }
  
 
  
  drawSprites();
}

