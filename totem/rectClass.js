class Rectangles {
  constructor(y) {
    this.x = width / 2;
    this.y = y;
    this.rectWidth = 100;
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
    colorR = colorR + 0.0001;
    colorG = colorG + 0.0002;
    colorB = colorB + 0.0003;

    this.r = map(
      this.y,
      this.y + this.rectHeight,
      -75,
      noise(colorR) * 255,
      255
    );
    this.g = map(
      this.y,
      this.y + this.rectHeight,
      -75,
      noise(colorG) * 255,
      255
    );
    this.b = map(
      this.y,
      this.y + this.rectHeight,
      -75,
      noise(colorB) * 255,
      255
    );
    //noStroke();
    fill(this.r, this.g, this.b, 100);
  }
  fractalize(x, y, sX, sY) {
    let n = 0.5;
    //rect(x, y, sX, sY);
    rect(x, y + 75 * 2, sX * 1.5, sY * 4);
    //rect(x, y + 75 * 2, sX * 1.3, sY);
    if (sX > 5) {
      this.fractalize(x + sX * n, y + sY * n, sX * n, sY * n);
      this.fractalize(x - sX * n, y - sY * n, sX * n, sY * n);
    }
  }
}
