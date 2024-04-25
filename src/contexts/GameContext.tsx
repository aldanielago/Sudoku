import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type BoardCell = number | null;
type Board = BoardCell[][];

type GameContextType = {
  board: Board,
  selectedCell: Array<number> | null,
  selectedNumber: number | null,
  fastMode: boolean,
  range: Array<number>,
  handleSelectedCell: (coordinates: Array<number> | null) => void,
  handleFastMode: () => void,
  handleSelectedNumber: (num: number) => void,
  handleAssignNumber: (num: number) => void,
};

const initialContext: GameContextType = {
  board: Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => null)),
  selectedCell: null,
  selectedNumber: null,
  fastMode: false,
  range: Array.from({ length: 9 }, (_, i) => i + 1),
  handleSelectedCell: () => {},
  handleFastMode: () => {},
  handleSelectedNumber: () => {},
  handleAssignNumber: () => {},
};

const board: Board = Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => null));
const range: number[] = Array.from({ length: 9 }, (_, i) => i + 1);
const GameContext = createContext<GameContextType>(initialContext);

function GameProvider({ children }: { children: JSX.Element | JSX.Element[] }) {

  const [ selectedCell, setSelectedCell ] = useState<Array<number> | null>(null);
  const [ selectedNumber, setSelectedNumber ] = useState<number | null>(null);
  const [ fastMode, setFastMode ] = useState<boolean>(false);

  const notify = () => toast("Select a cell first!");

  const handleSelectedCell = (coordinates: Array<number> | null): void => {
    setSelectedCell(coordinates);
  }

  const handleFastMode = (): void => {
    setFastMode(!fastMode);
  }

  const handleSelectedNumber = (num: number): void => {
    setSelectedNumber(num);
    handleAssignNumber(num);
  }

  const handleAssignNumber = (num: number): void => {
    if (selectedCell != null) {
      const [i, j] = selectedCell;
      if(board != null){
        board[i][j] = num;
      }
      fastMode ? setSelectedNumber(num) : setSelectedNumber(null);
      setSelectedCell(null);
    } else {
      if(!fastMode){
        notify();
      }
    }
  }

  return (
    <GameContext.Provider value={{
      board,
      selectedNumber,
      selectedCell,
      fastMode,
      range,
      handleSelectedCell,
      handleFastMode,
      handleSelectedNumber,
      handleAssignNumber
    }}>
      {children}
    </GameContext.Provider>
  )
}

export { GameContext, GameProvider };