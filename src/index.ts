/* eslint-disable  @typescript-eslint/no-non-null-assertion */
import {
  createHumanBoard,
  playerHitCoordinatesInPromise,
  resetBoards,
  updateComputerBoard,
  updateHumanBoard,
} from './DOMInteraction';
import { randomCoordinate } from './Gameboard';
import { createPlayer, Player } from './Player';
import './style.css';

createGame();

function createGame(): void {
  const human = createPlayer('Dmitry');
  const computer = createPlayer('computer');
  createHumanBoard(human.playersGameboard.shipsBoard);
  makeMovesInTurns(human, computer);
}

async function makeMovesInTurns(human: Player, computer: Player): Promise<void> {
  let activeGame =
    human.playersGameboard.checkShipsAlive() && computer.playersGameboard.checkShipsAlive();
  let turn = 1;

  while (activeGame) {
    if (turn == 1) {
      const [humansBoard, resulOfAttack] = human.playersGameboard.receiveAttack(
        randomCoordinate(),
        randomCoordinate()
      );
      setTimeout(() => {
        updateHumanBoard(humansBoard);
      }, 50);
      if (resulOfAttack) turn = 2;
    } else {
      const coordinates = await playerHitCoordinatesInPromise();
      const [computersBoard, resulOfAttack] = computer.playersGameboard.receiveAttack(
        coordinates[0],
        coordinates[1]
      );
      updateComputerBoard(computersBoard);
      updateComputerBoard(computer.playersGameboard.shipsBoard);
      if (resulOfAttack) turn = 1;
    }
    activeGame =
      human.playersGameboard.checkShipsAlive() && computer.playersGameboard.checkShipsAlive();
  }

  if (human.playersGameboard.checkShipsAlive() == false) {
    alert('computer won');
  } else {
    alert('player won');
  }

  resetGame(human, computer);
}

function resetGame(human: Player, computer: Player): void {
  human.playersGameboard.reset();
  computer.playersGameboard.reset();

  human.reset();
  computer.reset();

  resetBoards();
  createGame();
}
