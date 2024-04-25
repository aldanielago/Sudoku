import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

export function Cell({ cellNumber, coordinates } :
  { cellNumber : number | null,
    coordinates: Array<number> | null,
  }) {
  const selectedCell = useContext(GameContext).selectedCell;
  const changeSelectedCell = useContext(GameContext).handleSelectedCell;

  const isSelected = selectedCell != null && coordinates != null && selectedCell[0] == coordinates[0] && selectedCell[1] == coordinates[1];
  return (
    <div className={`cell ${isSelected && 'selectedCell'}`}
      onClick={() => changeSelectedCell(coordinates)}
    >
      { cellNumber }
    </div>
  )
}