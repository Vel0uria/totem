let rectangles = [];
let rectHeight = 300;
let colorR = 0.0;
let colorG = 0.0;
let colorB = 0.0;
let noiseX = 0.0;
let xSpeed = 1;

const prepositions = [
  "a",
  "ante",
  "bajo",
  "con",
  "contra",
  "de",
  "desde",
  "detrás",
  "en",
  "entre",
];
const prepositions1 = [
  "hasta",
  "mientras",
  "para",
  "por",
  "según",
  "sobre",
  "tras",
  "y",
];
const adjectives = [
  "corta",
  "pensante",
  "efervescente",
  "azul",
  "ignorante",
  "ausente",
  "pendiente",
];
const adjectives1 = [
  "marea",
  "coherente",
  "grande",
  "importante",
  "corriente",
  "consciente",
];
const nouns = [
  "la verdad",
  "el bosque",
  "la mentira",
  "el vientre",
  "mora",
  "la materia",
  "camino",
  "catástrofe",
  "cielo",
  "nunca",
];
const nouns1 = [
  "sexo",
  "música",
  "perla",
  "presente",
  "derrumbe",
  "encuentro",
  "siempre",
  "eternidad",
];
const verbs = [
  "convierte",
  "hace",
  "siente",

  "vierte",
  "lastima",
  "declara",
  "conduce",
  "advierte",
  "encierra",
];
let randomNoun = 0;
let randomNoun1 = 1;
let randomAdj = 2;
let randomAdj1 = 3;
let randomPrep = 4;
let randomPrep1 = 7;
let randomVerb = 6;
let randomDisplay = 4;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  y = height;
  for (let i = 0; i < 7; i++) {
    y = y + rectHeight;
    rectangles.push(new Rectangles(y));
  }
  xText = width / 2;
}

function draw() {
  background(0);

  for (let i = 0; i < rectangles.length; i++) {
    // rectangles[i].x += xSpeed;
    rectangles[i].move();
    rectangles[i].changeColor();
    rectangles[i].fractalize(rectangles[i].x, rectangles[i].y, 100, rectHeight);
    // if (rectangles[i].y >= height / 2 && rectangles[i].x > width / 2) {
    //   xSpeed *= -1;
    //   rectangles[i].x = width / 2;
    // } else if (rectangles[i].y <= height / 2 && rectangles[i].x < width / 2) {
    //   xSpeed = 1;
    //   rectangles[i].x = width / 2;
    // }
  }

  // text(verbs[randomVerb], xText, rectangles[5].y);
  // textAlign(RIGHT);
  // text(verbs[randomVerb], xText, rectangles[4].y);
  // textAlign(CENTER);
  // text(nouns[randomNoun], xText, rectangles[3].y);
  // textAlign(LEFT);
  // text(prepositions[randomPrep], xText, rectangles[2].y);
  // textAlign(CENTER);
  // text(nouns1[randomNoun1], xText, rectangles[1].y);
  // textAlign(RIGHT);
  // text(adjectives[randomAdj], xText, rectangles[0].y);
  // if (rectangles[5].y < 1) {
  //   randomVerb = floor(random(verbs.length));
  // }

  // if (rectangles[4].y < 1) {
  //   randomVerb = floor(random(verbs.length));
  // }
  // if (rectangles[3].y < 1) {
  //   randomNoun = floor(random(nouns.length));
  // }

  // if (rectangles[2].y < 1) {
  //   randomPrep = floor(random(prepositions.length));
  // }
  // if (rectangles[1].y < 1) {
  //   randomNoun1 = floor(random(nouns1.length));
  // }
  // if (rectangles[0].y < 1) {
  //   randomAdj = floor(random(adjectives.length));
  // }
}
