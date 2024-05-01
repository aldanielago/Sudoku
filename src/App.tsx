import './index.css'
import React, { useContext} from 'react';
import { Cell } from "./components/Cell";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Number } from './components/Number';
import { GameContext } from './contexts/GameContext';
import { IoReturnDownBack } from "react-icons/io5";
import { CiEraser } from "react-icons/ci";

const App: React.FC = () => {
  const board = useContext(GameContext).board;
  const range = useContext(GameContext).range;
  const handleFastMode = useContext(GameContext).handleFastMode;
  const handleDeleteNumber = useContext(GameContext).handleDeleteNumber;

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
        { board.map((row: Array<number | null>, i: number) => (
          <div key={i} className="row">
            { row.map((cellNumber: number | null, j: number) => (
              <Cell key={j} coordinates={[i, j]} cellNumber={cellNumber}/>
            )) }
          </div>
        )) }
      </div>
      <div className="optionsSection">
        <div className="smallContainer">
          <IoReturnDownBack className="icon" />
          <CiEraser className="icon" onClick={handleDeleteNumber}/>
        </div>
        <label className="switch">
          <input type="checkbox" onClick={handleFastMode}/>
          <span className="slider"></span>
        </label>
      </div>
      <div className="rangeContainer">
        { range.map((num: number, i: number) => (
          <Number key={i} num={num}/>
        )) }
      </div>
    </section>
  )
}

export default App
