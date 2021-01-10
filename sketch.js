var superman,supermanImg
var zombieImg,zombie;
var scaredPerson
var scaredPerson1Img,scaredPerson2Img
var background1,backgroundImg;
var superJumpingImg;
var supermanPunchingImg
var zombie2img
var scaredPerson3img
var scaredPerson4img
var peoplesGroup
var zombiesGroup
var punchSound
var backsound
var score
var health

function preload()
{
supermanImg=loadImage("images/superman.png")

zombieImg=loadImage("images/zombie.png")

scaredPerson1Img=loadImage("images/unnamed.gif")
scaredPerson2Img=loadImage("images/scaredPerson.png")
scaredPerson3img=loadImage("images/scaredPerson2.png")
scaredPerson4img=loadImage("images/scaredPerson3.gif")

backgroundImg=loadImage("images/background 1.jpg")

supermanJumpingImg=loadImage("images/jumping.png")
supermanPunchingImg=loadImage("images/punching.png")

zombie2img=loadImage("images/zombie2.png")

punchSound=loadSound("images/PUNCH.mp3")

backsound=loadSound("images/background.mp3")

}

function setup() {
  createCanvas(2000, 900);
  backsound.loop();
  background1=createSprite(1000,200)
  background1.addImage(backgroundImg)
  background1.scale=4
  background1.velocityX=-10

 superman=createSprite(170,500,40,70) 
 superman.addImage(supermanImg)
 superman.scale=0.2
superman.velocityX=0

peoplesGroup=new Group()
zombiesGroup=new Group()

superman.debug=true
superman.setCollider("rectangle",0,0,300,400)

score=0

health=100
}

function draw() {  
background(0)



if (background1.x<700){
 background1.x=1000 
}

if (keyIsDown(RIGHT_ARROW)){
superman.velocityX=1
}
if (keyWentDown("SPACE")){
 superman.addImage(supermanJumpingImg) 
}
if (keyWentUp("SPACE")){
  superman.addImage(supermanImg) 
 }
if (keyWentDown("P")){
  superman.addImage(supermanPunchingImg)
  superman.scale=0.7
  punchSound.play()
  if (superman.isTouching(zombiesGroup)){
    zombiesGroup.destroyEach() 
    score=score+3
   }
  
}
if (keyWentDown("h")){
 peoplesGroup.destroyEach() 
 score=score+10
}
if (keyWentUp("P")){
  superman.addImage(supermanImg)
  superman.scale=0.2 
  
}

if (zombiesGroup.isTouching(superman)){
 health=health-20
 zombiesGroup.destroyEach()

}
spawnZombies();
spawnPeople();
  drawSprites();
  textSize(30)
  fill("white")
text("SCORE : "+score,100,100)

textSize(30)
fill("white")
text("YOUR HEALTH : "+health+"%",100,200)
  //add styles here

}
 
function spawnZombies(){
 if (frameCount%280===0){
 zombie=createSprite(2000,530,50,70)  
 zombie.debug=true
 zombie.setCollider("rectangle",0,10,100,150)
 ran=Math.round(random(1,2))
 if (ran===1){
   zombie.addImage(zombieImg)
 }
 else{
 zombie.addImage(zombie2img)  
 }
 zombie.velocityX=-5
 zombiesGroup.add(zombie)
 zombie.scale=0.15
 } 
}

function spawnPeople(){
  if (frameCount%250===0){
  scaredPerson=createSprite(2000,550,50,70)
  var rand=Math.round(random(1,4))  
  if (rand===1){
    scaredPerson.addImage(scaredPerson1Img)
  }
  else if (rand===2){
    scaredPerson.addImage(scaredPerson2Img) 
  }
  else if (rand===3){
    scaredPerson.addImage(scaredPerson3img)
    scaredPerson.scale=0.1
  }
  else{
    scaredPerson.addImage(scaredPerson4img)
  }
  scaredPerson.velocityX=-3
  peoplesGroup.add(scaredPerson)
  }
  }


