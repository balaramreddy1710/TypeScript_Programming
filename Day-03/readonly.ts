interface Point {
  x: number;
  y: number;
}

const p: Readonly<Point> = { x: 10, y: 20 };
// p.x = 30
