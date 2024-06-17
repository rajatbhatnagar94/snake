import React from "react";
import { Cell } from "@/common/models/cell";
import "./Cell.css";

export interface CellProps {
  cell: Cell;
}

export const CellRender = ({ cell }: CellProps) => {
  if (cell.isFood) {
    return <div className="food-cell common-cell" />;
  } else if (cell.isSnakeHead) {
    return <div className="snake-head common-cell" />;
  } else if (cell.isSnakeTail) {
    return <div className="snake-tail common-cell" />;
  } else if (cell.isSnakeBody) {
    return <div className="snake-body common-cell" />;
  } else {
    return <div className="empty-cell common-cell" />;
  }
};
