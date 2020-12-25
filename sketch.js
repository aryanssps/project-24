
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  ground = new Ground(600,570,1200,20);
  log1=new Dustbin(1000,550,200,20);
	log2=new Dustbin(1090,490,20,100);
  log3=new Dustbin(910,490,20,100);
  ball=new  PaperBall(80,530);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
 ground.display();
 log1.display();
 log2.display();
 log3.display();
 ball.display();
}

function keyPressed() {
  if (keyDown("up")) {
    Matter.Body.applyForce(ball.body,ball.body.position,{x:80,y:-85});
  }
}
