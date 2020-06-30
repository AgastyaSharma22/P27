const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
  createCanvas(800, 700);


	 engine = Engine.create();
   world = engine.world;
   roof=new Roof(400,200,300,20);
   bobDiameter=60;
  bob1=new Bob(300,400,60);
  bob2=new Bob(350,400,60);
  bob3=new Bob(400,400,60);
  bob4=new Bob(450,400,60);
  bob5=new Bob(500,400,60);
  rope1=new Rope(bob1.body,roof.body,-bobDiameter*2,10);
  rope2=new Rope(bob2.body,roof.body,-bobDiameter*1,10);
  rope3=new Rope(bob3.body,roof.body,-bobDiameter*0,10);   
  rope4=new Rope(bob4.body,roof.body,bobDiameter*1,10);
  rope5=new Rope(bob5.body,roof.body,bobDiameter*2,10);
    Engine.run(engine);
  
}
function draw() {
  background(80,80,80);
    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
    roof.display();
}
function keyPressed(){
   if(keyCode === UP_ARROW){
     Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-120,y:0});
   }
}