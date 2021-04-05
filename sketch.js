var maxDrop=100;

function preload(){
    
}

function setup(){
     createCanvas(400,1000);
    
     
    
}

function draw(){
    background("black");
    for(var i=0; i<maxDrop; i++){
       Drops.push(new Drops(random(0,400), random(0,400)))
    }
}   

