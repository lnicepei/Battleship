import { Ships } from './Ships';

type Ship = {
  length: number;
  width: number;
  height: number;
  position: string;
  whereHit: string[];
  sunk: boolean;
  coordinateX: number;
  coordinateY: number;
  hit(hitX: number, hitY: number): void;
  isSunk(): boolean;
};

type board = {
  arrayOfShips: Ship[];
  receiveAttack(coordinateX: number, coordinateY: number): [number[][], number];
  checkShipsAlive(): boolean;
  shipsBoard: number[][];
  reset(): void;
};

function Gameboard(): board {
  let arrayOfShips: Ship[] = [],
    shipsBoard: number[][] = [];

  [arrayOfShips, shipsBoard] = createShips(arrayOfShips);

  return {
    arrayOfShips,
    receiveAttack(coordinateX: number, coordinateY: number) {
      let resulOfAttack = 0;

      if (this.shipsBoard[coordinateY][coordinateX] == 0) {
        this.shipsBoard[coordinateY][coordinateX] = 4;
        resulOfAttack = 1;
      } else if (this.shipsBoard[coordinateY][coordinateX] == 1) {
        for (let x = coordinateX; x >= 0; x--) {
          const attackedShip: Ship | undefined = this.arrayOfShips.find(
            (someShip) => someShip.coordinateX == x && someShip.coordinateY == coordinateY
          );
          if (
            x - 1 >= 0 &&
            this.shipsBoard[coordinateY][x - 1] !== undefined &&
            this.shipsBoard[coordinateY][x] !== 0
          ) {
            attackedShip?.hit(coordinateX, coordinateY);
            console.log(attackedShip);
          } else if (
            (this.shipsBoard[coordinateY][x - 1] == undefined || x - 1 < 0) &&
            this.shipsBoard[coordinateY][x] !== 0
          ) {
            attackedShip?.hit(coordinateX, coordinateY);
          }
        }
        this.shipsBoard[coordinateY][coordinateX] = 3;
        resulOfAttack = 1;
      } else if (this.shipsBoard[coordinateY][coordinateX] == 2) {
        for (let y = coordinateY; y >= 0; y--) {
          const attackedShip: Ship | undefined = this.arrayOfShips.find(
            (someShip) => someShip.coordinateX == coordinateX && someShip.coordinateY == y
          );
          if (
            y - 1 >= 0 &&
            this.shipsBoard[y - 1][coordinateX] !== undefined &&
            this.shipsBoard[y][coordinateX] !== 0
          ) {
            attackedShip?.hit(coordinateX, coordinateY);
            if (attackedShip) console.log(attackedShip);
          } else if (
            (y - 1 < 0 || this.shipsBoard[y - 1][coordinateX] == undefined) &&
            this.shipsBoard[y][coordinateX] !== 0
          ) {
            attackedShip?.hit(coordinateX, coordinateY);
            if (attackedShip) console.log(attackedShip);
          }
        }
        this.shipsBoard[coordinateY][coordinateX] = 3;
        resulOfAttack = 1;
        //change this.arrayOfShips
      } else if (this.shipsBoard[coordinateY][coordinateX] == 3) {
        //if hit already hit ship and
        //change this.arrayOfShips
      } else if (this.shipsBoard[coordinateY][coordinateX] == 4) {
        //if already missed and
        //change this.arrayOfShips
      }

      return [this.shipsBoard, resulOfAttack];
    },
    checkShipsAlive(): boolean {
      return this.shipsBoard.flat().filter((element) => element == 1).length > 0;
    },
    shipsBoard: shipsBoard,
    reset(): void {
      arrayOfShips = [];
      shipsBoard = [];
    },
  };
}

function createShips(arrayOfShips: Ship[]): [Ship[], number[][]] {
  let shipsBoard: number[][] = [];

  shipsBoard = createShipsBoard(shipsBoard);

  for (let k = 4; k > 0; k--) {
    for (let i = k; i > 0; i--) {
      //creates all kinds of ships
      let result = 1;
      while (result) {
        const ship = Ships(i, setOrientation(), randomCoordinate(), randomCoordinate());
        [shipsBoard, result] = checkBorderCells(shipsBoard, ship);

        if (!result) arrayOfShips.push(ship);
      }
    }
  }

  return [arrayOfShips, shipsBoard];
}

function checkBorderCells(shipsBoard: number[][], ship: Ship): [number[][], number] {
  const initialBoard: number[][] = shipsBoard.map((arr) => arr.slice());

  for (let y = ship.coordinateY - 1; y <= ship.coordinateY + ship.height; y++) {
    for (let x = ship.coordinateX - 1; x <= ship.coordinateX + ship.width; x++) {
      if (x < 10 && y < 10 && x >= 0 && y >= 0) {
        if (shipsBoard[y][x] !== 0) return [initialBoard, 1];
      }
    }
  }

  if (ship.position === 'horizontal')
    for (let x = ship.coordinateX; x < ship.coordinateX + ship.length; x++) {
      if (x < 10) {
        shipsBoard[ship.coordinateY][x] = 1;
      } else {
        return [initialBoard, 1];
      }
    }

  if (ship.position === 'vertical')
    for (let y = ship.coordinateY; y < ship.coordinateY + ship.length; y++) {
      if (y < 10) {
        shipsBoard[y][ship.coordinateX] = 2;
      } else {
        return [initialBoard, 1];
      }
    }

  return [shipsBoard, 0];
}

function createShipsBoard(shipsBoard: number[][]): number[][] {
  shipsBoard = [];

  for (let i = 0; i < 10; i++) {
    shipsBoard[i] = new Array(10);
    for (let j = 0; j < 10; j++) {
      shipsBoard[i][j] = 0;
    }
  }
  return shipsBoard;
}

function randomCoordinate(): number {
  return Math.floor(Math.random() * 10);
}

function setOrientation(): string {
  return Math.floor(Math.random() * 2) == 1 ? 'horizontal' : 'vertical';
}

export { Gameboard, Ship, board, randomCoordinate, createShipsBoard };
