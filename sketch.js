const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground,groundOptions;


var ball,ballOption;

function setup(){
  createCanvas(400,400);

  groundOptions = {
    isStatic : true
  }
  ballOption = {
    restitution: 1.0
  }

  myEngine = Engine.create();
  //myWorld is myEngine's world 
  myWorld = myEngine.world;
  

  ground = Bodies.rectangle(200,380,400,10,groundOptions);
  World.add(myWorld,ground);
  console.log(ground.isStatic);

  ball = Bodies.circle(100,300,20,ballOption);
  World.add(myWorld,ball);







}
function draw(){
  background("black");
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);


}