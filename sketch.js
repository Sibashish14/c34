const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var canvas,engine,world,ground,ball,sling,box1,box2;

function setup(){
  canvas=createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,600,width,10);
  ball = new Ball(400,400);
  sling = new Cons(ball.body,{x:400,y:150});
  box1 = new Box(550,590,50,50);
  box2 = new Box(550,565,50,50);
  box3 = new Box(550,540,50,50);
  box4 = new Box(550,515,50,50);
  box5 = new Box(550,490,50,50);
  box6 = new Box(550,465,50,50);
  box7 = new Box(590,590,50,50);
  box8 = new Box(590,565,50,50);
  box9 = new Box(590,540,50,50);
  box10 = new Box(590,515,50,50);
  box11 = new Box(630,590,50,50);
  box12 = new Box(630,565,50,50);
  box13 = new Box(630,540,50,50);
  box14 = new Box(630,515,50,50);
  box15 = new Box(630,490,50,50);
  box16 = new Box(630,465,50,50);
  box17 = new Box(630,440,50,50);
  box18 = new Box(670,590,50,50);
  box19 = new Box(670,565,50,50);
  box20 = new Box(670,540,50,50);
}

function draw() {
  background(255); 
  Engine.update(engine);
  ground.display();
  ball.display();
  sling.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}