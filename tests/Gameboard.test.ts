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

// describe('Does the Gameboard function return an object?', () => {
//     expect(Gameboard()).toContain(arrayOfShips);
// });
