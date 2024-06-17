export enum Movement {
  right = "right",
  left = "left",
  up = "up",
  down = "down",
}
export class Direction {
  x: number;
  y: number;

  constructor() {
    this.x = 0;
    this.y = 0;
  }
}
