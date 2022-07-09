import { Ship } from '.';
import { Ships } from './Ships';

function Gameboard(): {
  arrayOfShips: Ship[];
  receiveAttack(coordinateX: number, coordinateY: number): Ship;
  shipsBoard: number[][];
} {
  let arrayOfShips: Ship[] = [],
    gameboardArray: number[][] = [];

  [arrayOfShips, gameboardArray] = createShips(arrayOfShips);
  
  return {
    arrayOfShips,
    receiveAttack(coordinateX: number, coordinateY: number) {
      const attackedShip = arrayOfShips.find((ship) => {
        if (
          ship.coordinateX <= coordinateX &&
          coordinateX < ship.coordinateX + ship.length &&
          ship.coordinateY == coordinateY
        )
          return true;
      }) as Ship;
      attackedShip.hit(coordinateX, coordinateY);
      return attackedShip;
    },
    shipsBoard: gameboardArray,
  };
}

function createShips(arrayOfShips: Ship[]): [Ship[], number[][]] {
  let shipsBoard: number[][] = [];

  for (let i = 0; i < 10; i++) {
    shipsBoard[i] = new Array(10);
    for (let j = 0; j < 10; j++) {
      shipsBoard[i][j] = 0;
    }
  }

  for (let k = 4; k > 0; k--) {
    for (let i = k; i > 0; i--) {
      //creates all kinds of ships
      let result = 1;
      while (result) {
        const ship = Ships(i, horizontalOrVertical(), randomCoordinate(), randomCoordinate());
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

function randomCoordinate(): number {
  return Math.floor(Math.random() * 10);
}

function horizontalOrVertical(): string {
  return Math.floor(Math.random() * 2) == 1 ? 'horizontal' : 'vertical';
}

export { Gameboard };
