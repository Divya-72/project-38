
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bg,bgImage;
var car,carImage;
var boundry1,boundry2;
var boundry3;
var distance;
var cars;
var car1Image,car2Image,car3Image;
var redcars,bluecars,blackcars;
var damage;
var Cars;
var redCarGroup,blueCarGroup,blackCarGroup;
var gameoverImage;



function preload()
{
	bgImage=loadImage("1.jpg");
  carImage=loadImage("car.png");
  car1Image=loadImage("bluecar.png");
  car2Image=loadImage("blackcar.png");
  car3Image=loadImage("redcar.png");
   gameoverImage=loadImage("gameover.jpg");
 



}

function setup() {
	createCanvas(1300, 500);


	engine = Engine.create();
	world = engine.world;

  

bg=createSprite(650,250,0,0);
bg.scale=2;
bg.velocityX=-9;
bg.x=0;
bg.addImage(bgImage);

redCarGroup=createGroup();
blueCarGroup=createGroup();
blackCarGroup=createGroup();





car=createSprite(500,300,50,50);
car.scale=0.2;
car.addImage(carImage);

boundry1=createSprite(0,250,10,500);
//boundry1.visible=false;

boundry2=createSprite(450,-100,1700,10);
//boundry2.visible=false;

boundry3=createSprite(1300,250,10,500);
//boundry3.visible=false;

boundry4=createSprite(450,700,1700,10);
//boundry4.visible=false;


damage=0;

	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(133,133,133);
  
car.collide(boundry1);
car.collide(boundry2);
car.collide(boundry3);
car.collide(boundry4);

if(bg.x<0){
  bg.x=bg.width/2;
  }
 
  camera.velocityX-4;


if(keyDown("right")){
camera.position.x=1300/2;
camera.position.y=car.y;

}

if(keyDown("left")){
  camera.position.x=1300/2;
  camera.position.y=car.y;
  }

if(keyDown("up")){
  camera.position.x=1300/2;
  camera.position.y=car.y;
  }

if(keyDown("down")){
  camera.position.x=1300/2;
  camera.position.y=car.y;
    }
    

if(keyDown("up")){
  car.y=car.y-5;
}

if(keyDown("down")){
  car.y=car.y+5;
}

if(keyDown("left")){
  car.x=car.x-5;
}


if(keyDown("right")){
  car.x=car.x+5;

}


if(damage===300){
background(gameoverImage);
bg.visible=false;
car.visible=false;
redCarGroup.destroyEach();
blueCarGroup.destroyEach();
blackCarGroup.destroyEach();
text("Better,Try Next Time")

camera.destroy();



}

if(car.isTouching(redCarGroup)){
damage=+100;
redCarGroup.destroyEach();

}

if(car.isTouching(blueCarGroup)){
  damage=+200;
blueCarGroup.destroyEach();

  
  }
  
if(car.isTouching(blackCarGroup)){
    damage=+300;
blackCarGroup.destroyEach();
    
    }
      









spawnblueCars();
spawnredCars();
spawnblackCars();





  drawSprites();


  textSize(20);
  fill("white");
  stroke("black");
  strokeWeight(5);
  distance=Math.ceil(frameCount/frameRate());
  text("Distance :  "+ distance , 50,20);


  textSize(20);
  fill("white");
  stroke("black");
  strokeWeight(5);
  text("Damage :  "+ damage , 250,20);

}


function spawnblueCars() {

  if (frameCount % 300 === 0) {
 bluecars = createSprite(600,250,40,10); 
 bluecars.y = random(100,450);
 bluecars.x=800;
  
  bluecars.velocityX = -8;
  
  
  bluecars.lifetime = 300; 
  
  blueCarGroup.add(bluecars);
  
  bluecars.addImage(car1Image);
  bluecars.scale=0.3;
  
} 
}


function spawnredCars() {

  if (frameCount % 400 === 0) {
 redcars = createSprite(600,250,40,10); 
 redcars.y = random(100,450);
 redcars.x=800;
  
  redcars.velocityX = -11;
  
  
  redcars.lifetime = 300; 
  
  redCarGroup.add(redcars);
  redcars.addImage(car3Image);
  redcars.scale=0.4;
  
} 
}


function spawnblackCars() {

  if (frameCount % 650 === 0) {
 blackcars = createSprite(600,250,40,10); 
 blackcars.y = random(100,450);
 blackcars.x=800;
  
  blackcars.velocityX = -13;
  
  
  blackcars.lifetime = 300; 
  
  blackCarGroup.add(blackcars);
  
  blackcars.addImage(car2Image);
  blackcars.scale=0.4;
  
} 
}