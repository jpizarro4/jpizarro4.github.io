let mic; 
let bgColor; 




function setup() {
  mic = new p5.AudioIn();
  mic.start();
  createCanvas(600, 400);
  bgColor = color(200, 220, 255);
  faceX = 300;
  faceY = 200;

  

}

function draw() {
  let vol = mic.getLevel();
  let h = map(vol, 0, 1, 5, 80); 
  let leftEyeSize = 25 + 8 * cos(frameCount * 0.1);
  let rightEyeSize = 25 + 8 * sin(frameCount * 0.1);
  
  background(bgColor);
  cara();
  ulls(leftEyeSize, rightEyeSize);
  pupiles(leftEyeSize, rightEyeSize);
  celles(h);
  nas();
  boca(h);
  mosca();
  sombrero(faceX, faceY);
}

function cara(){
  let x = 200 * noise(0.1 * frameCount);
  let y = 200 * noise(0.1 * frameCount + 100);
  fill(240, 200-y, 180+x);
  ellipse(faceX, faceY, 240, 280);

}

function ulls(){
   let leftEyeSize = 30 + 10 * cos(frameCount * 0.1);
  let rightEyeSize = 30 + 10 * sin(frameCount * 0.1);
 fill(255, 255, 255);
  ellipse(faceX - 55, faceY - 50, 45, leftEyeSize + 5);
  ellipse(faceX + 55, faceY - 50, 45, rightEyeSize + 5);
}

function pupiles(leftEyeSize, rightEyeSize){
  let x = 200 * noise(0.1 * frameCount);
  let y = 200 * noise(0.1 * frameCount + 100);
  let xeye = map(mouseX, 0, 600, -8, 8);
  let yeye = map(mouseY, 0, 400, -5, 5);
  fill(102-y, 41+x, 16-x);
  ellipse(faceX - 55 + xeye, faceY - 50 + yeye, 22, leftEyeSize / 2);
  ellipse(faceX + 55 + xeye, faceY - 50 + yeye, 22, rightEyeSize / 2);
}

function celles(h){
  noFill();
  stroke(0);
  strokeWeight(5);
  arc(faceX -60, faceY -80, 50, 20 + h, PI, 0);
  line(330 , faceY -80 + h/6, 380, faceY -75);
}

function nas(){
  fill(220, 180, 160);
  triangle(faceX - 10, faceY, faceX + 10, faceY, faceX, faceY + 30);
}

function boca(h){
  fill(0, 0, 0);
  arc(faceX, faceY + 60, 140, 40 + h, 0, PI);
}


function mosca(){
  let ales = 10*random(1);
  let x = 200 * noise(0.1 * frameCount);
  let y = 200 * noise(0.1 * frameCount + 100);
  
  fill(255);
  noStroke();
  ellipse(x - 10, y, 15 + ales, 25);
  ellipse(x + 10, y, 15 + ales, 25);
  fill(0);
  ellipse(x, y, 10, 20);
}


  function sombrero(faceX, faceY) {
 
  fill( 0, 0, 0)
  stroke(0); 
  line(faceX -100, faceY -120, faceX +100, faceY -120);
  rect( 240, 40, 115, +40)
  strokeWeight(1);
}

function changeBackground() {
  bgColor = color(random(100, 255), random(100, 255), random(100, 255));
}
