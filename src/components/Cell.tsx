export function Cell({ cell, idCell, isSelected, onClick } :
  { cell : number | null, idCell: number, isSelected: number | null, onClick: (idCell: number) => void}
) {
  console.log(cell, idCell, isSelected)
  return (
    <div className={`cell ${isSelected == idCell && 'selectedCell'}`}
      onClick={() => onClick(idCell)}>
      { cell }
    </div>
  )
}