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
  console.table(gameboardArray);
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
  let shipsBoard: number[][] = [];

  for (let i = 0; i < 10; i++) {
    shipsBoard[i] = new Array(10);
    for (let j = 0; j < 10; j++) {
      shipsBoard[i][j] = 0;
    }
  }

  for (let k = 1; k <= 4; k++) {
    for (let i = 1; i <= k; i++) {
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
  if (ship.position === 'horizontal') {
    for (let y = ship.coordinateY - 1; y <= ship.coordinateY + 1; y++) {
      for (let x = ship.coordinateX - 1; x <= ship.coordinateX + ship.length; x++) {
        if (x < 10 && y < 10 && x >= 0 && y >= 0) {
          if (shipsBoard[y][x] !== 0) return [initialBoard, 1];
        }
      }
    }
  }

  for (let x = ship.coordinateX; x < ship.coordinateX + ship.length; x++) {
    shipsBoard[ship.coordinateY][x] = 1;
  }
  //   for (let x = ship.coordinateX; x < ship.coordinateX + ship.length; x++) {
  //     if (
  //       y - 1 >= 0 &&
  //       y + 1 < 10 &&
  //       x - 1 >= 0 &&
  //       x - 1 < 10 &&
  //       x >= 0 &&
  //       x < 10 &&
  //       y >= 0 &&
  //       y < 10 &&
  //       ship.coordinateX + ship.length < 10 &&
  //       ship.coordinateX - 1 >= 0
  //     ) {
  //       if (
  //         shipsBoard[y - 1][x - 1] == 0 &&
  //         shipsBoard[y + 1][x - 1] == 0 &&
  //         shipsBoard[y][ship.coordinateX - 1] == 0 &&
  //         shipsBoard[y][ship.coordinateX + ship.length] == 0 &&
  //         shipsBoard[y][x] == 0
  //       ) {
  //         shipsBoard[y][x] = 1;
  //       } else {
  //         return [initialBoard, 1];
  //       }
  //     } else {
  //       return [initialBoard, 1];
  //     }
  //   }
  // }

  // if (ship.position === 'vertical') {
  //   const x = ship.coordinateX;
  //   const initialBoard: number[][] = shipsBoard.map((arr) => arr.slice());
  //   for (let y = ship.coordinateY; y < ship.coordinateY + ship.length; y++) {
  //     if (
  //       y - 1 > 0 &&
  //       y - 1 < 10 &&
  //       x - 1 > 0 &&
  //       x + 1 < 10 &&
  //       ship.coordinateY + ship.length < 10 &&
  //       ship.coordinateY - 1 > 0
  //     ) {
  //       if (
  //         shipsBoard[y - 1][x - 1] == 0 &&
  //         shipsBoard[y - 1][x + 1] == 0 &&
  //         shipsBoard[ship.coordinateY - 1][ship.coordinateX] == 0 &&
  //         shipsBoard[ship.coordinateY + ship.length][ship.coordinateX] == 0
  //       ) {
  //         shipsBoard[y][x] = 2;
  //       } else {
  //         return [initialBoard, 1];
  //       }
  //     } else {
  //       return [initialBoard, 1];
  //     }
  //   }
  // }

  return [shipsBoard, 0];
}

function randomCoordinate(): number {
  return 1 + Math.floor(Math.random() * 9);
}

function horizontalOrVertical(): string {
  // return Math.floor(Math.random() * 2) == 1 ? 'horizontal' : 'vertical';
  return 'horizontal';
}

export { Gameboard };
