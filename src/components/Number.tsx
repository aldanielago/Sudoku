export function Number({ num, selectedNumber, fastMode, handleSelectedNumber } :
  { num: number,
    selectedNumber: number | null,
    fastMode: boolean,
    handleSelectedNumber: (num: number) => void
  }) {

  const isSelectedNumber = selectedNumber === num;
  return (
    <button className={`num ${(fastMode && selectedNumber) && 'selectedNumber'}  ${(fastMode && !isSelectedNumber) && 'unselectedNumber'}`} onClick={() => handleSelectedNumber(num)}>{ num }</button>
  )
}