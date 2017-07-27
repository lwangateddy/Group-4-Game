var sprite;
//var sprite1;
var spriteXpos=400;
var spriteYpos=200;
//var sprite1Xpos=400;
//var sprite1Ypos=200;
var yPos = 0;
var xpos=0;
var y=100;

function setup() {
  createCanvas(800,1000);
  stroke(255);
   frameRate(20);


  bg=loadImage("background.png");
  sprite=loadImage("mazeroll1.png");
  //sprite1=loadImage("bar.png");
}

function draw (){
  background(bg);
  image(sprite,spriteXpos,spriteYpos,60,60);
  //image(sprite1,sprite1Xpos,sprite1Ypos,100,100);

  y=y-1;

  if(y<0){
    y=height;
  }
  line(0,y,100,y);
  strokeWeight(10);

  y=y-1;
  if(y<0){
    y=height;
  }
  line(150,y,250,y);
  strokeWeight(10);



  y=y-1;
  if(y<0){
    y=height;
  }
  line(350,y,750,y);
  strokeWeight(10);

  y=y-1;
  if(y<0){
    y=height;
  }
  line(300,y-100,400,y-100);
  strokeWeight(10);

  y=y-1;
  if(y<0){
    y=height;
  }
  line(0,y-100,250,y-100);
  strokeWeight(10);

  y=y-1;
  if(y<0){
    y=height;
  }
  line(500,y-100,950,y-100);
  strokeWeight(10);

  y=y-1;
  if(y<0){
    y=height;
  }
  line(400,y-150,750,y-150);
  strokeWeight(10);

  y=y-1;
  if(y<0){
    y=height;
  }
  line(500,y-50,600,y-50);
  strokeWeight(10);

  y=y-1;
  if(y<0){
    y=height;
  }
  line(0,y-50,100,y-50);
  strokeWeight(10);

if (line <= 0){
  line= 500;
}

//rect(0, yPos, 60, yPos);
//strokeWeight(20);
//fill(255,0,100);


//
//
// spriteYpos -=1;
// if(spriteYpos<0){
//   spriteYpos=height;
// }
// image(sprite,spriteYpos-50,100);
// strokeWeight(10);



if (keyIsDown(UP_ARROW)){
  spriteYpos-=10;
}
  if (keyIsDown(DOWN_ARROW)){
    spriteYpos+=10;
  }

    if (keyIsDown(LEFT_ARROW)){
      spriteXpos-=10;
    }
    if (keyIsDown(RIGHT_ARROW)){
      spriteXpos+=10;
}

if (sprite){

}

for(var i=10; i < 20; i+=10){
  // var lineYpos = random(40);
  // line(i,lineYpos, 50,50);
}
y=y-1;
if(y<0){
  y=height;
}
line(150,y,250,y);
strokeWeight(10);


y=y-1;

if(y<0){
  y=height;
}
line(0,y,100,y);
strokeWeight(10);


}
