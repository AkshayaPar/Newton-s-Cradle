// creating the variables
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;
var roof;

function preload()
{
	
}

function setup() {
	// creating the canvas
	createCanvas(1600, 700);

    // creating the physics engine
	engine = Engine.create();

	world = engine.world;

	//setting the diameter of the bob
	bobDiameter=50;

    // creating the 5 bobs
	bob1=new Bob(600,650,40);
	bob2=new Bob(650,650,40);
	bob3=new Bob(700,650,40);
	bob4=new Bob(750,650,40);
	bob5=new Bob(800,650,40);

	// creating the roof
	roof = new Roof(400,100,300,40);


	//adding the rope between every bob and roof
	rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0);
    rope2=new Rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0);
	rope3=new Rope(bobObject3.body,roofObject.body,0, 0);
	rope4=new Rope(bobObject4.body,roofObject.body,bobDiameter*1, 0);
	rope5=new Rope(bobObject5.body,roofObject.body,bobDiameter*2, 0);

    // Running the physics engine
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  //setting the background
  background("white");

  // displaying the objects
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
 
  // drawing the sprites
  drawSprites();
 
}

function keyPressed() {

	// when the up arrow is pressed the bob starts moving
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-90});
	}
	}




