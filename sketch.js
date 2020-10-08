const engine = Matter.Engine;
const worldc = Matter.World;
const bodies = Matter.Bodies;

var engine1,world,ground;

var box1,box2;

function setup() {
  createCanvas(600,300);

  engine1 = engine.create();
  world = engine1.world;
  var gravity = {

  isStatic : true

  }
  ground = bodies.rectangle(300,250,50,50,gravity);
  worldc.add(world,ground);

box2 = new box(320,150,50,100);
  box1 = new box(300,200,50,50);
  
}

function draw() {
  background(255,0,0);

  engine.update(engine1);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 600, 50);

 box1.display();
 box2.display();
}