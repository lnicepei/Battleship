import { human } from '../src/index';

it('Check if tests actually work', () => {
  expect(true).toBe(true);
});

it('check if players can attack one another', () => {
  expect(
    human.playersGameboard
      .receiveAttack(1, 2)
      .flat()
      .filter((element: number) => element > 2).length > 0
  ).toBe(true);
});
