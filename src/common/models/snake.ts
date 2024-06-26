import { Position } from "@/common/models/position";
import { Direction, Movement } from "./direction";

export class Snake {
  size = 0;
  area: Position[];
  currDir: Direction;

  constructor(size: number, start: Position, currDir: Direction) {
    this.size = size;
    this.area = new Array<Position>(size);
    this.area[size - 1] = start;
    const oppositeDir = Movement.getOppositeDirection(currDir);
    for (let i = size - 2; i >= 0; i--) {
      const position = Movement.nextPosition(this.area[i + 1], oppositeDir);
      this.area[i] = position;
    }
    this.currDir = currDir;
  }

  getDirection(): Direction {
    return this.currDir;
  }

  getPositions(): Position[] {
    return this.area;
  }

  changeDirection(dir: Direction) {
    const oppositeDir = Movement.getOppositeDirection(dir);
    if (this.currDir === oppositeDir || this.currDir === dir) {
      return;
    }
    this.currDir = dir;
  }

  // Changes the area by moving one step in the direction.
  // This will remove the first element and shift the array by one to the left.
  // It will add one more position at the end in the direction.
  move(): Position[] {
    const nextPosition = Movement.nextPosition(
      this.area[this.size - 1],
      this.currDir,
    );
    this.area.splice(0, 1);
    this.area.push(nextPosition);
    return this.area;
  }

  // Adds at the first location location without removing the last element.
  addFirst(): Position[] {
    const nextPosition = Movement.nextPosition(
      this.area[0],
      Movement.getOppositeDirection(this.currDir),
    );

    this.area.splice(0, 0, nextPosition);
    this.size++;

    return this.area;
  }

  getHead(): Position {
    return this.area[this.size - 1];
  }

  getTail(): Position {
    return this.area[0];
  }

  // Returns true if the snake has bitten itself
  isSelfBite(): boolean {
    const lastPosition = this.area[this.size - 1];
    const n = this.area.length;

    const intersectedPosition = this.area
      .slice(0, n - 1)
      .find((position) => position.equals(lastPosition));

    if (intersectedPosition === undefined) {
      return false;
    }

    return true;
  }

  isHead(position: Position): boolean {
    return position.equals(this.area[this.size - 1]);
  }

  isTail(position: Position): boolean {
    return position.equals(this.area[0]);
  }
}
