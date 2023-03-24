const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1280, 645);
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=Matter.Bodies.circle(30, 200, 15)
	Matter.World.add(world,ball)
	Engine.run(engine);
	groundObj=new Ground(width/2,640,width	,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1250,600,20,120);
}


function draw() {
  rectMode(CENTER);
  background(0);


	ellipseMode(RADIUS)	
	ellipse(ball.position.x,ball.position.y,15,15)
    groundObj.display();
	leftSide.display();
	rightSide.display();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	 Matter.Body.applyForce(ball, ball.position,{x:0.05,y:0})
	}
}



