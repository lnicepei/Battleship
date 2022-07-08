import { Ship } from '.';
import { Ships } from './Ships';

function Gameboard(): {
  arrayOfShips: Ship[];
  receiveAttack(coordinateX: number, coordinateY: number): Ship;
  gameboardArray: number[][];
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
    gameboardArray,
  };
}

function createShips(arrayOfShips: Ship[]): [Ship[], number[][]] {
  let shipsBoard: number[][] = [[], [], [], [], [], [], [], [], [], []];
  let result = 1;

  for (let i = 0; i < 10; i++) {
    shipsBoard[i] = new Array(10);
    for (let j = 0; j < 10; j++) {
      shipsBoard[i][j] = 0;
    }
  }

  for (let k = 1; k <= 4; k++) {
    //creates ships
    for (let i = 1; i <= k; i++) {
      // it creates random coordinates and then calls checkFreeSpot
      result = 1;
      while (result) {
        let ship = Ships(i, horizontalOrVertical(), randomCoordinate(), randomCoordinate());

        [shipsBoard, result, ship] = findFreeSpot(shipsBoard, ship);
        // [shipsBoard, result, ship] = checkBorderCells(shipsBoard, ship);
        if (!result) arrayOfShips.push(ship);
      }
    }
  }
  return [arrayOfShips, shipsBoard];
}

function findFreeSpot(shipsBoard: number[][], ship: Ship): [number[][], number, Ship] {
  let result = 0;
  // const x = ship.coordinateX,
  //   y = ship.coordinateY;
  // switch (ship.length) {
  //   case 1:
  //     if (shipsBoard[x][y] !== 0) {
  //       result = 1;
  //     } else {
  //       ship.coordinateX = x;
  //       ship.coordinateY = y;
  //       ship.position === 'vertical' ? (shipsBoard[x][y] = 1) : (shipsBoard[x][y] = 2);
  //       result = 0;
  //     }
  //     break;
  //   case 2:
  //     if (
  //       ship.position === 'vertical' &&
  //       x + 1 < 10 &&
  //       shipsBoard[x][y] == 0 &&
  //       shipsBoard[x + 1][y] == 0
  //     ) {
  //       shipsBoard[x][y] = 1;
  //       shipsBoard[x + 1][y] = 1;
  //       result = 0;
  //     } else if (
  //       ship.position === 'horizontal' &&
  //       y + 1 < 10 &&
  //       shipsBoard[x][y] == 0 &&
  //       shipsBoard[x][y + 1] == 0
  //     ) {
  //       shipsBoard[x][y] = 2;
  //       shipsBoard[x][y + 1] = 2;
  //       result = 0;
  //     } else {
  //       result = 1;
  //     }
  //     break;
  //   case 3:
  //     if (
  //       ship.position === 'vertical' &&
  //       x + 2 < 10 &&
  //       shipsBoard[x][y] == 0 &&
  //       shipsBoard[x + 1][y] == 0 &&
  //       shipsBoard[x + 2][y] == 0
  //     ) {
  //       shipsBoard[x][y] = 1;
  //       shipsBoard[x + 1][y] = 1;
  //       shipsBoard[x + 2][y] = 1;
  //       result = 0;
  //     } else if (
  //       ship.position === 'horizontal' &&
  //       y + 2 < 10 &&
  //       shipsBoard[x][y] == 0 &&
  //       shipsBoard[x][y + 1] == 0 &&
  //       shipsBoard[x][y + 2] == 0
  //     ) {
  //       shipsBoard[x][y] = 2;
  //       shipsBoard[x][y + 1] = 2;
  //       shipsBoard[x][y + 2] = 2;
  //       result = 0;
  //     } else {
  //       result = 1;
  //     }
  //     break;
  //   case 4:
  //     if (
  //       ship.position === 'vertical' &&
  //       x + 3 < 10 &&
  //       shipsBoard[x][y] == 0 &&
  //       shipsBoard[x + 1][y] == 0 &&
  //       shipsBoard[x + 2][y] == 0 &&
  //       shipsBoard[x + 3][y] == 0
  //     ) {
  //       shipsBoard[x][y] = 1;
  //       shipsBoard[x + 1][y] = 1;
  //       shipsBoard[x + 2][y] = 1;
  //       shipsBoard[x + 3][y] = 1;
  //       result = 0;
  //     } else if (
  //       ship.position === 'horizontal' &&
  //       y + 3 < 10 &&
  //       shipsBoard[x][y] == 0 &&
  //       shipsBoard[x][y + 1] == 0 &&
  //       shipsBoard[x][y + 2] == 0 &&
  //       shipsBoard[x][y + 3] == 0
  //     ) {
  //       shipsBoard[x][y] = 2;
  //       shipsBoard[x][y + 1] = 2;
  //       shipsBoard[x][y + 2] = 2;
  //       shipsBoard[x][y + 3] = 2;
  //       result = 0;
  //     } else {
  //       result = 1;
  //     }
  //     break;
  //   default:
  //     break;
  // }

  [shipsBoard, result, ship] = checkBorderCells(shipsBoard, ship);

  return [shipsBoard, result, ship];
}

function checkBorderCells(shipsBoard: number[][], ship: Ship): [number[][], number, Ship] {
  // for (let i = 0; i < shipLength; i++) {
  //   if (shipsBoard[coordX + i][coordY]) {
  //     if (shipsBoard[coordX + i][coordY] == 1 || shipsBoard[coordX + i][coordY] == 2) return false;
  //   } else {
  //     return false;
  //   }
  // }
  // if()
  if (ship.position === 'horizontal') {
    const y = ship.coordinateY; //4
    // let counter = 0;
    for (let x = ship.coordinateX; x < ship.coordinateX + ship.length; x++) {
      if (shipsBoard[x - 1][y - 1] && shipsBoard[x - 1][y + 1]) {
        if (
          shipsBoard[x - 1][y - 1] !== 0 &&
          shipsBoard[x - 1][y + 1] !== 0 &&
          y + 1 >= 10 &&
          x >= 10
        ) {
          return [shipsBoard, 0, ship];
        } else {
          shipsBoard[x][y] = 2;
        }
      } else {
        return [shipsBoard, 1, ship];
      }
    }
    return [shipsBoard, 0, ship];
  }
  if (ship.position === 'vertical') {
    const x = ship.coordinateX;
    for (let y = ship.coordinateY - 1; y < ship.coordinateY + ship.length; y++) {
      if (shipsBoard[x - 1][y] && shipsBoard[x + 1][y]) {
        if (shipsBoard[x - 1][y] !== 0 && shipsBoard[x + 1][y] !== 0 && y >= 10 && x + 1 >= 10) {
          return [shipsBoard, 1, ship];
        } else {
          shipsBoard[x][y] = 1;
        }
      } else {
        return [shipsBoard, 1, ship];
      }
    }
    return [shipsBoard, 0, ship];
  }
  return [shipsBoard, 1, ship];
}

function randomCoordinate(): number {
  return 1 + Math.floor(Math.random() * 9);
}

function horizontalOrVertical(): string {
  return Math.floor(Math.random() * 2) == 1 ? 'horizontal' : 'vertical';
}

export { Gameboard };
