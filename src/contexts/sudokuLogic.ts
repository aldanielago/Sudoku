type BoardCell = number | null;
type Board = BoardCell[][];

export function isValid(board: Board, num: number, coordinates: Array<number>): boolean {
  const [row, col] = coordinates;
  // Check if the number is in the row or column
  for(let i = 0; i < 9; i++){
    if(board[row][i] == num || board[i][col] == num){
      return false;
    }
  }

  // Check if the number is in the 3x3 grid
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (board[i][j] === num && (i !== row || j !== col)) {
        return false;
      }
    }
  }

  return true;
}

function generateRandomNumber() : number{
  return Math.floor(Math.random() * 9) + 1;
}

export function generateRandomBoard() : Board {
  const board: Board = Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => null));
  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
      const num = generateRandomNumber();
      if(isValid(board, num, [i, j])) {
        board[i][j] = num;
      }
    }
  }

  return board;
}
