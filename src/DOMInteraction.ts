import { board, Ship } from './Gameboard';

const cross = `<svg style="width:36px;height:36px" viewBox="0 0 24 24">
<path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
</svg>`;

const dot = `<svg style="width:36px;height:36px" viewBox="0 0 24 24">
<path fill="currentColor" d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" />
</svg>`;

/* eslint-disable  @typescript-eslint/no-non-null-assertion */
function createHumanBoard(shipsBoard: number[][]): void {
  const children = document.querySelector('.cells')?.children as HTMLCollectionOf<HTMLElement>;
  resetBoards();
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      if (shipsBoard[y][x] !== 0)
        if (children != null) children!.item(x + y * 10)!.style.backgroundColor = 'red';
    }
  }
}

function updateHumanBoard(shipsBoard: number[][]): void {
  const children = document.querySelector('.cells')?.children as HTMLCollectionOf<HTMLElement>;

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      if (shipsBoard[y][x] == 1 || shipsBoard[y][x] == 2)
        children!.item(x + y * 10)!.style.backgroundColor = 'red';
      if (shipsBoard[y][x] == 3) children!.item(x + y * 10)!.innerHTML = cross;
      if (shipsBoard[y][x] == 4) {
        children!.item(x + y * 10)!.innerHTML = dot;
        children!.item(x + y * 10)!.style.backgroundColor = '#04ECF0';
      }
    }
  }
}

function updateComputerBoard(shipsBoard: number[][]): void {
  const children = document.querySelector('.computer')?.children as HTMLCollectionOf<HTMLElement>;

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      if (shipsBoard[y][x] == 3) {
        children!.item(x + y * 10)!.innerHTML = cross;
        children!.item(x + y * 10)!.style.backgroundColor = 'red';
      }
      if (shipsBoard[y][x] == 4) {
        children!.item(x + y * 10)!.innerHTML = dot;
        children!.item(x + y * 10)!.style.backgroundColor = '#04ECF0';
      }
    }
  }
}

function playerHitCoordinatesInPromise(): Promise<number[]> {
  return new Promise((resolve) => {
    let hitX: number, hitY: number;
    document.querySelector('.computer')?.addEventListener('click', (e) => {
      const target = e.target as Element;
      if (target.className == 'cell') {
        const parent = target!.parentNode;
        const attackField = Array.prototype.indexOf.call(parent!.children, target);
        hitX = attackField % 10;
        hitY = Math.floor(attackField / 10);
        resolve([hitX, hitY]);
      }
    });
  });
}

function resetBoards(): void {
  const children1 = document.querySelector('.cells')?.children as HTMLCollectionOf<HTMLElement>;
  const children2 = document.querySelector('.computer')?.children as HTMLCollectionOf<HTMLElement>;
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      children1!.item(x + y * 10)!.innerHTML = '';
      children1!.item(x + y * 10)!.style.backgroundColor = 'cyan';
      children2!.item(x + y * 10)!.innerHTML = '';
      children2!.item(x + y * 10)!.style.backgroundColor = 'cyan';
    }
  }
  // document.querySelector('.computer')?.classList.toggle('invisible');
  // document.querySelector('.start')?.classList.toggle('invisible');
  // document.querySelector('.shuffle')?.classList.toggle('invisible');
}

function markSunkShip(attackedShip: Ship, board: board): void {
  for (
    let x = attackedShip.coordinateX - 1;
    x <= attackedShip.width + attackedShip.coordinateX;
    x++
  ) {
    for (
      let y = attackedShip.coordinateY - 1;
      y <= attackedShip.height + attackedShip.coordinateY;
      y++
    ) {
      if (x < 10 && y < 10 && x >= 0 && y >= 0) {
        if (board.shipsBoard[y][x] !== undefined && board.shipsBoard[y][x] == 0) {
          board.shipsBoard[y][x] = 4;
        }
      }
    }
  }

  if (board.name == 'computer') updateComputerBoard(board.shipsBoard);
}

document.querySelector('.start')?.addEventListener('click', () => {
  document.querySelector('.computer')?.classList.toggle('invisible');
  document.querySelector('.start')?.classList.toggle('invisible');
  document.querySelector('.shuffle')?.classList.toggle('invisible');
});
function startGame(): void {}

export {
  updateHumanBoard,
  updateComputerBoard,
  createHumanBoard,
  playerHitCoordinatesInPromise,
  resetBoards,
  markSunkShip,
  startGame,
};
