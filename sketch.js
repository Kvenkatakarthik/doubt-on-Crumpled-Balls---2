var ball_image,dustbin_image,dust,paper,ball1,ball2;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
  dustbin_image=loadImage("dustbingreen.png")
  ball_image=loadImage("paper.png")


}



function setup() {
	createCanvas(1350, 1000);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
wall1d = createSprite(1000,784,250,15)
wall1d.shapeColor="white"

wall2 = createSprite(872,640,20,300)
wall2.shapeColor="white"

wall3 = createSprite(1128,640,20,300)
wall3.shapeColor="white"

dust = createSprite(1000,630,30,30)
dust.addImage(dustbin_image)

ball1=createSprite (200,100,30,15*2)
ball1.scale=0.9

ball2 = Bodies.circle(200,100 , 30 ,30, {restitution:1,'friction':1,'density':95 ,isStatic:false});
World.add(world, ball2);

var ground_options ={
  isStatic: true
}

ground = Bodies.rectangle(1350/2,800,1350,15,ground_options);
World.add(world,ground);

var wall_options ={
    isStatic: true
}

wall1 = Bodies.rectangle(1000,784,250,15,wall_options);
World.add(world,wall1);

wall2= Bodies.rectangle(872,640,25,300,wall_options);
World.add(world,wall2);

wall3 = Bodies.rectangle(1128,640,25,200,wall_options);
World.add(world,wall3);





	Engine.run(engine);
    
}



function draw() {
  rectMode(CENTER);
  background("lightblue");

  ball1.x= ball2.position.x ;
  ball1.y= ball2.position.y ;
  

   rect(wall1.position.x,wall1.position.y,250,15);
  rect(wall2.position.x,wall2.position.y,20,300);
  rect(wall3.position.x,wall3.position.y,20,300);
  rect(ground.position.x,ground.position.y,1350,15);
  ball1.display();
  keyPressed();
  drawSprites();
}


  function keyPressed(){ 
    if(keyCode === UP_ARROW){
       Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85}); 
      } 
    }



