const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

var engine,world;

function setup() {
  createCanvas(400,400);
  engine =Engine.create();
  world =engine.world;
  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,400,50,ground_options);
  var ball_options={
    restitution:2.0
  }
  ball = Bodies.circle(100,200,30,ball_options);
  World.add(world,ball);  
  World.add(world,ground);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,50);
  ellipse(ball.position.x,ball.position.y,30);
  drawSprites();
}