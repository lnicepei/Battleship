import { Ship } from '../src';
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

it('Does the Gameboard hit the ship?', () => {
  const ship: Ship = result.arrayOfShips[0];
  expect(ship.hit(ship.coordinateX, ship.coordinateY)).toEqual(expect.arrayContaining(['x']));
}); // this test was meant to work with static ships

// it('How correctly does the Gameboard hit the ship?', () => {
//   expect(result.receiveAttack(ship.coordinateX, ship.coordinateY)).toMatchObject({
//     sunk: true,
//     whereHit: ['x'],
//   });
// });

// it('Can player sink ships?', () => {
//   expect(result.receiveAttack(2, 2).sunk).toBe(true);
// });

it('Are there enough ship in the arrayOfShips?', () => {
  expect(result.arrayOfShips.length).toBe(10);
});

it('Are ships placed correctly inside the array?', () => {
  expect(result.arrayOfShips[5].length).toBe(3);
});

it('What is inside the arrayOfShips?', () => {
  expect(result.arrayOfShips).toBe(2);
});

it('What is inside the gameboardArray?', () => {
  expect(result.gameboardArray).toBe(20);
});

it('How many ships are there on the board?', () => {
  expect(result.gameboardArray.flat().filter((element) => element > 0).length).toBe(20);
});
