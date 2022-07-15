import { finishHim, Ship } from '../src/Gameboard';
import { Gameboard } from '../src/Gameboard';
const result = Gameboard('expample');

describe('Test the validity of Gameboard factory', () => {
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
});

describe('Check what is inside Gameboard objects', () => {
  it('Does the ship recieve attack?', () => {
    const ship: Ship = result.arrayOfShips[0];
    expect(ship.hit(ship.coordinateX, ship.coordinateY)).toMatchObject({
      whereHit: ['x', '', '', ''],
    });
  });

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
});

describe('Check, the work AI', () => {
  const someGameboard = Gameboard('Example');
  const oneCellShip = someGameboard.arrayOfShips[9];
  console.log(someGameboard.arrayOfShips[9]);

  it('If ship length was 1', () => {
    // expect(finishHim(oneCellShip.coordinateX, oneCellShip.coordinateY, someGameboard)).toBe();
  });
});
