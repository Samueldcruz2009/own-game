
var background,bg;
var frog,f;
var fly,fl,fl2,fl3,fl4;
var score=0;
var stick,s,s2,s3,s4;
var gameover,go;

var END =0;
var PLAY =1;
var gameState = PLAY;
var restart;

var win,uwin;

function preload(){
background = loadImage("background.png");
frog = loadImage("frog.png");
fly = loadImage("fly.png");
stick = loadImage("stick.png");
gameover = loadImage("gameOver.png");
win = loadImage("uwin.png");
}

function setup() {
  createCanvas(1000,300);
 //backgroung
 bg  = createSprite(500,150,100,200);
 bg.addImage(background);
 bg.scale=1;


 f  = createSprite(50,60);
 f.addImage(frog);
 f.scale=0.02;

// game parts

go = createSprite(500,150,100,200);
go.addImage(gameover);
go.scale = 0.8;
go.visible = false;  

uwin = createSprite(500,150,100,200);
uwin.addImage(win);
uwin.scale = 0.8;
uwin.visible = false;

// cariting obsitacal

s = createSprite(700,100);
s.addImage(stick);
s.scale=0.08;
s.velocityX = -5;
s.visible = true;  


//
s2 = createSprite(400,40);
s2.addImage(stick);
s2.scale=0.08;
s2.velocityX = -5;
s2.visible = true;  


//
s3 = createSprite(1000,600);
s3.addImage(stick);
s3.scale=0.08;
s3.velocityX = -5;
s3.visible = true;  

//
s4 = createSprite(3500,100);
s4.addImage(stick)
s4.scale=0.08;
s4.velocityX = -5;
s2.visible = true;  

//


// creating fly
 
 
 fl = createSprite(2000,40);
 fl.addImage(fly);
 fl.scale=0.08;
 fl.velocityX = -5;
 fl.visible = true;
 
 
 fl2 = createSprite(1500,100);
 fl2.addImage(fly);
 fl2.scale=0.08;
 fl2.velocityX = -5;
 fl2.visible = true;

  
 fl3 = createSprite(800,80);
 fl3.addImage(fly);
 fl3.scale=0.08;
 fl3.velocityX = -5;
 fl3.visible = true;


 fl4 = createSprite(100,200);
 fl4.addImage(fly);
 fl4.scale=0.08;
 fl4.velocityX = -5;
 fl4.visible = true;

 score = 0    
}

function draw() {
    
  //moving bow


  

  f.y = World.mouseY

  


  if (f.isTouching(fl)){

  //fl.bounceoff();
       score=score + 1;
      fl.x=fl.x-150;
       
  }

///////////////////////////////////
  if (f.isTouching(fl2)){

 //  fl2.destroyEach();
       score=score + 1;
       fl2.x=fl2.x-150;
  }
  

  if (f.isTouching(fl3)){
    fl3.x=fl3.x-150;
   // fl3.destroyEach();
   score=score + 1;
  }
  
  if (f.isTouching(fl4)){
    fl4.x=fl4.x-150;
    // fl4.destroyEach();
       score=score + 1;
  }

//                                                     //                                                               //
 if (f.isTouching(s)){
  f.velocityX = -5;
f.visible = false;
  fl.addImage(fly);
  fl2.addImage(fly);
  fl3.addImage(fly);
  fl4.addImage(fly);
 ////////////
  fl.visible = false;
  fl2.visible = false;
  fl3.visible = false;
  fl4.visible = false;
 /////////
  s.addImage(stick);
  s2.addImage(stick);
  s3.addImage(stick);
  s4.addImage(stick)
 ////////////
 s.visible = false;  
 s2.visible = false; 
 s3.visible =false; 
 s4.visible = false; 

  go.addImage(gameover);
 
go.visible = true;
 }

///////////////////////////////////////
if (f.isTouching(s2)){
  f.velocityX = -5;
  
  fl.addImage(fly);
  fl2.addImage(fly);
  fl3.addImage(fly);
  fl4.addImage(fly);
 ////////////
  fl.visible = false;
  fl2.visible = false;
  fl3.visible = false;
  fl4.visible = false;
 /////////
  s.addImage(stick);
  s2.addImage(stick);
  s3.addImage(stick);
  s4.addImage(stick)
 ////////////
 s.visible = false;  
 s2.visible = false; 
 s3.visible =false; 
 s4.visible = false; 
 score.visible = false;

  go.addImage(gameover);
go.visible = true;  
 }
/////////////////////////////////
if (f.isTouching(s3)){
  
  f.velocityX = -5;
  fl.addImage(fly);
  fl2.addImage(fly);
  fl3.addImage(fly);
  fl4.addImage(fly);
 ////////////
  fl.visible = false;
  fl2.visible = false;
  fl3.visible = false;
  fl4.visible = false;
 /////////
  s.addImage(stick);
  s2.addImage(stick);
  s3.addImage(stick);
  s4.addImage(stick)
 ////////////
 s.visible = false;  
 s2.visible = false; 
 s3.visible =false; 
 s2.visible = false; 

 score.visible = false;

 go.addImage(gameover);
go.visible = true;  
  }
//////////////////////////////////
if (f.isTouching(s4)){
  f.velocityX = -5;
  fl.addImage(fly);
  fl2.addImage(fly);
  fl3.addImage(fly);
  fl4.addImage(fly);
 ////////////
  fl.visible = false;
  fl2.visible = false;
  fl3.visible = false;
  fl4.visible = false;
 /////////
  s.addImage(stick);
  s2.addImage(stick);
  s3.addImage(stick);
  s4.addImage(stick)
 ////////////
 s.visible = false;  
 s2.visible = false; 
 s3.visible =false; 
 s2.visible = false; 

  go.addImage(gameover);
  
 score.visible = false;

 go.visible = true;  
  }

   //                                                //                                                                 //


   if(score>= 30){
    uwin.addImage(win);
    uwin.visible = true;
    score = 30;
    f.velocityX = -5;

    fl.addImage(fly);
    fl2.addImage(fly);
    fl3.addImage(fly);
    fl4.addImage(fly);
   ////////////
    fl.visible = false;
    fl2.visible = false;
    fl3.visible = false;
    fl4.visible = false;
   /////////
    s.addImage(stick);
    s2.addImage(stick);
    s3.addImage(stick);
    s4.addImage(stick)
   ////////////
   s.visible = false;  
   s2.visible = false; 
   s3.visible =false; 
   s2.visible = false; 
  
    go.addImage(gameover);
    
   score.visible = false;
go.visible = false;  

    }
  

 drawSprites();
  

 if(fl.x < 0 ){
  fl.x = width/1;
}

if(fl2.x < 0 ){
  fl2.x = width/1;
}


if(fl3.x < 0 ){
  fl3.x = width/1;
}


if(fl4.x < 0 ){
  fl4.x = width/1;
}



if(s.x < 0 ){
  s.x = width/1;
}



if(s2.x < 0 ){
  s2.x = width/1;
}


if(s3.x < 0 ){
  s3.x = width/1;
}


if(s4.x < 0 ){
  s4.x = width/1;
}



textSize(20);
fill(255);
text("PRESS ctrl+R to restart",300,280)
text("u win when score=30  (GOOD LUCK) ",550,280)


text("Score: "+ score, 300,50);
  
}
