var garden,rabbit;
var gardenImage,rabbitImage;
var appleImage,apple;
var orangeLeafImage,orangeLeaf;





function preload()
{
    gardenImage = loadImage("garden.png");
    rabbitImage = loadImage("rabbit.png");
    appleImage = loadImage("apple.png");
    orangeLeafImage = loadImage("orangeLeaf.png");

}

function setup()
{
    createCanvas(400,400);
      
    garden = createSprite(200,200);
    garden.addImage(gardenImage);

    rabbit = createSprite(180,340,30,30);
    rabbit.scale = 0.09;
    rabbit.addImage(rabbitImage);
}


function draw() 
{
    background(0);
    
    edges = createEdgeSprites();

    rabbit.collide(edges);
    rabbit.x = World.mouseX;
    var select_sprites = Math.round(random(1,2))

    if (World.frameCount%80==0){
      if (select_sprites==1)
    {
      createApples();
    }
    else if(select_sprites==2)
      {
        createLeaves();
      }


    }
    
    
     
    


    
    drawSprites();
}

function createApples()
{
  
    apple = createSprite(random(30,370),50,10,10);
    apple.addImage(appleImage);
    apple.scale = 0.1;
    apple.velocityY = 5;
    apple.lifetime = 80;
    
}

function createLeaves()
{
    orangeLeaf = createSprite(random(50,330),80,10,10);
    orangeLeaf.addImage(orangeLeafImage);
    orangeLeaf.scale = 0.15;
    orangeLeaf.velocityY = 5;
    orangeLeaf.lifetime = 80;

}