/* eslint-disable  @typescript-eslint/no-non-null-assertion */
import {
  createHumanBoard,
  playerHitCoordinatesInPromise,
  resetBoards,
  updateComputerBoard,
  updateHumanBoard,
} from './DOMInteraction';
import { finishHim, randomCoordinate } from './Gameboard';
import { createPlayer, Player } from './Player';
import './style.css';

// document.querySelector('.human__shuffle')?.addEventListener('click', createGame);
createGame();

function createGame(): void {
  const human = createPlayer('Dmitry');
  const computer = createPlayer('computer');
  createHumanBoard(human.playersGameboard.shipsBoard);
  makeMovesInTurns(human, computer);
}

async function makeMovesInTurns(human: Player, computer: Player): Promise<void> {
  let activeGame = true;
  let turn = 2;
  let consecutiveMove = false;
  let attackX = 0,
    attackY = 0;

  while (activeGame) {
    if (turn == 1) {
      if (!consecutiveMove) {
        attackX = randomCoordinate();
        attackY = randomCoordinate();
      }
      const [humansBoard, resultOfAttack] = human.playersGameboard.receiveAttack(attackX, attackY);
      setTimeout(() => {
        updateHumanBoard(humansBoard);
      }, 50);
      if (!resultOfAttack) {
        turn = 2;
        continue;
      }
      // } else if (resultOfAttack && !consecutiveMove) {
      //   consecutiveMove = true;
      //   // finishHim(attackX, attackY, human.playersGameboard);
      // } else if (resultOfAttack && consecutiveMove) {
      //   // finishHim(attackX, attackY, human.playersGameboard);
      // }
    } else {
      const coordinates = await playerHitCoordinatesInPromise();
      const [computersBoard, resulOfAttack] = computer.playersGameboard.receiveAttack(
        coordinates[0],
        coordinates[1]
      );
      updateComputerBoard(computersBoard);
      if (!resulOfAttack) turn = 1;
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
