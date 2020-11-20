
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground_shown;
var basket1, basket2, basket3;
var paper_shown, paper2;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//bodies
	ground_shown = new ground(600, 490, 1200, 20);

	basket1 = new basket(900, 480, 180, 20);
	basket2 = new basket(990, 450, 20, 80);
	basket3 = new basket(810, 450, 20, 80);

	paper_shown = new paper(200, 470, 20);

	Engine.run(engine);
  
}


function draw() {

	rectMode(CENTER);
	background(0);
	  
	Engine.update(engine);

	ground_shown.display();
	basket1.display();
	basket2.display();
	basket3.display();
	paper_shown.display();

 	drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paper_shown.body,paper_shown.body.position,{x:70,y:-70});
	}	
}