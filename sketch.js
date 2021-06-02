const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

 var ground ;
 var box_1,box_2;
 var superHero;
var backgroundImg;
var Enemy_1 ,enemy_1_img,enemy_2_img

function preload() {
  backgroundImg = loadImage("images/GamingBackground.png");
  enemy_1_img = loadImage("images/Monster-01.png");
  enemy_2_img = loadImage("images/Monster-02.png");
}

function setup() {
  createCanvas(1700,600);
  
  engine_my = Engine.create();
  world = engine_my.world;

  ground = new Ground(0,580,1700,40);

  //level one
  block1 = new Block(300,270,30,30);
  block2 = new Block(330,270,30,30);
  block3 = new Block(360,270,30,30);
  block4 = new Block(390,270,30,30);
  block5 = new Block(420,270,30,30);
  block6 = new Block(450,270,30,30);
  block7 = new Block(480,270,30,30);

  block8 = new Block(330,235,30,30);
  block9 = new Block(360,235,30,30);
  block10 = new Block(390,235,30,30);
  block11 = new Block(420,235,30,30);
  block12 = new Block(450,235,30,30);

  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);

  block16 = new Block(390,155,30,40);

 Enemy_1 = createSprite(1000,450);
  

  superHero = new Superman(200,200,100);
  


}

function draw() {
 background(backgroundImg);  
  
  Engine.update(engine_my);

 ground.display();

 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
/// Eemy is sprite
 Enemy_1 = createSprite(1000,450);
 Enemy_1.addImage(enemy_1_img);
 Enemy_1.scale=0.3;

 superHero.display();
 drawSprites()
}
function touch(){
  if (superHero.istouching == Enemy_1){
    Enemy_1.addImage(enemy_2_img);
  }
}