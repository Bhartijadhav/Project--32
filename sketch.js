const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }
    Engine.update(engine);

    fill(255);
    stroke("white");
    textSize(30);
    
    if(hour>=12){
        text("Time : 5PM "+ hour%12 + "30", 50,100);
    }else if(hour==0){
        text("Time : 12 AM",100,100);
    }
}

async function getBackgroundImg(){

    // write code to fetch time from API
   var response = await fetch ("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
   console.log("Time",response)
    //change the data in JSON format and store it in variable responseJSON
    var responseJSON = await response.json();
    console.log("Time",responseJSON)

    
    //fetch datetime from responseJSON
    var datetime = responseJSON.datetime;
    console.log("Time",datetime)
    
     // slice the datetime to extract hour
    var hour = datetime.slice(11,13);
    console.log("Time",hour);
    
    if(hour>=0 && hour<17){
        bg = "sunrise.png";
    }
    else{
        bg="sunset.png"
    }
    
    backgroundImg = loadImage(bg);
    
}
