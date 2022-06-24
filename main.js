function preload(){

}

function setup(){
    canvas = createCanvas(620,450);
   canvas.position(370,250);
   video = createCapture(VIDEO);
   video.hide();
}

function draw(){
    rect(10, 20, 55, 400);
    rect(555, 20, 55, 400);
    rect(30, 10, 550, 50);
    rect(30, 390, 550, 50);
    circle(30, 30, 100);
    circle(590, 420, 100);
    circle(590, 30, 100);
    circle(30, 420, 100);
    image(video,70,60,470,320);
}

function take_snapshot(){
    save('sneha.png');
}