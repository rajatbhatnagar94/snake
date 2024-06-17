import { Board } from "@/common/models/board";
import React from "react";
import { CellRender } from "../Cell/Cell";

interface GridProps {
  board: Board;
}

export function Grid({ board }: GridProps) {
  return (
    <table>
      <tbody>
        {board.getCells().map((cellRow, idx) => (
          <tr key={idx}>
            {cellRow.map((cell) => (
              <td>
                <CellRender key={cell.id} cell={cell} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
