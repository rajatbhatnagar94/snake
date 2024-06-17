"use client";

import React, { KeyboardEvent, useEffect, useState } from "react";
import { Grid } from "../Grid/Grid";
import { Direction } from "@/common/models/direction";
import { Gameplay } from "@/common/models/gameplay";
import { Position } from "@/common/models/position";
import { Cell } from "@/common/models/cell";

const GAMEPLAY_SPEED_MS = 100;
export interface GamePlayProps {
  rows: number;
  cols: number;
  snakeStartPosition: Position;
  snakeInitSize: number;
  snakeInitDirection: Direction;
}

export const GamePlay = ({
  rows,
  cols,
  snakeStartPosition,
  snakeInitSize,
  snakeInitDirection,
}: GamePlayProps) => {
  const game = new Gameplay(
    rows,
    cols,
    snakeInitSize,
    snakeStartPosition,
    snakeInitDirection,
  );
  useEffect(() => {
    game.start();
    setCells(game.board.getCells());
  }, []);

  const [cells, setCells] = useState<Array<Array<Cell>>>(game.board.getCells());
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      game.tick();
      setCells(game.board.getCells());
      if (game.hasGameEnded()) {
        setIsGameOver(true);
      }
    }, GAMEPLAY_SPEED_MS);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const onKeydown = (e: globalThis.KeyboardEvent) => {
      if (e.code === "ArrowDown") {
        game.snake.changeDirection(Direction.down);
      } else if (e.code === "ArrowUp") {
        game.snake.changeDirection(Direction.up);
      } else if (e.code === "ArrowLeft") {
        game.snake.changeDirection(Direction.left);
      } else if (e.code === "ArrowRight") {
        game.snake.changeDirection(Direction.right);
      }
    };

    document.addEventListener("keydown", onKeydown);

    return () => document.removeEventListener("keydown", onKeydown);
  }, []);

  return (
    <div>
      {isGameOver ? <div>Game Over!!!</div> : <div>Game Started!</div>}
      <Grid cells={cells} />
    </div>
  );
};
