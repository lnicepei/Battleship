import { board, createShipsBoard, Gameboard } from '../src/Gameboard';

type Player = {
  name: string;
  movesBoard: number[][];
  playersGameboard: board;
  makeMove(x: number, y: number, movesBoard: number[][], opponentsBoard: board): boolean;
  reset(): void;
};

function createPlayer(name: string): Player {
  const playersGameboard = Gameboard(name);
  let movesBoard: number[][] = [];
  movesBoard = createShipsBoard(movesBoard);
  return {
    name: name, // player's name
    movesBoard: movesBoard, // board for marking hits(opponent's field)
    playersGameboard: playersGameboard, // gameboard object with the properties of Gameboard
    makeMove(
      x: number,
      y: number,
      opponentsMovesBoard: number[][], // opponent's field with 0/1/2/3/4s
      opponentsBoard: board // opponent's gameboard object with the properties of Gameboard
    ): boolean {
      if (opponentsMovesBoard[y][x] == 0) {
        opponentsBoard.receiveAttack(x, y);
        opponentsMovesBoard[y][x] = 1;
        return true;
      }
      return false;
    },
    reset(): void {
      this.name = '';
      this.movesBoard = [];
      this.playersGameboard.arrayOfShips = [];
      this.playersGameboard.reset();
    },
  };
}

export { createPlayer, Player };
