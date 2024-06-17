import { Board } from "@/common/models/board";
import React from "react";

interface GridProps {
  rows: number;
  cols: number;
}

export function Grid({ rows, cols }: GridProps) {
  const board = new Board(rows, cols);
  console.log("In grid");
  return <div>Hello</div>;
}
