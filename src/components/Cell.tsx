import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

export function Cell({ cellNumber, coordinates } :{ cellNumber : number | null, coordinates: Array<number> | null }) {
  const fastMode = useContext(GameContext).fastMode;
  const selectedCell = useContext(GameContext).selectedCell;
  const selectedNumber = useContext(GameContext).selectedNumber;
  const handleAssignNumber = useContext(GameContext).handleAssignNumber;
  const changeSelectedCell = useContext(GameContext).handleSelectedCell;

  const handleOnClick = () => {
    if (fastMode && selectedNumber != null && coordinates != null) {
      changeSelectedCell(coordinates);
      handleAssignNumber(selectedNumber, coordinates);
    } else {
      changeSelectedCell(coordinates);
    }
  }

  const isSelected = selectedCell != null && coordinates != null && selectedCell[0] == coordinates[0] && selectedCell[1] == coordinates[1];
  return (
    <div className={`cell ${isSelected && 'selectedCell'}`}
      onClick={handleOnClick}
    >
      { cellNumber }
    </div>
  )
}