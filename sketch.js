var PLAY=1;
var END=0;
var gameState=1;

var player,playerImg
var planet1Img,planet2Img,planet3Img
var planet1,planet2,planet3
var universe , universeImg
var planet1G,planet2G,planet3G
var touches, collide


function preload(){
    universeImg=loadImage("universe.jpg")
    playerImg=loadImage("spacesuttle.png")
    planet1Img=loadImage("planet1.png")
    planet2Img=loadImage("planet2.png")
    planet3Img=loadImage("planet3.png")

}



function setup() {
    createCanvas(600,400);
    
    universe=createSprite(200,200);
universe.addImage(universeImg);


    player = createSprite(180,340,30,30);
player.scale =0.25;
player.addImage(playerImg)




  }
  
  function draw() {

   if(gameState===PLAY){
  background(0);
  player.x = World.mouseX;
 
  edges= createEdgeSprites();
  player.collide(edges);
    

  if(universe.y > 400 ){
    universe.y = height/2;
  }

  createPlanet1();
    createPlanet2();
    createPlanet3();


    
    drawSprites();
      
  }
}

    
      
      
      
    
      
  function createPlanet1(index){
    if(frameCount%80===0){
        var planet1=createSprite(200,200,10,10) 
        planet1.velocityY=3
        planet1.y = Math.round(random(1,380))
        planet1.x = Math.round(random(20,380))  
          
         planet1.addImage(planet1Img);
          planet1.scale=0.1
          
           planet1.lifetime = 200;
        }

    
        }
        function createPlanet2(index){
          if(frameCount%80===0){
              var planet2=createSprite(200,200,10,10) 
              planet2.velocityY=3
              planet2.y = Math.round(random(1,380))
              planet2.x = Math.round(random(20,380))  
                
               planet2.addImage(planet2Img);
                planet2.scale=0.1
                
                 planet2.lifetime = 200;
              }
      
          
              }
              function createPlanet3(index){
                if(frameCount%80===0){
                    var planet3=createSprite(200,200,10,10) 
                    planet3.velocityY=3
                    planet3.y = Math.round(random(1,380))
                    planet3.x = Math.round(random(20,380))  
                      
                     planet3.addImage(planet3Img);
                      planet3.scale=0.2
                      
                       planet3.lifetime = 200;
                    }
            
                
                    }
                  
                
                
            
          
          
      
    
    