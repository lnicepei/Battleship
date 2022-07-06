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
  let result = 1;

  for (let i = 0; i < cols; i++) {
    shipsBoard[i] = new Array(rows);
    for (let j = 0; j < rows; j++) {
      shipsBoard[i][j] = 0;
    }
  }

  for (let k = 1; k <= 4; k++) {
    //creates ships and does NOT position them
    for (let i = 1; i <= k; i++) {
      // it creates random coordinates and then calls checkFreeSpot
      result = 1;
      while (result) {
        const coordinateX = randomCoordinates();
        const coordinateY = randomCoordinates();
        const position = horizontalOrVertical();
        const ship = Ships(i, coordinateX, coordinateY);

        [shipsBoard, result] = checkFreeSpot(shipsBoard, ship, coordinateX, coordinateY, position);
        if (!result) arrayOfShips.push(ship);
      }
    }
  }
  return [arrayOfShips, shipsBoard];
}

function checkFreeSpot(
  shipsBoard: number[][],
  ship: Ship,
  x: number,
  y: number,
  position: string
): [number[][], number] {
  let result = 0;

  switch (ship.length) {
    case 1:
      if (shipsBoard[x][y] == 1) {
        result = 1;
      } else {
        ship.coordinateX = x;
        ship.coordinateY = y;
        shipsBoard[x][y] = 1;
        result = 0;
      }
      break;
    case 2:
      if (x + 1 < 10 && y + 1 < 10) {
        if (shipsBoard[x][y] == 1 || shipsBoard[x + 1][y] == 1) {
          result = 1;
        } else {
          ship.coordinateX = x;
          ship.coordinateY = y;
          shipsBoard[x][y] = 1;
          position === 'vertical' ? (shipsBoard[x + 1][y] = 1) : (shipsBoard[x][y + 1] = 1);
          result = 0;
        }
      } else {
        result = 1;
      }
      break;
    case 3:
      if (x + 2 < 10 && y + 2 < 10) {
        if (shipsBoard[x][y] == 1 || shipsBoard[x + 1][y] == 1 || shipsBoard[x + 2][y] == 1) {
          result = 1;
        } else {
          ship.coordinateX = x;
          ship.coordinateY = y;
          shipsBoard[x][y] = 1;
          position === 'vertical' ? (shipsBoard[x + 1][y] = 1) : (shipsBoard[x][y + 1] = 1);
          position === 'vertical' ? (shipsBoard[x + 2][y] = 1) : (shipsBoard[x][y + 2] = 1);
          result = 0;
        }
      } else {
        result = 1;
      }
      break;
    case 4:
      if (x + 3 < 10 && y + 3 < 10) {
        if (
          shipsBoard[x][y] == 1 ||
          shipsBoard[x + 1][y] == 1 ||
          shipsBoard[x + 2][y] == 1 ||
          shipsBoard[x + 3][y] == 1
        ) {
          result = 1;
        } else {
          ship.coordinateX = x;
          ship.coordinateY = y;
          shipsBoard[x][y] = 1;
          position === 'vertical' ? (shipsBoard[x + 1][y] = 1) : (shipsBoard[x][y + 1] = 1);
          position === 'vertical' ? (shipsBoard[x + 2][y] = 1) : (shipsBoard[x][y + 2] = 1);
          position === 'vertical' ? (shipsBoard[x + 3][y] = 1) : (shipsBoard[x][y + 3] = 1);
          result = 0;
        }
      } else {
        result = 1;
      }
      break;
    default:
      break;
  }

  // if (result == 0) {
  //   for (let index = x; index < ship.length + x; index++) {
  //     // check (ship.length) next fields
  //     shipsBoard[index][y] = 1;
  //   }
  // }
  return [shipsBoard, result];
}

function randomCoordinates(): number {
  return 1 + Math.floor(Math.random() * 9);
  // return 2;
}

function horizontalOrVertical(): string { //works for placing either horizontally or vertitally
  return 'vertical';
  // return (Math.random() * 100) % 2 == 1 ? 'horizontal' : 'vertical';
}

export { Gameboard };
