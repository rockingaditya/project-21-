var  wall, thickness;
var bullet , speed , weight;
function setup() {
  createCanvas(1600,400);
 bullet = createSprite(50, 200, 50, 50);
 wall = createSprite(1200,200,thickness,height/2);
  speed = random(223,321);
  weight = random(30,52);
  bullet.velocityX = speed;
  thickness=random(23,83);
}

function draw() {
  background(255,255,255);  
  function hascollided(Lbullet,Lwall) {
    bulletRightEdge = Lbullet.x+Lbullet.width;
    wallLeftEdge = Lwall.x;
    if(bulletRightEdge=wallLeftEdge)
    {
      return true
    }
    return false
    }
  if(hascollided(bullet,wall))
{
bullet.velocityX=5;

var damage=0.5 * weight*speed*speed/(thickness * thickness * thickness);
if(damage>10)
{
  wall.shapeColor=color(255,0,0);
}

if(damage<10)
{
  wall.shapeColor=color(0,255,0);
}
}

  drawSprites();
}
