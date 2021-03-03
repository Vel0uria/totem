class Rectangles {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.rectWidth = rectWidth;
    this.rectHeight = rectHeight;
    this.ySpeed = 4;
    this.r = 0;
    this.g = 0;
    this.b = 0;
  }
  display() {
    rect(this.x, this.y + 75, this.rectWidth, this.rectHeight);
    this.fractalize(this.x, this.y, this.rectWidth, this.rectHeight);
  }
  move() {
    this.y -= this.ySpeed;
    if (this.y < -600) {
      this.y = height + rectHeight * 2;
    }
  }
  changeColor() {
    colorR = colorR + 0.001;
    colorG = colorG + 0.002;
    colorB = colorB + 0.003;

    this.r = map(
      this.y,
      this.y + this.rectHeight,
      -600,
      noise(colorR) * 255,
      255
    );
    this.g = map(
      this.y,
      this.y + this.rectHeight,
      -600,
      noise(colorG) * 255,
      255
    );
    this.b = map(
      this.y,
      this.y + this.rectHeight,
      -600,
      noise(colorB) * 255,
      255
    );
    //noStroke();
    stroke(this.r, this.g, this.b);
    strokeWeight(0.5);
    noFill();
    //fill(this.r, this.g, this.b, 10);
  }
  fractalize(x, y, sX, sY) {
    let n = 0.5;
    //rect(x, y, sX, sY);
    ellipse(x, y, sX * 1.3, sY);
    ellipse(x, y, sX * 1.5, sY * 4);

    if (sX > 5) {
      this.fractalize(x + sX * n, y + sY * n, sX * n, sY * n);
      this.fractalize(x - sX * n, y - sY * n, sX * n, sY * n);
    }
  }
}
