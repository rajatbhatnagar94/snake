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
  isGameOver: boolean;

  constructor(
    rows: number,
    cols: number,
    snakeStartSize: number,
    snakeStartPosition: Position,
    snakeStartDirection: Direction,
  ) {
    this.rows = rows;
    this.cols = cols;
    this.isGameOver = false;
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

  setGameOver(is: boolean) {
    this.isGameOver = is;
  }

  isOutOfBounds(): boolean {
    const head = this.snake.getHead();
    const x = head.getX();
    const y = head.getY();
    if (x >= this.rows || x < 0 || y >= this.cols || y < 0) {
      return true;
    }

    return false;
  }

  tick() {
    // do all operations at tick.
    /**
     * 1. Move snake
     * 2. Check if there's it's end of game i.e. snake bite or hitting the walls in next move.
     * 3. Check if food is hit. If so, increase size of snake and move food elsewhere.
     */

    if (this.hasGameEnded()) {
      return;
    }

    this.snake.move();
    if (this.snake.isSelfBite() || this.isOutOfBounds()) {
      this.setGameOver(true);
      return;
    }

    this.board.clear();
    const head = this.snake.getHead();
    if (head.equals(this.food.getPosition())) {
      this.food = new Food(this.getRandomPosition());
      this.snake.addFirst();
    }
    this.board.addFood(this.food);
    this.board.addSnake(this.snake);
  }

  hasGameEnded() {
    return this.isGameOver;
  }
}
