import { board, createBoard, Gameboard } from '../src/Gameboard';

type Player = {
  name: string;
  movesBoard: number[][];
  playersGameboard: board;
  makeMove(x: number, y: number, movesBoard: number[][], opponentsBoard: board): boolean;
};

function createPlayer(name: string): Player {
  const playersGameboard = Gameboard();
  let movesBoard: number[][] = [];
  movesBoard = createBoard(movesBoard);
  return {
    name: name,
    movesBoard: movesBoard,
    playersGameboard: playersGameboard,
    makeMove(
      x: number,
      y: number,
      opponentsMovesBoard: number[][],
      opponentsBoard: board
    ): boolean {
      if (opponentsMovesBoard[y][x] == 0) {
        opponentsBoard.receiveAttack(x, y);
        opponentsMovesBoard[y][x] = 1;
        return true;
      }

      return false;
    },
  };
}

export { createPlayer };
