var seaBackground;
var diver;
var platformGroup, obstacleGroup;
var marioAnimation, obstacleAnimation, wallAnimation, groundAnimation,o2Animation;
var o3Animation,o3Animation,o4Animation,o5Animation,o6Animation;
var flag;
var LOSE=0;
var eel, lionfish,clownfish;
var PLAY=1;
var WIN=2;
var PAUSE1=3,PAUSE2=4,PAUSE3=5,PAUSE4=6,PAUSE5=7,PAUSE6=8;
var gameState=PLAY;
var eelGroup,crabGroup,lionfishGroup,blowfishGroup,conchGroup,clownfishGroup, piranhaGroup;



function preload()
{
  marioAnimation=loadAnimation("diver.png");
  obstacleAnimation=loadAnimation("crab2.png");
  o2Animation=loadAnimation("eel.png");
  o3Animation=loadAnimation("lionfish.png");
  o4Animation=loadAnimation("clownfish.png");
  o5Animation=loadAnimation("piranha.png")
  o6Animation=loadAnimation("conch.png")
seaBackground=loadImage("bgimage.png")
}

function setup() {
  //Creating canvas equal to width and height of display
  createCanvas(displayWidth,668);
  var countDistanceX = 0;
  var platform;
  var gap;
  
  //creating a player mario
  mario = new Player();
  
  //creating a group
  platformGroup= createGroup();
  obstacleGroup=createGroup();
  eelGroup=createGroup();
  crabGroup=createGroup();
  conchGroup=createGroup();
  lionfishGroup=createGroup();
  clownfishGroup=createGroup();
  blowfish=createGroup();
  piranhaGroup=createGroup();

  //adding platforms to stand for mario
  for (var i=0;i<26;i++)
	 {
     frameRate(30);
      platform = new Platform(countDistanceX);
      platformGroup.add(platform.spt);//Adding each new platform to platformGroup
      
      countDistanceX = countDistanceX + platform.spt.width ; //counting x location of next platform to be build
      //adding wall to the game
      
      //adding obstacles to the game
      if(i%6==0)
      {
      crab=new Obstacle(countDistanceX);
      crabGroup.add(crab.spt);
      }
      if(i%10==0)
      {
      eel=new o2(countDistanceX);
      eelGroup.add(eel.spt);
      }
      if(i%14==0)
      {
      lionfish=new o3(countDistanceX);
      lionfishGroup.add(lionfish.spt);
      }
      if(i%16==0)
      {
      clownfish=new o4(countDistanceX);
      clownfishGroup.add(clownfish.spt);
      }
      if(i%20==0)
      {
      piranha=new o5(countDistanceX);
      piranhaGroup.add(piranha.spt);
      }
      if(i%24==0)
      {
      conch=new o6(countDistanceX);
      conchGroup.add(conch.spt);
      }
      
  }
  
}

function draw() {
  background(seaBackground);
  //code to move the camera
  translate(  -mario.spt.x + width/2 , 0);
  if(gameState==PLAY)//Play state
  {  
       //changing the game states
       if(eelGroup.isTouching(mario.spt))
       {  
        gameState=PAUSE1;
        
       } 
    
       if(clownfishGroup.isTouching(mario.spt))
       {  
        gameState=PAUSE6;
        
       } 
       if(crabGroup.isTouching(mario.spt))
       {  
        gameState=PAUSE3;
        
       } 
       if(lionfishGroup.isTouching(mario.spt))
       {  
        gameState=PAUSE2;
        
       } 
       if(conchGroup.isTouching(mario.spt))
       {  
        gameState=PAUSE5;
        
       } 
       if(piranhaGroup.isTouching(mario.spt))
       {  
        gameState=PAUSE4;
        
       } 
       
       //apply gravity to mario and set colliding with platforms
        mario.applyGravity();
        mario.spt.collide(platformGroup);
     

        //Calling various function to controll mario
        if (keyDown("left"))  
        { 
          mario.moveLeft();
        }
        if (keyDown("right")) 
        { 
          mario.moveRight();
        }
        if (keyDown("up") && mario.spt.velocityY===0) 
        {
          mario.jump();
        }


   }

  if(gameState==LOSE)//END State
  {  
    stroke("white");
    fill("white");
    textSize(40);
    text("GAME OVER",mario.spt.x,300);
    obstacleGroup.destroyEach();
    mario.spt.setVelocity(0,0);
    mario.spt.pause();
    
  }

  if(gameState==WIN)//WIN state
  {  
    stroke("green");
    fill("green");
    textSize(40);
    text("Winner",mario.spt.x,300);
    obstacleGroup.destroyEach();
    mario.spt.setVelocity(0,0);
    mario.spt.pause();
  }
  
  if(gameState==PAUSE1){
  
    stroke("white");
    fill("white");
    textSize(20); 
    text("Name:eel",200,200);
    text("Kingdom:Animalia",230,23);
    text("Phylum:Chordata",260,260);
    text("Class:Actinopterygii",290,290);
   text("Superorder:Elopomorpha",320,320);
   text("Order:Anguilliformes",350,350);
   Pause();
  }

  if(gameState==PAUSE2){
  
    stroke("white");
    fill("white");
    textSize(20); 
    text("Name: lionfish",200,200);
   text("Kingdom: Animalia",230,230);
text("Phylum: Chordata",260,260);
text("Class: Actinopterygii",290,290);
text("Order: Scorpaeniformes",320,320);
text("Family: Scorpaenidae",350,350);
text("Genus: Pterois",380,380);
text("Species: P. volitans",410,410);

    Pause();
  }

  if(gameState==PAUSE3){
  
    stroke("white");
    fill("white");
    textSize(20); 
    text("Name:crab",200,200);
   text(" Kingdom: Animalia",230,230);
text ("Phylum: Arthropoda",260,260);
text("Subphylum: Crustacea",290,290);
text("Class: Malacostraca",320,320);
text("Order:	Decapoda",350,350);
text("Suborder:	Pleocyemata",380,380);
text("Infraorder:	Brachyura",410,410);
    Pause();
  }

  if(gameState==PAUSE4){
  
    stroke("white");
    fill("white");
    textSize(20); 
    text("Name:piranha",200,200);
   text(" Kingdom:	Animalia",230,230);
text("Phylum:	Chordata",260,260);
text("Class:	Actinopterygii",290.290);
text("Order:	Characiformes",320,320);
text("Superfamily:	Erythrinoidea",350,350);
tex("Family:	Serrasalmidae",380,380);
    Pause();
  }

  if(gameState==PAUSE5){
  
    stroke("white");
    fill("white");
    textSize(40); 
    text("Name:conch",200,200);
    Pause();
  }

  if(gameState==PAUSE6){
  
    stroke("white");
    fill("white");
    textSize(20); 
    text("Name:clownfish",200,200);
    text("Kingdom:	Animalia",230,230);
text("Phylum:	Chordata",260,260);
text("Class:	Actinopterygii",290,290);
text("Clade:	Percomorpha",310,310);
text("(unranked):	Ovalentaria",340,340);
text("Family:	Pomacentridae",370,370);
text("Subfamily:	Amphiprioninae",400,400);
    Pause();
  }

   drawSprites();
}
function Pause(){

  if(gameState==PAUSE1||PAUSE2||PAUSE3||PAUSE4||PAUSE5||PAUSE6){
    mario.spt.velocityX=0;
    mario.spt.velocityY=0;

    crab.velocityX=0;
    crab.velocityY=0;

lionfish.velocityX=0;
lionfish.velocityY=0;

conch.velocityX=0;
conch.velocityY=0;

eelGroup.velocityX=0;
eelGroup.velocityY=0;

clownfish.velocityX=0;
clownfish.velocityY=0;

piranha.velocityX=0;
piranha.velocityY=0;

}
}

