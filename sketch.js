var dog,happyDog,database,foods,foodstock;
var dogs;
var write;
var ref;
var read;
var food;
var x=20;

function preload()
{
dog=loadImage("images/Dog.png");
happyDog=loadImage("images/happydog.png");
}

function setup() {
  createCanvas(500, 500);
    database=firebase.database();
  dogs=createSprite(250,250,30,30);
  dogs.addImage("we",dog);
  dogs.scale=0.2;
  ref=database.ref("virtual pet pro34/food").on("value",readstock);

  
}


function draw() {  
background(46,139,87);
if(keyDown(UP_ARROW)){
  writeStock(20);
 // dog.addImage(happyDog);
x1();
}
textSize(10);
fill ("white");
stroke ("green");
text ("press up arrow to feed the dog",150,150);
text ("foodstock :"+x,150,170);


  drawSprites();


}

function readstock(data){
foods=data.val();

}
function writeStock(x){
 
  if(x=0){
x=0;
  }
  else{
    x=x-1;
  }
  database.ref("virtual pet pro34/food").update({
    food:x
   })
}

function x1(){
    x=x

    if(x<=0){
      x=0;
        }
        else{
          x=x-1;
        }
}