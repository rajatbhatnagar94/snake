// Position on the board.
export interface Position {
	x: number;
	y: number;
}

// Data stored in each cell of the position.
export interface CellDatum {
	// Is there food in this cell?
	isFood: boolean;
	// Is the snake head on this cell?
	isSnakeHead: boolean;
	// Is the snake tail on this cell?
	isSnakeTail: boolean;
	// Is snake body on this cell?
	// Note the this will be true if snake head or snake tail is on this.
	isSnakeBody: boolean;
}
