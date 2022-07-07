import { Ship } from '../src';
import { Gameboard } from '../src/Gameboard';

it('Do tests actually work?', () => {
  expect(true).toBe(true);
});

it('Does the Gameboard function return something?', () => {
  expect(Gameboard()).toBeDefined();
});

it('Does the Gameboard function return an object?', () => {
  expect(Gameboard()).toBeInstanceOf(Object);
});

it('Does the returned object have arrayOfShips property?', () => {
  expect(Gameboard()).toHaveProperty('arrayOfShips');
});

it('Is the arrayOfShips full of ships?', () => {
  expect(Gameboard().arrayOfShips.length).toBe(10);
});

it('Does the returned object have receiveAttack method?', () => {
  expect(Gameboard()).toHaveProperty('receiveAttack');
});

it('Does the Gameboard hit the ship?', () => {
  expect(Gameboard()).toHaveProperty('receiveAttack');
});

it('Does the Gameboard hit the ship?', () => {
  const ship: Ship = Gameboard().arrayOfShips[0];
  expect(ship.hit(ship.coordinateX, ship.coordinateY)).toEqual(expect.arrayContaining(['x']));
}); // this test was meant to work with static ships

// it('How correctly does the Gameboard hit the ship?', () => {
//   expect(Gameboard().receiveAttack(ship.coordinateX, ship.coordinateY)).toMatchObject({
//     sunk: true,
//     whereHit: ['x'],
//   });
// });

// it('Can player sink ships?', () => {
//   expect(Gameboard().receiveAttack(2, 2).sunk).toBe(true);
// });

it('Are there enough ship in the arrayOfShips?', () => {
  expect(Gameboard().arrayOfShips.length).toBe(10);
});

it('Are ships placed correctly inside the array?', () => {
  expect(Gameboard().arrayOfShips[5].length).toBe(3);
});

it('How many ships are there on the board?', () => {
  expect(
    Gameboard()
      .gameboardArray.flat()
      .filter((element) => element > 0).length
  ).toBe(20);
});

it('What is inside the arrayOfShips?', () => {
  expect(Gameboard().arrayOfShips).toBe(2);
});

it('What is inside the gameboardArray?', () => {
  expect(Gameboard().gameboardArray).toBe(20);
});
