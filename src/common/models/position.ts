export class Position {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }

  equals(pos: Position): boolean {
    return this.x === pos.x && this.y === pos.y;
  }
}
