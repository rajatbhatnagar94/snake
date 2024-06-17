export class Cell {
	// Is there food in this cell?
	isFood: boolean;
	// Is the snake head on this cell?
	isSnakeHead: boolean;
	// Is the snake tail on this cell?
	isSnakeTail: boolean;
	// Is snake body on this cell?
	// Note the this will be true if snake head or snake tail is on this.
	isSnakeBody: boolean;

	constructor() {
		this.isFood = false;
		this.isSnakeBody = false;
		this.isSnakeTail = false;
		this.isSnakeHead = false;
	}

	setFood(isFood: boolean) {
		this.isFood = isFood;
	}

	setSnakeBody(isSnakeBody: boolean) {
		this.isSnakeBody = isSnakeBody;
	}

	setSnakeTail(isSnakeTail: boolean) {
		this.isSnakeTail = isSnakeTail;
		this.isSnakeBody = isSnakeTail;
	}

	setSnakeHead(isSnakeHead: boolean) {
		this.isSnakeHead = isSnakeHead;
		this.isSnakeBody = isSnakeHead;
	}
}
