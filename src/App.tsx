import './index.css'
import React from 'react';
import { Cell } from "./components/Cell";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Number } from './components/Number';

type BoardCell = number | null;
type Board = BoardCell[][];

const board: Board = Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => null));
const range = Array.from({ length: 9 }, (_, i) => i + 1);

const App: React.FC = () => {
  const [ selectedCell, setSelectedCell ] = React.useState<Array<number> | null>(null);
  const [ selectedNumber, setSelectedNumber ] = React.useState<number | null>(null);
  const [ fastMode, setFastMode ] = React.useState<boolean>(false);

  const notify = () => toast("Select a cell first!");

  const handleSelectedCell = (coordinates: Array<number> | null): void => {
    setSelectedCell(coordinates);
  }

  const handleFastMode = (): void => {
    setFastMode(!fastMode);
  }

  const handleSelectedNumber = (num: number): void => {
    setSelectedNumber(num);
    console.log(selectedNumber);
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
    <section>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h1 className="title">Sudoku</h1>
      <div className="board">
        { board.map((row , i:number) => (
          <div key={i} className="row">
            { row.map((cellNumber: number | null, j: number) => (
              <Cell key={j} coordinates={[i, j]} cellNumber={cellNumber} selectedCell={selectedCell} changeSelectedCell={handleSelectedCell}/>
            )) }
          </div>
        )) }
      </div>
      <div className="optionsSection">
        <label className="switch">
          <input type="checkbox" onClick={handleFastMode}/>
          <span className="slider"></span>
        </label>
      </div>
      <div className="rangeContainer">
        { range.map((num: number, i: number) => (
          <Number key={i} num={num} selectedNumber={selectedNumber} fastMode={fastMode} handleSelectedNumber={handleSelectedNumber}/>
        )) }
      </div>
    </section>
  )
}

export default App
