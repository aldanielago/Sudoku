import './index.css'
import React from 'react';
import { Cell } from "./components/Cell";

type BoardCell = number | null;
type Board = BoardCell[][];

const board: Board = Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => null));
const range = Array.from({ length: 9 }, (_, i) => i + 1);

const App: React.FC = () => {
  const [ selectedCell, setSelectedCell ] = React.useState<Array<number> | null>(null);

  const handleSelectedCell = (coordinates: Array<number> | null): void => {
    setSelectedCell(coordinates);
  }

  const handleAssignNumber = (num: number): void => {
    if (selectedCell != null) {
      const [i, j] = selectedCell;
      if(board != null){
        board[i][j] = num;
      }
      setSelectedCell(null);
    }
  }

  return (
    <section>
      <h1 className="title">Sudoku</h1>
      <div className="board">
        { board.map((row , i:number) => (
          <div key={i} className="row">
            { row.map((cellNumber: number | null, j: number) => (
              <Cell key={j} coordinates={[i, j]} cellNumber={cellNumber} selectedCell={selectedCell} onClick={handleSelectedCell}/>
            )) }
          </div>
        )) }
      </div>
      <div className="rangeContainer">
        { range.map((num: number, i: number) => (
          <button key={i} className="num" onClick={() => handleAssignNumber(num)}>{ num }</button>
        )) }
      </div>
    </section>
  )
}

export default App
