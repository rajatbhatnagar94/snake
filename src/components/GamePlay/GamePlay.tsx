import React, { useEffect, useState } from "react";
import { Grid } from "../Grid/Grid";
import { Direction } from "@/common/models/direction";
import { Gameplay } from "@/common/models/gameplay";
import { Position } from "@/common/models/position";
import { Board } from "@/common/models/board";

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
  }, []);

  const [board, setBoard] = useState<Board>(game.board);

  useEffect(() => {
    setInterval(() => {
      game.tick();
      setBoard(game.board);
    }, 1 * 1000);
  }, []);

  return <Grid board={board} />;
};
