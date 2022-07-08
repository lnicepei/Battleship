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

        // [shipsBoard, result, ship] = findFreeSpot(shipsBoard, ship);
        [shipsBoard, result, ship] = checkBorderCells(shipsBoard, ship);
        if (!result) arrayOfShips.push(ship);
      }
    }
  }
  return [arrayOfShips, shipsBoard];
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
  let counter = 0;
  if (ship.position === 'horizontal') {
    const y = ship.coordinateY; //4
    for (let x = ship.coordinateX; x < ship.coordinateX + ship.length; x++) {
      if (x - 1 < 10 && y + 1 < 10 && x < 10 && y < 10) {
        if (shipsBoard[x - 1][y - 1] !== 0 && shipsBoard[x - 1][y + 1] !== 0) {
          // return [shipsBoard, 0, ship];
          counter++;
        } else {
          shipsBoard[x][y] = 2;
        }
      } else {
        counter++;
        // return [shipsBoard, 1, ship];
      }
    }
    // return [shipsBoard, 0, ship];
    // counter++;
  }
  if (ship.position === 'vertical') {
    const x = ship.coordinateX;
    for (let y = ship.coordinateY; y < ship.coordinateY + ship.length; y++) {
      if (x - 1 < 10 && y - 1 < 10 && x < 10 && y < 10 && x + 1 < 10) {
        if (shipsBoard[x - 1][y - 1] !== 0 && shipsBoard[x + 1][y - 1] !== 0) {
          // return [shipsBoard, 1, ship];
          counter++;
        } else {
          shipsBoard[x][y] = 1;
        }
      } else {
        // return [shipsBoard, 1, ship];
        counter++;
      }
    }
    // return [shipsBoard, 0, ship];
    // counter++;
  }

  return counter ? [shipsBoard, 1, ship] : [shipsBoard, 0, ship];
}

function randomCoordinate(): number {
  return 1 + Math.floor(Math.random() * 9);
}

function horizontalOrVertical(): string {
  return Math.floor(Math.random() * 2) == 1 ? 'horizontal' : 'vertical';
}

export { Gameboard };
