let mic; 
let bgColor; 

function setup() {
  createCanvas(600, 400);
  bgColor = color(200, 220, 255); // Color de fondo inicial

  mic = new p5.AudioIn();
  mic.start(); // Se solicita permiso para el micrófono
}

function draw() {
  background(bgColor);

  let faceX = 300;
  let faceY = 200;
  let leftEyeSize = 30 + 10 * cos(frameCount * 0.1);
  let rightEyeSize = 30 + 10 * sin(frameCount * 0.1);
  let vol = mic.getLevel(); // Obtener volumen del micrófono
  let h = map(vol, 0, 1, 0, 100);

  let x = 200 * noise(0.1 * frameCount);
  let y = 200 * noise(0.1 * frameCount + 100);
  let ales = 10 * random(1);
  let xeye = map(mouseX, 0, 600, -10, +10);
  let yeye = map(mouseY, 0, 400, -10, +10);

  // Cara
  fill(240, 200-y, 180+x);
  ellipse(faceX, faceY, 240, 280);

  // Ojos
  fill(255, 255, 255);
  ellipse(faceX - 55, faceY - 50, 45, leftEyeSize + 5);
  ellipse(faceX + 55, faceY - 50, 45, rightEyeSize + 5);

  // Pupilas
  fill(102-y, 41+x, 16-x);
  ellipse(faceX - 55 + xeye, faceY - 50 + yeye, 22, leftEyeSize / 2);
  ellipse(faceX + 55 + xeye, faceY - 50 + yeye, 22, rightEyeSize / 2);

  // Nariz
  fill(220, 180, 160);
  triangle(faceX - 10, faceY, faceX + 10, faceY, faceX, faceY + 30);

  // Boca
  fill(0, 0, 0);
  arc(faceX, faceY + 60, 140, 40 + h, 0, PI);
  
  //Ceja
  noFill();
  stroke(0);
  strokeWeight(5);
  arc(faceX -60, faceY -80, 50, 20 + h, PI, 0);
  line(330 , faceY -80 + h/6, 380, faceY -75);
  
  //Sombrero
  fill( 0, 0, 0)
  line(faceX -100, faceY -120, faceX +100, faceY -120);
  rect( 240, 40, 115, +40)
  




  // Mosca
  fill(255);
  noStroke();
  ellipse(x - 10, y, 15 + ales, 25);
  ellipse(x + 10, y, 15 + ales, 25);
  fill(0);
  ellipse(x, y, 10, 20);
}
