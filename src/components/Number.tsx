import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

export function Number({ num } : { num: number }) {
  const selectedNumber = useContext(GameContext).selectedNumber;
  const fastMode = useContext(GameContext).fastMode;
  const handleSelectedNumber = useContext(GameContext).handleSelectedNumber;

  const isSelectedNumber = selectedNumber === num;
  return (
    <button className={`num ${(fastMode && selectedNumber) && 'selectedNumber'}  ${(fastMode && !isSelectedNumber) && 'unselectedNumber'}`} 
      onClick={() => handleSelectedNumber(num)}>
      { num }
    </button>
  )
}