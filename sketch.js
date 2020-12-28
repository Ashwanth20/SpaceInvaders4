//Variable For GameState
var gameState = "story";

//Variable For Background
var background1;
var backgroundImg;

//Variable For Logo
var logo, logoImg;

//Variable For Easy, Medium, Hard & Play Buttons
var button1,button1Img;
var button2, button2Img;
var button3,button3Img; 
var playButton,playButtonImg

//Variable For The Skip Button
var skip, skipImg;

//Variable For The Story
var text1, textImg;
var text2,text2Img;
var text3,text3Img;
var text4,text4Img;
var text5,text5Img;
var text6,text6Img;
var text7,text7Img;
var text8,text8Img;
var text9,text9Img;
var text10, text10Img;

//Variable For Spaceship
var spaceShip,spaceShip2,spaceShip3,spaceShip4;
var spaceShipImg,spaceShip2Img,spaceShip3Img,spaceShip4Img,spaceShip5Img;


//Variable For Enemies
var enemy1;
var enemy1Img;

var bulletGroup;
var enemy1Group;
var spaceShipGroup

var score = 0;
var count = 3;


function preload(){
  
  //Loading The Background Image
  backgroundImg = loadImage("Images/background4.jpg");
  
  //Loading The Text Image For The Story
  textImg = loadImage("Images/text1.png");
  text2Img = loadImage("Images/text2.png");
  text3Img = loadImage("Images/text3.png");
  text4Img = loadImage("Images/text4.png");
  text5Img = loadImage("Images/text5.png");
  text6Img = loadImage("Images/text6.png");
  text7Img = loadImage("Images/text7.png");
  text8Img = loadImage("Images/text8.png");
  text9Img = loadImage("Images/text9.png");
  text10Img = loadImage("Images/text10.png");
  
  //Loading The Logo Image 
  logoImg = loadImage("Images/logo.png");
  
  //Loading The Easy, Medium, Hard Buttons Images
  button1Img = loadImage("Images/button1.png");
  button2Img = loadImage("Images/button2.png");
  button3Img = loadImage("Images/button3.png");

  //Loading The Skip Button Image
  skipImg = loadImage("Images/skip.png");

  //Loading The Play Button Animation
  playButtonImg = loadAnimation("Images/playButton1.png","Images/playButton2.png");

  //Loading The Spaceship Images
  spaceShipImg = loadImage("Images/spaceship1.png");
  spaceShip2Img = loadImage("Images/spaceship2.png");
  spaceShip3Img = loadImage("Images/spaceship3.png");
  spaceShip4Img = loadImage("Images/spaceship4.png");
  spaceShip5Img = loadImage("Images/spaceship5.png");
  
    //Loading The Enemy Image
  enemy1Img = loadImage("Images/enemyShip2.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  enemy1Group = new Group();
  bulletGroup = new Group();
  spaceShipGroup = new Group();

  
  edges = createEdgeSprites();

  //Creating The Background Sprite And The Image
  background1 = createSprite(width/2, height/2, width, height);
  background1.addImage(backgroundImg);
  background1.velocityY = -8;
  background1.scale = 5;

  //Creating The Logo Sprite And Adding The Image
  logo = createSprite(width/2, height/2 - 200, 400, 400);
  logo.addImage(logoImg);
  logo.scale = 2
  logo.visible = false;

  //Creating The Text Sprite From 1 - 9 And Adding The Images
  text1 = createSprite(width/2, height/2, 80, 80);
  text1.addImage(textImg);
  text1.scale = 4;
  text1.visible = false;

  text2 = createSprite(width/2, height/2, 80, 80)
  text2.addImage(text2Img);
  text2.scale = 4
  text2.visible = false;

  text3 = createSprite(width/2, height/2, 80, 80)
  text3.addImage(text3Img);
  text3.scale = 4
  text3.visible = false;

  text4 = createSprite(width/2, height/2, 80, 80)
  text4.addImage(text4Img);
  text4.scale = 4
  text4.visible = false;

  text5 = createSprite(width/2, height/2, 80, 80)
  text5.addImage(text5Img);
  text5.scale = 4
  text5.visible = false;

  text6 = createSprite(width/2, height/2, 80, 80)
  text6.addImage(text6Img);
  text6.scale = 4
  text6.visible = false;

  text7 = createSprite(width/2, height/2, 80, 80)
  text7.addImage(text7Img);
  text7.scale = 4
  text7.visible = false;

  text8 = createSprite(width/2, height/2, 80, 80)
  text8.addImage(text8Img);
  text8.scale = 4
  text8.visible = false;

  text9 = createSprite(width/2, height/2 - 50, 10, 10)
  text9.addImage(text9Img)
  text9.scale = 1.7;
  text9.visible = false;
  
  text10 = createSprite(width/2, height/2 - 50, 80, 80)
  text10.addImage(text10Img);
  text10.scale = 2
  text10.visible = false;
 
  //Creating The Play Button Sprite And Adding The Animation
  playButton = createSprite(width/2, height/2 + 230, 10,10);
  playButton.scale = 0.2;
  playButton.addAnimation("play",playButtonImg);
  playButton.visible = false;

  //Creating The Easy, Medium, Hard Button Sprite And Adding The Images
  button1 = createSprite(width/2 - 110, height/2 + 80, 30, 30)
  button1.addImage(button1Img);
  button1Img.scale = 2
  button1.visible = false

  button2 = createSprite(width/2, height/2 + 20, 30, 30)
  button2.addImage(button2Img);
  button2Img.scale = 2
  button2.visible = false;
    
  button3 = createSprite(width/2 + 110, height/2 + 80, 30, 30)
  button3.addImage(button3Img);
  button3Img.scale = 2
  button3.visible = false;
  
  //Creating The Skip Button Sprite And Adding The Image
  skip = createSprite(width/2 + 550, height/2 + 250, 30, 30)
  skip.addImage(skipImg);

  spaceShip = createSprite(width/2, height/2 + 230, 30, 30);
  spaceShip.addImage(spaceShipImg);
  spaceShip.scale = 0.8;
  spaceShip.setCollider("circle", 0, 0, 60);
  spaceShip.debug = true;
  spaceShipGroup.add(spaceShip);

  spaceShip2 = createSprite(width/2 - 600, height/2 - 270, 30, 30);
  spaceShip2.addImage(spaceShipImg);
  spaceShip2.scale = 0.4;
  spaceShip2.setCollider("circle", 0, 0, 40);
  spaceShip2.debug = false;


}

function draw() {
  //Making The Background To Come Back To Its Original Position

  if(background1.y < 0){
    background1.y = background1.width/2;
  }



  //Making The Text Appear And Disappear In Each FrameCount
  if(gameState === "story"){
    text10.visible = false;
    spaceShip.visible = false;
    spaceShip2.visible = false;
    //enemy1.visible = false;
    
    if(frameCount < 40){
      text1.visible = true;
      text1.lifetime = 100;
    }
    if(frameCount > 165 && frameCount < 260){
      text2.visible = true;
     text2.lifetime = 100;
    }
    if(frameCount > 380 && frameCount < 500){
      text3.visible = true;
      text3.lifetime = 100;
    }
    if(frameCount > 620 && frameCount < 740){
      text4.visible = true;
       text4.lifetime = 100;
    }
    if(frameCount > 860 && frameCount < 980){
      text5.visible = true;
      text5.lifetime = 100;
    }
    if(frameCount > 1100 && frameCount < 1220){
      text6.visible = true;
      text6.lifetime = 100;
    }
    if(frameCount > 1340 && frameCount < 1460){
      text7.visible = true;
      text7.lifetime = 100;
    }
    if(frameCount > 1580 && frameCount < 1700){
      text8.visible = true;
      text8.lifetime = 100;
    }

    
   //Making The Texts To Go To "serve" State When The Story Is Completed
    if(text1.lifetime===0&&text2.lifetime===0&& text3.lifetime===0&&text4.lifetime===0&&text5.lifetime===0&&text6.lifetime===0&&text7.lifetime===0&&text8.lifetime===0){
      gameState="wait";
    }
    
    //Making The "story" State Go To "serve" State, When The Skip Button Is Pressed
    if(mousePressedOver(skip)){
      text1.lifetime  = 0;
      text2.lifetime = 0;
      text3.lifetime = 0;
      text4.lifetime = 0;
      text5.lifetime = 0;
      text6.lifetime = 0;
      text7.lifetime = 0;
      text8.lifetime = 0;
      gameState = "wait";
    }
  }  
   
  //Making The "serve" State
  if(gameState === "serve"){
    skip.visible = false;
    text10.visible = true;
    spaceShip.visible = false;
    spaceShip2.visible = false;
    //enemy1.visible = false;
    button1.visible = true;
    button2.visible = true;
    button3.visible = true;
    logo.visible = true;
    text9.visible = false;
    playButton.visible = false;
    
    //Making The "serve" State Go To "wait" State, When Easy, Medium, Hard Buttons When Is Pressed
  if(mousePressedOver(button1)){
    gameState = "play1";
  }
  if(mousePressedOver(button2)){
    gameState = "play2";
  }
  if(mousePressedOver(button3)){
    gameState = "play3";
  }
  }

  //Making The "wait" State
  if(gameState === "wait"){
    button1.visible = false;
    button2.visible = false;
    button3.visible = false;
    text9.visible = true;
    text10.visible = false;
    playButton.visible = true;
    //enemy1.visible = false;
    logo.visible = true;
    skip.visible = false;
    logo.visible = false;
    spaceShip.visible = false;
    spaceShip2.visible = false;
    
   // Making The "serve" State Go To "play" State, When The Play Button Is Pressed
    if(mousePressedOver(playButton)){
     gameState = "serve";
    }
  }

  //Making The "play" State
  if(gameState === "play1"){
    text9.visible = false;
    text10.visible = false;
    button1.visible = false;
    button2.visible = false;
    button3.visible = false;
    logo.visible = false;
    playButton.visible = false;
    //background.velocityY = 0
    spaceShip.visible = true;
    spaceShip2.visible = true;
    //enemy1.visible = true;
    spaceShip.velocityX = 0;
    spaceShip.velocityY = 0;
    background(backgroundImg);
    //enemy1.velocityX = 0;


    if(keyDown("LEFT_ARROW")){
      spaceShip.addImage(spaceShipImg);
      spaceShip.velocityX = -3;
    }
    if(keyDown("RIGHT_ARROW")){
      spaceShip.addImage(spaceShipImg);
      spaceShip.velocityX = 3;
    }
    if(keyDown("UP_ARROW")){
      spaceShip.addImage(spaceShipImg);
      spaceShip.velocityY = -3;
    }
    if(keyDown("DOWN_ARROW")){
      spaceShip.addImage(spaceShipImg);
      spaceShip.velocityY = 3;
    }
    if(keyDown("LEFT_ARROW") && keyDown("UP_ARROW")){
      spaceShip.addImage(spaceShip2Img)
      spaceShip.velocityX = -2;
      spaceShip.velocityY = -3;

    }
    if(keyDown("LEFT_ARROW") && keyDown("DOWN_ARROW")){
      spaceShip.addImage(spaceShip5Img)
      spaceShip.velocityX = -2;
      spaceShip.velocityY = 3;
    }
    if(keyDown("RIGHT_ARROW") && keyDown("UP_ARROW")){
      spaceShip.addImage(spaceShip3Img)
      spaceShip.velocityX = 2;
      spaceShip.velocityY = -3
    }
    if(keyDown("RIGHT_ARROW") && keyDown("DOWN_ARROW")){
      spaceShip.addImage(spaceShip4Img)
      spaceShip.velocityX = 2;
      spaceShip.velocityY = 3;
    }
    spaceShip.collide(edges[1]);
    spaceShip.collide(edges[0]);


      if(frameCount % 100 === 0){
      enemy1 = createSprite(width/2 - 600, height/2 - 600, 30, 30);
      enemy1.addImage(enemy1Img);
      enemy1.scale = 0.6;
      enemy1.setCollider("circle", 0, 0, 75);
      enemy1.debug = true;
      enemy1.velocityX = 5;
      enemy1.lifetime = 250;
      enemy1.y = Math.round(random(100,400));
      enemy1Group.add(enemy1);
    }
    if(keyWentDown("SPACE")){
      bullet = createSprite(spaceShip.position.x, spaceShip.position.y, 10, 10);
      bulletGroup.add(bullet);
      bullet.velocityY = -3;
      bullet.depth = spaceShip.depth
      spaceShip.depth = spaceShip.depth + 1
    }
    //if(keyDown("UP_ARROW")){
      //bullet.setVelocityY();
      //bullet.setVelocity(-1,-3)
      //spaceShip.velocityX = 0;
      //spaceShip.velocityY = 0;
     //}
    if(bulletGroup.isTouching(enemy1Group)){
      enemy1.destroy();
      bullet.destroy();
      score = score + 15;
    }
    if(enemy1Group.isTouching(spaceShipGroup)){
      enemy1.destroy();
      count = count - 1
    }
    if(score > 2500 || count === 0){
      gameState = "End";
    }
    if(gameState === "End"){
      //spaceShip.velocityX = 0;
      //spaceShip.velocityY = 0;
      enemy1Group.destroyEach();
      spaceShipGroup.destroyEach();
      background1.velocityY = 0;
      bulletGroup.destroyEach();
    }
  }
  if(gameState === "play2"){
  }
  drawSprites();
  textSize(20);
  fill("red");
  text("X", width/2 - 560, height/2 - 260);
  text(count, width/2 - 540, height/2 - 260);
  text("Score: " + score, width/2 + 510, height/2 - 270);
}