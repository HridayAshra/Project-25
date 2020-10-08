var paper, ground, paper_img, box_img, box;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(200,200,25);
	ground = new Ground(width/2,580,width,30);
    box=new Dust_bin();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(400);

box.display();
ground.display();
paper.display();

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:137,y:-100});
	}
}


