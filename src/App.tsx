import './index.css'
import React from 'react';
import { Cell } from "./components/cell";

type Board = number[][]

const board: Board = Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => 0));
const range = Array.from({ length: 9 }, (_, i) => i + 1);

const App: React.FC = () => {
  return (
    <section>
      <h1 className="title">Sudoku</h1>
      <div className="board">
        { board.map((row , i:number) => (
          <div key={i} className="row">
            { row.map((cell: number, j: number) => (
              <Cell key={j} cell={cell} />
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
