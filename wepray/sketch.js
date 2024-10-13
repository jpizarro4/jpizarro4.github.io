let mic
function setup() {
  createCanvas(500, 500);
 mic = new p5.AudioIn();
  mic.start();
}

function draw() {
 let = vol =mic.getLevel();
 let h = map(vol,0,1,0,350);
  background(220);
//mano derecha
  fill(255-h,202,h);
  beginShape();
