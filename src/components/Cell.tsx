export function Cell({ cellNumber, coordinates, selectedCell, changeSelectedCell } :
  { cellNumber : number | null,
    coordinates: Array<number> | null,
    selectedCell: Array<number> | null,
    changeSelectedCell: (coordinates: Array<number> | null) => void
  }) {
  const isSelected = selectedCell != null && coordinates != null && selectedCell[0] == coordinates[0] && selectedCell[1] == coordinates[1];

  return (
    <div className={`cell ${isSelected && 'selectedCell'}`}
      onClick={() => changeSelectedCell(coordinates)}
    >
      { cellNumber }
    </div>
  )
}