let rectangles = [];
let spine;
let rectHeight = 300;
let rectWidth = 100;
let colorR = 0.0;
let colorG = 0.0;
let colorB = 0.0;
let noiseX = 0.0;
function setup() {
  createCanvas(windowWidth, windowHeight);

  rectMode(CENTER);
  imageMode(CENTER);
  y = height;
  x = width;
  for (let i = 0; i < 9; i++) {
    y = y + rectHeight;
    rectangles.push(new Rectangles(x, y, rectWidth));
  }
  spine = loadImage("./assets/columna.jpeg");
}

function draw() {
  background(0);
  //tint(255, 100);
  image(spine, width / 2, height / 2, width + 600, height);
  for (i = 0; i < rectangles.length; i++) {
    rectangles[i].move();
    rectangles[i].changeColor();
    rectangles[i].fractalize(
      x / 2,
      rectangles[i].y + 75,
      rectWidth,
      rectHeight
    );
  }
}
