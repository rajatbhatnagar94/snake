"use client";

import React, { useEffect, useState } from "react";
import { Grid } from "../Grid/Grid";
import { Direction } from "@/common/models/direction";
import { Gameplay } from "@/common/models/gameplay";
import { Position } from "@/common/models/position";
import { Cell } from "@/common/models/cell";

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      game.tick();
      setCells(game.board.getCells());
    }, 2 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <Grid cells={cells} />;
};
