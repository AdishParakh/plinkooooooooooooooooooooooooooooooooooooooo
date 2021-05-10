
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles  = []
var plinko  = []
var division  = []
var score = 0

var divisionHeight = 300

function setup() {
	createCanvas(480, 800);

	engine = Engine.create();
	world = engine.world;

  ground= new Ground(240, 795, 480, 10)

  for (var k = 0;k <=width;k = k +90){
  division.push (new Divisions (k, height-divisionHeight/2, 10, divisionHeight))
}
for (var j = 40 ;j<=width; j=j+50){
  plinko.push(new Plinko (j, 75))
}
for (var j = 15 ;j<=width-10; j=j+50){
  plinko.push(new Plinko (j, 175))
}
for (var j = 40 ;j<=width; j=j+50){
  plinko.push(new Plinko (j, 275))
}
for (var j = 15 ;j<=width-10; j=j+50){
  plinko.push(new Plinko (j, 375))
}


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 text("Score : "+score, 10, 10)
  for (var k = 0;k <division.length;k ++){
   division[k].display()
  }

  for (var k = 0;k <plinko.length;k ++){
    plinko[k].display()
   }
   ground.display();

   if (frameCount%20===0){
     particles.push(new Particle(random(width/2-10, width/2+10), 10, 10))
     score++
   }
   for (var k = 0;k <particles.length;k ++){
    particles[k].display()
   }
  
}



