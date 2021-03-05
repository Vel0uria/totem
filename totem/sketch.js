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
let xSpeed = 1;

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

  if (w > 45) {
    displayColumns(xPos / 1.2 + w * n, w * n);
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

  if (w > 45) {
    displayColumns1(xPos + 280 * n + w, w * n);
  }
}
