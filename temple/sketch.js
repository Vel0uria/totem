//aplicar la misma recursividad (fractalozidad) de la columna para desplegar más columnas
//adj. Gram. Dicho especialmente de un proceso: Que se aplica de nuevo al resultado de haberlo aplicado previamente.

let rectangles1 = [];
let rectangles = [];
let rectHeight = 300;
let rectWidth = 100;
let colorR = 0.0;
let colorG = 0.0;
let colorB = 0.0;
let noiseX = 0.0;
let xSpeed = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  y = height;
  x = width;
  x1 = x / 2;
  for (let i = 0; i < 8; i++) {
    y = y + rectHeight;
    rectangles.push(new Rectangles(x, y, rectWidth));
    rectangles1.push(new Rectangles(x, y, rectWidth));
  }
}

function draw() {
  background(0);

  //refactorizar la posición en x y el tamaño en ambas funciones para que sean simétricas

  columnsRight(x, rectWidth);
  columnsLeft(rectWidth, rectWidth);
  fill(0);
  noStroke();

  beginShape();

  vertex(30, 0);
  vertex(width - 30, 0);

  vertex(width / 2 + 10, height / 2 - 100);
  vertex(width / 2, height / 2 - 110);
  endShape(CLOSE);

  beginShape();
  vertex(30, height);
  vertex(width - 30, height);
  vertex(width / 2 + 20, height / 2);
  vertex(width / 2, height / 2);
  endShape(CLOSE);
}

function columnsRight(xPos, w) {
  n = 0.8;
  for (let i = 0; i < rectangles.length; i++) {
    rectangles[i].move();
    rectangles[i].changeColor();
    rectangles[i].fractalize(
      xPos - rectWidth,
      rectangles[i].y + 75,
      w,
      rectHeight
    );
  }

  if (w > 25) {
    columnsRight(xPos / 1.12 + w * n, w * n);
    // displayColumns(xPos * 1.2 + w * n, w * n);
  }
}

function columnsLeft(xPos, w) {
  //poner una columna en 0, otra en width y desplegar hasta el centro reduciendo rectWidth
  n = 0.8;
  for (let i = 0; i < rectangles.length; i++) {
    rectangles[i].move();
    rectangles[i].changeColor();
    rectangles[i].fractalize(xPos, rectangles[i].y + 75, w, rectHeight);
  }

  if (w > 25) {
    columnsLeft(xPos + 170 * n + w, w * n);
  }
}
