import { randomCoordinate } from './Gameboard';
import { createPlayer } from './Player';
import './style.css';

const human = createPlayer('Dmitry');
const robot = createPlayer('robot');

let result: boolean = robot.makeMove(
  randomCoordinate(),
  randomCoordinate(),
  human.movesBoard,
  human.playersGameboard
);

export { human };
