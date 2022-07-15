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

let indexOfStartedGame = 0;
document.querySelector('.shuffle')?.addEventListener('click', createGame);
document.querySelector('.start')?.addEventListener('click', () => {
  indexOfStartedGame++;
  createGame();
});

createGame();

function createGame(): void {
  // resetBoards();
  const human = createPlayer('Dmitry');
  const computer = createPlayer('computer');
  createHumanBoard(human.playersGameboard.shipsBoard);
  if (indexOfStartedGame) {
    makeMovesInTurns(human, computer);
  }
}

async function makeMovesInTurns(human: Player, computer: Player): Promise<void> {
  let activeGame = true;
  let turn = 2;

  while (activeGame) {
    if (turn == 1) {
      const attackX = randomCoordinate();
      const attackY = randomCoordinate();
      const [humansBoard, resultOfAttack] = human.playersGameboard.receiveAttack(attackX, attackY);
      setTimeout(() => {
        updateHumanBoard(humansBoard);
      }, 50);
      if (!resultOfAttack) turn = 2;
    } else {
      const coordinates = await playerHitCoordinatesInPromise();
      const [computersBoard, resultOfAttack] = computer.playersGameboard.receiveAttack(
        coordinates[0],
        coordinates[1]
      );
      updateComputerBoard(computersBoard);
      // updateComputerBoard(computer.playersGameboard.shipsBoard);
      if (!resultOfAttack) turn = 1;
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

  indexOfStartedGame = 0;

  human.reset();
  computer.reset();

  document.querySelector('.computer')?.classList.toggle('invisible');
  document.querySelector('.start')?.classList.toggle('invisible');
  document.querySelector('.shuffle')?.classList.toggle('invisible');

  resetBoards();
  createGame();
}
