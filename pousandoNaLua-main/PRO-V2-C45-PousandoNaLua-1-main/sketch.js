let ground;
let lander;
var lander_img;
var bg_img;

//vx = Velocidade X, g = Gravidade, vy = Velocidade Y
var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
lander_img = loadImage("plataforma.png")
bg_img = loadImage("bg.png")
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);
//criar sprite lander e add imagem e scale
  ground = createSprite(200,650,1050,40)
  lander = createSprite(880,595,180,120)
  lander.addImage(lander_img)
  lander.scale = 0.4


  rectMode(CENTER);
  textSize(15);
}

function draw() 
{

  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  //colocar texto na tela para velocidade vertical
  text("Velocidade Vertical", 800, 140)
  pop();

  //configurar a descida da nave em y + gravidade
  
  drawSprites();
}


