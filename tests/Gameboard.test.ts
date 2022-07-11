import { Ship } from '../src/Gameboard';
import { Gameboard } from '../src/Gameboard';
const result = Gameboard();

it('Do tests actually work?', () => {
  expect(true).toBe(true);
});

it('Does the Gameboard function return something?', () => {
  expect(result).toBeDefined();
});

it('Does the Gameboard function return an object?', () => {
  expect(result).toBeInstanceOf(Object);
});

it('Does the returned object have arrayOfShips property?', () => {
  expect(result).toHaveProperty('arrayOfShips');
});

it('Is the arrayOfShips full of ships?', () => {
  expect(result.arrayOfShips.length).toBe(10);
});

it('Does the returned object have receiveAttack method?', () => {
  expect(result).toHaveProperty('receiveAttack');
});

it('Does the Gameboard hit the ship?', () => {
  expect(result).toHaveProperty('receiveAttack');
});

// it('Does the ship recieve attack?', () => {
//   const ship: Ship = result.arrayOfShips[0];
//   expect(ship.hit(ship.coordinateX, ship.coordinateY)).toEqual(expect.arrayContaining(['x']));
// });

it('Are there enough ship in the arrayOfShips?', () => {
  expect(result.arrayOfShips.length).toBe(10);
});

it('Are ships placed correctly inside the array?', () => {
  expect(result.arrayOfShips[0].length).toBe(4);
});

it('What is the length of shipsBoard?', () => {
  expect(result.shipsBoard.flat().length).toBe(100);
});

it('How many ships are there on the board?', () => {
  expect(result.shipsBoard.flat().filter((element) => element > 0).length).toBe(20);
});

it('Does the gameboard hit the ship via receive attack?', () => {
  const ship: Ship = result.arrayOfShips[0];

  expect(
    result
      .receiveAttack(ship.coordinateX, ship.coordinateY)
      .flat()
      .filter((element) => element > 2).length
  ).toBe(1);
});

it('Does the gameboard record missed shots?', () => {
  result.receiveAttack(1, 0);

  expect(result.shipsBoard[0][1]).toBe(4);
});

it('What does the arrayOfShips look like?', () => {
  expect(result.arrayOfShips).toBe(4);
});
