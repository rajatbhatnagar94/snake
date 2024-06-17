import React from "react";
import { CellRender } from "../Cell/Cell";
import { Cell } from "@/common/models/cell";

interface GridProps {
  cells: Array<Array<Cell>>;
}

export function Grid({ cells }: GridProps) {
  return (
    <table>
      <tbody>
        {cells.map((cellRow, idx) => (
          <tr key={idx}>
            {cellRow.map((cell) => (
              <td key={cell.id}>
                <CellRender cell={cell} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
