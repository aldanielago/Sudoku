import './index.css'

const board = Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => 0))

function App() {
  return (
    <>
      <div className="board">
        { board.map((row, i) => (
          <div key={i} className="row">
            { row.map((cell, j) => (
              <div key={j} className="cell">{cell}</div>
            )) }
          </div>
        )) }
      </div>
    </>
  )
}

export default App
