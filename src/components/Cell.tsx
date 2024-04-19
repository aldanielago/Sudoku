export function Cell({ cellNumber, coordinates, selectedCell, onClick } :
  { cellNumber : number | null,
    coordinates: Array<number> | null,
    selectedCell: Array<number> | null,
    onClick: (coordinates: Array<number> | null) => void
  }) {
  const isSelected = selectedCell != null && coordinates != null && selectedCell[0] == coordinates[0] && selectedCell[1] == coordinates[1];
  return (
    <div className={`cell ${isSelected && 'selectedCell'}`}
      onClick={() => onClick(coordinates)}
    >
      { cellNumber }
    </div>
  )
}