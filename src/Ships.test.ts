import { Ships } from '../tests/Ships';

describe('Check if the function exists', () => {
  test('If the function actually returns something', () => {
    expect(Ships(23, true, false)).toMatchObject({
      length: 23,
      wasHit: true,
      sunk: false,
    });
  });
});
