import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { generateRandomBoard } from "./sudokuLogic";

type BoardCell = number | null;
type Board = BoardCell[][];

type GameContextType = {
  board: Board,
  selectedCell: Array<number> | null,
  selectedNumber: number | null,
  fastMode: boolean,
  range: Array<number>,
  handleFastMode: () => void,
  handleDeleteNumber: () => void,
  handleSelectedNumber: (num: number) => void,
  handleSelectedCell: (coordinates: Array<number> | null) => void,
  handleAssignNumber: (num: number, coordinates: Array<number> | null) => void,
};

const initialContext: GameContextType = {
  board: Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => null)),
  selectedCell: null,
  selectedNumber: null,
  fastMode: false,
  range: Array.from({ length: 9 }, (_, i) => i + 1),
  handleFastMode: () => {},
  handleAssignNumber: () => {},
  handleSelectedCell: () => {},
  handleDeleteNumber: () => {},
  handleSelectedNumber: () => {},
};

const range: number[] = Array.from({ length: 9 }, (_, i) => i + 1);
const GameContext = createContext<GameContextType>(initialContext);

function GameProvider({ children }: { children: JSX.Element | JSX.Element[] }) {
  const inicialBoard = generateRandomBoard();
  const [ board, setBoard ] = useState<Board>(inicialBoard);
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

  const handleAssignNumber = (num: number, coordinates: Array<number> | null = selectedCell): void => {
    if (coordinates != null) {
      const [i, j] = coordinates;
      if(board != null){
        const newBoard = [...board];
        newBoard[i][j] = num;
        setBoard(newBoard);
      }
      fastMode ? setSelectedNumber(num) : setSelectedNumber(null);
      setSelectedCell(null);
    } else {
      if(!fastMode){
        notify();
      }
    }
  }

  const handleDeleteNumber = (): void => {
    const coordinates: Array<number> | null = selectedCell
    if (coordinates != null) {
      const [i, j] = coordinates;
      console.log(coordinates, selectedCell);
      if(board != null){
        const newBoard = [...board];
        newBoard[i][j] = null;
        setBoard(newBoard);
      }
      setSelectedCell(null);
    } else {
      notify();
    }
  }

  return (
    <GameContext.Provider value={{
      board,
      range,
      fastMode,
      selectedCell,
      selectedNumber,
      handleFastMode,
      handleDeleteNumber,
      handleAssignNumber,
      handleSelectedCell,
      handleSelectedNumber,
    }}>
      {children}
    </GameContext.Provider>
  )
}

export { GameContext, GameProvider };