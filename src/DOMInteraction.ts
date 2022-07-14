/* eslint-disable  @typescript-eslint/no-non-null-assertion */
function createHumanBoard(shipsBoard: number[][]): void {
  const children = document.querySelector('.cells')?.children as HTMLCollectionOf<HTMLElement>;

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
      if (shipsBoard[y][x] == 3) children!.item(x + y * 10)!.style.backgroundColor = 'pink';
      if (shipsBoard[y][x] == 4) children!.item(x + y * 10)!.style.backgroundColor = 'grey';
    }
  }
}

function updateComputerBoard(shipsBoard: number[][]): void {
  const children = document.querySelector('.computer')?.children as HTMLCollectionOf<HTMLElement>;

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      if (shipsBoard[y][x] == 3) children!.item(x + y * 10)!.style.backgroundColor = 'pink';
      if (shipsBoard[y][x] == 4) children!.item(x + y * 10)!.style.backgroundColor = 'grey';
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
      children1!.item(x + y * 10)!.style.backgroundColor = 'black';
      children2!.item(x + y * 10)!.style.backgroundColor = 'black';
    }
  }
}

export {
  updateHumanBoard,
  updateComputerBoard,
  createHumanBoard,
  playerHitCoordinatesInPromise,
  resetBoards,
};
