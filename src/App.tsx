import './index.css'
import React from 'react';
import { Cell } from "./components/Cell";

type Board = number[][] | null[][];

const board: Board = Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => null));
const range = Array.from({ length: 9 }, (_, i) => i + 1);

const App: React.FC = () => {
  const [ selectedCell, setSelectedCell ] = React.useState<number | null>(null);

  const handleSelectedCell = (idCell: number): void => {
    setSelectedCell(idCell);
  }

  return (
    <section>
      <h1 className="title">Sudoku</h1>
      <div className="board">
        { board.map((row , i:number) => (
          <div key={i} className="row">
            { row.map((cell: number | null, j: number) => (
              <Cell key={j} idCell={j} cell={cell} isSelected={selectedCell} onClick={handleSelectedCell}/>
            )) }
          </div>
        )) }
      </div>
      <div className="rangeContainer">
        { range.map((num: number, i: number) => (
          <button key={i} className="num">{ num }</button>
        )) }
      </div>
    </section>
  )
}

export default App
