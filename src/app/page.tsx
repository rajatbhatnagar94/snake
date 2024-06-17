"use client";
import { Direction } from "@/common/models/direction";
import { Position } from "@/common/models/position";
import { GamePlay } from "@/components/GamePlay/GamePlay";

const DEFAULT_ROWS = 50;
const DEFAULT_COLS = 50;
const SNAKE_INIT_SIZE = 5;
const SNAKE_INIT_POSITION_COL = 5;
const SNAKE_INIT_POSITION_ROW = 0;
const SNAKE_INIT_DIRECTION = Direction.right;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GamePlay
        rows={DEFAULT_ROWS}
        cols={DEFAULT_COLS}
        snakeInitSize={SNAKE_INIT_SIZE}
        snakeInitDirection={SNAKE_INIT_DIRECTION}
        snakeStartPosition={
          new Position(SNAKE_INIT_POSITION_ROW, SNAKE_INIT_POSITION_COL)
        }
      />
    </main>
  );
}
