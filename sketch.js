const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	 engine = Engine.create();
   world = engine.world;
  
    roof=new Roof(width/2,height/4,width/7,20);
    bobDiameter=40;
    bob1=new Bob(350,300,30);
    bob2=new Bob(400,300,30);
    bob3=new Bob(450,300,30);
    rope1=new Rope(bob1,roof,50,50);
    Engine.run(engine);
  
}


function draw() {
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  rope1.display();
  roof.display();
}