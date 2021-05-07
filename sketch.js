
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var groundImg;

function preload()
{
 groundImg=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(2000, 700);
                               

	engine = Engine.create();                                             
	world = engine.world;
                                                                                                                                                                                                 
                                                                                                                                        
   paperObject=new Trash(80,200,50);
   ground=new Ground(1,700,20000,30);

  Engine.run(engine);
                 
  box1=new Box(650,676,250,20);

	box2=new Box(770,646,20,80);               
  box3=new Box(530,646,20,80); 
  box4=new Box(1250,676,250,20);
	box5=new Box(1130,646,20,80);               
  box6=new Box(1370,646,20,80);     
  box7=new Box(1800,676,250,20);
	box8=new Box(1680,646,20,80);               
  box9=new Box(1910,646,20,80);            
                                 
                  
                                                                                                
                
}
              
                          
function draw() {            
  rectMode(CENTER);
  background(100);
                                                  
  paperObject.display()                                                                                                                                                          
  ground.display();
  box1.display()
  box2.display()
  box3.display() 
  box4.display()
  box5.display()
  box6.display() 
  box7.display()
  box8.display()
  box9.display()                 
                   
  
  drawSprites();

  image(groundImg,510,500,290,200)
  image(groundImg,1100,500,290,200)
  image(groundImg,1650,500,290,200)
 
}

function keyPressed(){
  if (keyCode=== UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:100,y:-100})
  }
}



