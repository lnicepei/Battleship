import { Ship } from '.';
import { Ships } from './Ships';

function Gameboard(): {
  arrayOfShips: Ship[];
  receiveAttack(coordinateX: number, coordinateY: number): Ship;
  gameboardArray: number[][];
} {
  let arrayOfShips: Ship[] = [];
  let gameboardArray: number[][] = [];
  [arrayOfShips, gameboardArray] = placeShips(arrayOfShips);
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

function placeShips(arrayOfShips: Ship[]): [Ship[], number[][]] {
  const shipsBoard: number[][] = [[], [], [], [], [], [], [], [], [], []];
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
      // arrayOfShips.push(Ships(i, randomCoord inates(), randomCoordinates()));
      // arrayOfShips.push(Ships(4, randomCoordinates(), randomCoordinates()));
      const randomX: number = randomCoordinates();
      const randomY: number = randomCoordinates();
      const ship = Ships(i, randomX, randomY);

      arrayOfShips.push(ship);

      for (let y = 0; y < 10; y++)
        for (let x = 0; x < 10; x++) {
          if (ship.length + x <= 10) shipsBoard[x][y] = 1;
          // shipsBoard[j][randomY + 1] = 1;
        }
    }
  }

  return [arrayOfShips, shipsBoard];
}

function randomCoordinates(): number {
  return 1 + Math.floor(Math.random() * 9);
  // return 2;
}

export { Gameboard };
