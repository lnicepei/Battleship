/* eslint-disable  @typescript-eslint/no-non-null-assertion */
function createHumanBoard(shipsBoard: number[][]): void {
  const children = document.querySelector('.human')?.children as HTMLCollectionOf<HTMLElement>;

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      if (shipsBoard[y][x] !== 0)
        if (children != null) children!.item(x + y * 10)!.style.backgroundColor = 'red';
    }
  }
}

function updateHumanBoard(shipsBoard: number[][]): void {
  // const humanGameboardDiv = document.querySelector('.human') ?? false;
  const children = document.querySelector('.human')?.children as HTMLCollectionOf<HTMLElement>;

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
      // if (shipsBoard[y][x] == 1 || shipsBoard[y][x] == 2)
      //   children?.item(x + y * 10).style.backgroundColor = 'red';
      if (shipsBoard[y][x] == 3) children!.item(x + y * 10)!.style.backgroundColor = 'pink';
      if (shipsBoard[y][x] == 4) children!.item(x + y * 10)!.style.backgroundColor = 'grey';
    }
  }
}

export { updateHumanBoard, updateComputerBoard, createHumanBoard };