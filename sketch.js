//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogImg, dogImg1;


function preload()
{
  //load images here
  function preload(){
    dogImg= loadImage("images/Dog.png");
    happyDog = loadImage("images/dogImg1.png");
 
}
}

function setup() {

  database=firebase.database();

  createCanvas(500, 500);
  
   dog =createSprite(250,300,150,150);
   dog.addImage(dogImg);
   dog.scale= 0.15;


   foodStock= database.ref("Food");
   foodStock.on("value",readStock);
   textSize(20);




}


function draw() {  

 

  drawSprites();
  //add styles here

}



