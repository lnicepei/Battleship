/* eslint-disable  @typescript-eslint/no-non-null-assertion */
import {
  createHumanBoard,
  playerHitCoordinatesInPromise,
  resetBoards,
  showPopup,
  toggleMenu,
  updateComputerBoard,
  updateHumanBoard,
} from './DOMInteraction';
import { randomCoordinate } from './Gameboard';
import { createPlayer, Player } from './Player';
import './style.css';

let indexOfStartedGame = 0;
document.querySelector('.start')?.addEventListener('click', () => {
  indexOfStartedGame++;
  createGame();
});

let human: Player = createPlayer('human'),
  computer: Player = createPlayer('computer');
createGame();

function createGame(): void {
  document.querySelector('.shuffle')?.addEventListener('click', createGame);
  if (!indexOfStartedGame) {
    human = createPlayer('human');
    computer = createPlayer('computer');
    createHumanBoard(human.playersGameboard.shipsBoard);
  }
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
      if (!resultOfAttack) turn = 1;
    }
    activeGame =
      human.playersGameboard.checkShipsAlive() && computer.playersGameboard.checkShipsAlive();
  }

  if (human.playersGameboard.checkShipsAlive() == false) {
    showPopup('Computer won');
  } else if (computer.playersGameboard.checkShipsAlive() == false) {
    showPopup('Player won');
  }
}

function resetGame(): void {
  indexOfStartedGame = 0;

  toggleMenu();
  resetBoards();
  createGame();
}

export { resetGame };
