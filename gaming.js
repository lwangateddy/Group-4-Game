//var sprite;
//var sprite1;
var ellipseXpos=400;
var ellipseYpos=500;
//var sprite1Xpos=400;
//var sprite1Ypos=200;
var yPos = 0;
var xpos=0;
var y=100;
var score = 0;

function setup() {
  createCanvas(800,1000);
  stroke(255,0,0);
   frameRate(5);

  bg=loadImage("background.png");
  sprite=loadImage("mazeroll1.png");
  //sprite1=loadImage("bar.png");
}

function draw (){
  background(bg);
  image(sprite,ellipseXpos,ellipseYpos,30,30);
  //image(sprite1,sprite1Xpos,sprite1Ypos,100,100);
// ellipse(ellipseXpos,ellipseYpos,40,40);
// fill(2

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
  // strokeW

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
  // line(height(10);

  y=y-1;
  if(y<0){
    y=height;
  }
  line(50,0,0);
//strokeWeight(0);

var colorDetect = get(ellipseXpos+20, ellipseYpos+30);
// ellipse(ellipseXpos+20,ellipseYpos+30,5,5);
if(colorDetect[0] == [255] && colorDetect[1] == [0] && colorDetect[2] == [0]){
    background(255,0,0);
    textSize(60);
    text("Try Again", width/2,height/2);
  }




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
//
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
  ellipseYpos-=20;
}
  if (keyIsDown(DOWN_ARROW)){
    ellipseYpos
    +=20;
  }

    if (keyIsDown(LEFT_ARROW)){
      ellipseXpos-=20;
    }
    if (keyIsDown(RIGHT_ARROW)){
      ellipseXpos+=20;
}


// for(var i=10; i < 20; i+=10){
//   var lineYpos = random(40);
//   line(i,lineYpos, 50,50);
// }
y=y-1;
if(y<0){
  y=height;
}
line(150,y,250,y);
strokeWeight(10);
console.log("line");

y=y-1;

if(y<0){
  y=height;
}
line(0,y,100,y);
strokeWeight(10);


}
