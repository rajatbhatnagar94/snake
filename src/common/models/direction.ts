import { Position } from "@/common/models/position";

export enum Direction {
  right = "right",
  left = "left",
  up = "up",
  down = "down",
}

export class Movement {
  position: Position;
  direction: Direction;

  constructor(position: Position, direction: Direction) {
    this.position = position;
    this.direction = direction;
  }

  getPosition(): Position {
    return this.position;
  }

  getDirection(): Direction {
    return this.direction;
  }

  setDirection(direction: Direction): Direction {
    this.direction = direction;
    return this.direction;
  }

  setPosition(position: Position): Position {
    this.position = position;
    return this.position;
  }

  move(): Position {
    const nextPosition = Movement.nextPosition(this.position, this.direction);
    this.position = nextPosition;
    return this.getPosition();
  }

  static nextPosition(position: Position, dir: Direction): Position {
    if (dir === Direction.right) {
      return new Position(position.getX(), position.getY() + 1);
    } else if (dir === Direction.left) {
      return new Position(position.getX(), position.getY() - 1);
    } else if (dir === Direction.down) {
      return new Position(position.getX() + 1, position.getY());
    } else {
      return new Position(position.getX() - 1, position.getY() + 1);
    }
  }

  static getOppositeDirection(direction: Direction): Direction {
    if (direction === Direction.left) {
      return Direction.right;
    } else if (direction === Direction.right) {
      return Direction.left;
    } else if (direction === Direction.up) {
      return Direction.down;
    } else {
      return Direction.up;
    }
  }
}
