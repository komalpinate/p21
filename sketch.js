var girlImg, girl;
var zombiesImg, door, ;
var treeImg, tree, treeGroup;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
function preload(){
    girlImg = loadImage("girl.png");
   zombiesImg = loadImage(" zombies.png");
    spookySound = loadSound("spooky.wav");
    treeImg = loadImage("tree.png");

}
function setup() {
    createCanvas(600,600);
    spookySound.loop();
     girl = createSprite(300,300);
     girl.addImage("girl",towerImg);
     girl.velocityY = 1;
     
     treeGroup = new Group();

     invisibleBlockGroup = new Group();
     
    
     girl = createSprite(200,200,50,50);
     girl.scale = 0.3;
     girl.addImage("girl",Img);
     zombies = createSprite(200,200,50,50);
     zombies.scale = 0.3;
     zombies.addImage(" zombies",Img);
   }


function draw() {
    background(255);
 if(zombies.y > 400){
      zombies.y = 300
    if (gameState === "play") {
    
        if(keyDown("left")){
            girl.x = girl.x + 3;
    
          // write a code to move left when left arrow is pressed
        }
        if(keyDown("right")){
      
              girl.x = girl.x - 3;
    
          // write a code to move left when right arrow is pressed
          
        }
        if(keyDown("space")){
      
             girl.velocityY = -10;
    
          // write a code to move up when space arrow is pressed
          
        }
    }
}
}