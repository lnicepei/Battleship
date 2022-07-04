import { Ship } from '.';
import { Ships } from './Ships';

function Gameboard(): {
  arrayOfShips: Ship[];
  receiveAttack(coordinateX: number, coordinateY: number): void;
} {
  const arrayOfShips: Ship[] = [];

  for (let i = 4; i > 0; i--) {
    for (let k = 0; k < i; k++) {
      arrayOfShips.push(Ships(i, randomCoordinates(), randomCoordinates()));
    }
  }

  return {
    arrayOfShips,
    receiveAttack(coordinateX: number, coordinateY: number) {
      arrayOfShips.find(
        (ship) => ship.coordinateX == coordinateX && ship.coordinateY == coordinateY
      );
    },
  };
}

function randomCoordinates(): number {
  return Math.floor(Math.random() * 9);
}

export { Gameboard };
