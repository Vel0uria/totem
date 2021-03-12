//aplicar la misma recursividad (fractalozidad) de la columna para desplegar más columnas
//adj. Gram. Dicho especialmente de un proceso: Que se aplica de nuevo al resultado de haberlo aplicado previamente.
//Cómo cambiar tamaño de rectWidth para recursividad
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
  for (let i = 0; i < 9; i++) {
    y = y + rectHeight;
    rectangles.push(new Rectangles(x, y, rectWidth));
    rectangles1.push(new Rectangles(x, y, rectWidth));
  }
}

function draw() {
  background(0);

  displayColumns(x, rectWidth);
  displayColumns1(rectWidth, rectWidth);
  fill(0);
  noStroke();
  triangle(30, 0, width / 2, height / 2 - 150, width - 30, 0);
  triangle(30, height, width / 2, height / 2 + 30, width - 30, height);
}

function displayColumns(xPos, w) {
  //poner una columna en 0, otra en width y desplegar hasta el centro reduciendo rectWidth
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

  if (w > 30) {
    displayColumns(xPos / 1.12 + w * n, w * n);
    // displayColumns(xPos * 1.2 + w * n, w * n);
  }
}

function displayColumns1(xPos, w) {
  //poner una columna en 0, otra en width y desplegar hasta el centro reduciendo rectWidth
  n = 0.8;
  for (let i = 0; i < rectangles.length; i++) {
    rectangles[i].move();
    rectangles[i].changeColor();
    rectangles[i].fractalize(xPos, rectangles[i].y + 75, w, rectHeight);
  }

  if (w > 30) {
    displayColumns1(xPos + 170 * n + w, w * n);
  }
}
