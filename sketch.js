
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var chain1, ball1;
var chain2, ball2;
var chain3, ball3;
var chain4, ball4;
var chain5, ball5;
var chain6, ball5;
var chain7, ball5;
var roof;
var roof2;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	
	roof = new Ground(400, 150,700,50);
	roof2 = new Ground(100, 150,100,50);
	roof3 = new Ground(200, 150,100,50);
	roof4 = new Ground(300, 150,100,50);
	roof5 = new Ground(500, 150,100,50);
	roof6 = new Ground(600, 150,100,50);
	roof7 = new Ground(700, 150,100,50);
	ball1 = new ball(400,350);
	ball2 = new ball(100,350);
	ball3 = new ball(200,350);
	ball4 = new ball(300,350);
	ball5 = new ball(500,350);
	ball6 = new ball(600,350);
	ball7 = new ball(700,350);
	chain1 = new Chain(roof.body,ball1.body)
	chain2 = new Chain(roof2.body,ball2.body)
	chain3 = new Chain(roof3.body,ball3.body)
	chain4 = new Chain(roof4.body,ball4.body)
	chain5 = new Chain(roof5.body,ball5.body)
	chain6 = new Chain(roof6.body,ball6.body)
	chain7 = new Chain(roof7.body,ball7.body)
}	


function draw() {
  rectMode(CENTER);
  background(255);
  roof.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();
  chain1.display(); 
  chain2.display(); 
  chain3.display(); 
  chain4.display(); 
  chain5.display();
  chain6.display();
  chain7.display();   
  text("Press Up arrow then down arrow",100,150)
  
  drawSprites();
  text("Press Up arrow then down arrow",100,150)
  keypressed();
}


function keypressed(){
	if(keyCode === UP_ARROW){
		ball7.body.position.x = ball7.body.position.x + 1
		
	}

}
