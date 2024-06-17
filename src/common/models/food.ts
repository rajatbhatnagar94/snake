import { Position } from "./position";

export class Food {
  position: Position;

  constructor(initPosition: Position) {
    this.position = initPosition;
  }

  move(position: Position): Position {
    this.position = position;

    return this.position;
  }

  getPosition(): Position {
    return this.position;
  }
}
