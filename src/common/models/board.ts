import { Position } from "@/common/models/position";
import { Cell } from "@/common/models/cell";
import { Food } from "./food";
import { Snake } from "./snake";

export class Board {
  rows = 0;
  cols = 0;
  grid: Array<Array<Cell>> = new Array<Array<Cell>>();
  constructor(x: number, y: number) {
    this.rows = x;
    this.cols = y;
    this.grid = new Array<Array<Cell>>(x);
    for (let i = 0; i < x; i++) {
      this.grid[i] = new Array<Cell>(y);
      for (let j = 0; j < y; j++) {
        this.grid[i][j] = new Cell(i + "," + j);
      }
    }
  }

  get(position: Position): Cell {
    return this.grid[position.getX()][position.getY()];
  }

  getCells(): Array<Array<Cell>> {
    return this.grid;
  }

  add(position: Position, cell: Cell) {
    this.grid[position.getX()][position.getY()] = cell;
  }

  addFood(food: Food) {
    const x = food.getPosition().getX();
    const y = food.getPosition().getY();
    const cell = new Cell(x + "," + y);
    cell.setFood(true);
    this.grid[x][y] = cell;
    console.log(x + "," + y);
  }

  addSnake(snake: Snake) {
    const positions = snake.getPositions();
    for (let i = 0; i < positions.length; i++) {
      const x = positions[i].getX();
      const y = positions[i].getY();
      const cell = new Cell(x + "," + y);
      cell.setSnakeHead(snake.isHead(positions[i]));
      cell.setSnakeTail(snake.isTail(positions[i]));
      cell.setSnakeBody(true);
      this.grid[x][y] = cell;
    }
  }

  clear() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.grid[i][j] = new Cell(i + "," + j);
      }
    }
  }

  remove(position: Position) {
    this.grid[position.getX()][position.getY()] = new Cell(
      position.getX() + "," + position.getY(),
    );
  }
}
