import { Position } from "@/common/types/board"
import { Cell } from "@/common/models/cell"

export class Board {
	rows = 0;
	cols = 0;
	grid: Array<Array<Cell>> = new Array<Array<Cell>>;
	constructor(x: number, y: number) {
		this.rows = x;
		this.cols = y;
		this.grid = new Array<Array<Cell>>(x);
		for (let i = 0; i < x; i++) {
			this.grid[i] = new Array<Cell>(y)
			for (let j = 0; j < y; j++) {
				this.grid[i][j] = new Cell();
			}
		}
	}

	get(position: Position): Cell {
		return this.grid[position.x][position.y]
	}
}
