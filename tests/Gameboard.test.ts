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

// it('Does the Gameboard hit the ship?', () => {
//   expect(Gameboard().receiveAttack(2, 2).whereHit).toEqual(expect.arrayContaining(['x']));
// });// this test was meant to work with static ships

// it('How correctly does the Gameboard hit the ship?', () => {
//   expect(Gameboard().receiveAttack(2, 2)).toMatchObject({
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

it('What is inside the gameboardArray?', () => {
  expect(Gameboard().gameboardArray).toBe(3);
});

it('What is inside the arrayOfShips?', () => {
  expect(Gameboard().arrayOfShips).toBe(3);
});