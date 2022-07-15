import { createPlayer } from '../src/Player';

describe('Check the work of Player factory function', () => {
  const somePlayer = createPlayer('Dude');

  it('Check if tests actually work', () => {
    expect(true).toBe(true);
  });

  it('Check the name to be valid', () => {
    expect(somePlayer.name).toBe('Dude');
  });

  it('Check the name of player`s board', () => {
    expect(somePlayer.playersGameboard.name).toBe('Dude');
  });

  it('Do players have reset method', () => {
    somePlayer.reset();
    expect(somePlayer.name).toBe('');
  });

  it('Is players` gameboard populated with ships?', () => {
    expect(
      somePlayer.playersGameboard.shipsBoard.flat().filter((element) => element > 0).length > 0
    ).toBe(true);
  });

  it('Is players` movesboard empty?', () => {
    expect(somePlayer.movesBoard.flat().filter((element) => element > 0).length == 0).toBe(true);
  });
});
