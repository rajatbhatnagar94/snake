import { Board } from "./board";
import { Snake } from "./snake";
import { Direction, Movement } from "./direction";
import { Position } from "./position";
import { Food } from "./food";

export class Gameplay {
  snake: Snake;
  rows: number;
  cols: number;
  board: Board;
  movement: Movement;
  food: Food;

  constructor(
    rows: number,
    cols: number,
    snakeStartSize: number,
    snakeStartPosition: Position,
    snakeStartDirection: Direction,
  ) {
    this.rows = rows;
    this.cols = cols;
    this.board = new Board(rows, cols);
    this.snake = new Snake(
      snakeStartSize,
      snakeStartPosition,
      snakeStartDirection,
    );
    this.movement = new Movement(snakeStartPosition, snakeStartDirection);
    this.food = new Food(this.getRandomPosition());
  }

  getRandomPosition(): Position {
    const x = Math.floor(Math.random() * this.rows);
    const y = Math.floor(Math.random() * this.cols);
    return new Position(x, y);
  }

  start() {
    // Add Snake to the board.
    this.board.addSnake(this.snake);
    // Add food to the board.
    this.board.addFood(this.food);
  }

  tick() {
    // do all operations at tick.
    /**
     * 1. Move snake
     * 2. Check if there's it's end of game i.e. snake bite or hitting the walls in next move.
     * 3. Check if food is hit. If so, increase size of snake and move food elsewhere.
     */
    this.snake.move();
    this.board.clear();
    this.board.addFood(this.food);
    this.board.addSnake(this.snake);
  }
}
