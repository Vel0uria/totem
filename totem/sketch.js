//aplicar la misma recursividad (fractalozidad) de la columna para desplegar más columnas
//adj. Gram. Dicho especialmente de un proceso: Que se aplica de nuevo al resultado de haberlo aplicado previamente

let rectangles = [];
let rectHeight = 300;
let rectWidth = 100;
let colorR = 0.0;
let colorG = 0.0;
let colorB = 0.0;
let noiseX = 0.0;
let xSpeed = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  y = height;
  x = width / 2;
  x1 = x / 2;
  for (let i = 0; i < 9; i++) {
    y = y + rectHeight;
    rectangles.push(new Rectangles(x, y));
    //   rectangles1.push(new Rectangles(x1, y));
  }
}

function draw() {
  background(0);

  for (let i = 0; i < rectangles.length; i++) {
    rectangles[i].move();
    rectangles[i].changeColor();
    rectangles[i].fractalize(
      rectangles[i].x,
      rectangles[i].y,
      rectWidth,
      rectHeight
    );
  }
  // displayColumns(x, rectWidth);
}

function displayColumns(x, w) {
  n = 0.5;
  for (let i = 0; i < rectangles1.length; i++) {
    rectangles[i].x = x;
    rectWidth = w;
    rectangles[i].move();
    rectangles[i].changeColor();
    rectangles[i].fractalize(x, rectangles[i].y, rectWidth, rectHeight);
  }
  if (w > 100) {
    displayColumns(x + w * n, w * n);
    displayColumns(x - w * n, w * n);
  }
}
