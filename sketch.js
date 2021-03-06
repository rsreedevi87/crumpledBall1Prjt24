
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1200,400);
    engine = Engine.create();    
    world = engine.world;

    box1 = new Box(990,320,20,160);
    box2 = new Box(890,370,180,20);
    box3 = new Box(800,320,20,160);
    

    ground = new Ground(600,height,1200,40);
    paper = new Paper(100,100,30);
  
}


function draw() {
	background(0);
    Engine.update(engine);
   
    box1.display();
    box2.display();
    box3.display();

    ground.display();
 

    paper.display();
}

function keyPressed(){
    if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:160,y:-190});
}
}

