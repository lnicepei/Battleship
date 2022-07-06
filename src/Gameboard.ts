import { Ship } from '.';
import { Ships } from './Ships';

function Gameboard(): {
  arrayOfShips: Ship[];
  receiveAttack(coordinateX: number, coordinateY: number): Ship;
  gameboardArray: number[][];
} {
  let arrayOfShips: Ship[] = [];
  let gameboardArray: number[][] = [];
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
    gameboardArray,
  };
}

function createShips(arrayOfShips: Ship[]): [Ship[], number[][]] {
  let shipsBoard: number[][] = [[], [], [], [], [], [], [], [], [], []];
  const cols = 10,
    rows = 10;

  for (let i = 0; i < cols; i++) {
    shipsBoard[i] = new Array(rows);
    for (let j = 0; j < rows; j++) {
      shipsBoard[i][j] = 0;
    }
  }

  for (let k = 1; k <= 4; k++) {
    for (let i = 1; i <= k; i++) {
      const ship = Ships(i, 1, 1);

      shipsBoard = checkConsequtivePlace(shipsBoard, ship);

      arrayOfShips.push(ship);
    }
  }

  return [arrayOfShips, shipsBoard];
}

function checkConsequtivePlace(shipsBoard: number[][], ship: Ship): number[][] {
  // let counter = 0;
  // for (let k = x; k <= 10 - (ship.coordinateX + ship.length + x); k++) {
  //   if (shipsBoard[k][y] !== 1) counter++;
  //   if (counter == ship.length) return true;
  // }
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      switch (ship.length) {
        case 1:
          if (shipsBoard[x][y] !== 1) {
            shipsBoard[x][y] = 1;
            shipsBoard[x + 1][y] = 0;
            ship.coordinateX = x;
            ship.coordinateY = y;
            return shipsBoard;
          }
          break;
        case 2:
          if (shipsBoard[x][y] !== 1 && shipsBoard[x + 1][y] !== 1) {
            shipsBoard[x][y] = 1;
            shipsBoard[x + 1][y] = 1;
            shipsBoard[x + 2][y] = 0;
            ship.coordinateX = x;
            ship.coordinateY = y;
            return shipsBoard;
          }
          break;
        case 3:
          if (x + 2 < 10) {
            if (
              shipsBoard[x][y] !== 1 &&
              shipsBoard[x + 1][y] !== 1 &&
              shipsBoard[x + 2][y] !== 1
            ) {
              shipsBoard[x][y] = 1;
              shipsBoard[x + 1][y] = 1;
              shipsBoard[x + 2][y] = 1;
              shipsBoard[x + 3][y] = 0;
              ship.coordinateX = x;
              ship.coordinateY = y;
              return shipsBoard;
            }
          }
          break;
        case 4:
          if (x + 3 < 10) {
            if (
              shipsBoard[x][y] !== 1 &&
              shipsBoard[x + 1][y] !== 1 &&
              shipsBoard[x + 2][y] !== 1 &&
              shipsBoard[x + 3][y] !== 1
            ) {
              shipsBoard[x][y] = 1;
              shipsBoard[x + 1][y] = 1;
              shipsBoard[x + 2][y] = 1;
              shipsBoard[x + 3][y] = 1;
              shipsBoard[x + 4][y] = 0;
              ship.coordinateX = x;
              ship.coordinateY = y;
              return shipsBoard;
            }
          }
          break;
        default:
          return shipsBoard;
      }
    }
  }
  return shipsBoard;
}

function randomCoordinates(): number {
  return 1 + Math.floor(Math.random() * 9);
  // return 2;
}

export { Gameboard };
