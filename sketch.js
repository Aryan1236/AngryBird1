const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200*3+100,300+20,50+20,50+20);
    box2 = new Box(240*3+200,100*3+20,50+20,100-30);
    ground = new Ground(200*3,height,1200,20)
    pig1 = new Pig(200*4+10,200*2-50) ;
    log1 = new Log(100*8+10,300-40,100*3,PI/2);
    box3 = new Box(240*3-20,100*3-60,50+20,100-30);
    box4 = new Box(240*3+200,100*3+20-80,50+20,100-30);
    pig3 = new Pig (200*4+10,200+20);
    log3 = new Log(100*8+10,300-40-80,100*3,PI/2);
    box5 = new Box(240*3+200-110,100*3+20-160,50+20,100-30);
    log4 = new Log(760,120,100*3/2,PI/7);
    log5 = new Log(100*8+10+60,120,150,-PI/7);
    bird = new Bird (100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    pig3.display();
    box4.display();
    box3.display();
    log3.display();
    log5.display();
    log4.display();
    box5.display();
    bird.display();
}