import { createHumanBoard, updateComputerBoard, updateHumanBoard } from './DOMInteraction';
import { randomCoordinate } from './Gameboard';
import { createPlayer } from './Player';
import './style.css';

// console.log('hello');

let turn = 1;
let activeGame = 1;

const human = createPlayer('Dmitry');
const robot = createPlayer('robot');
createHumanBoard(human.playersGameboard.shipsBoard);

// playerHit();

document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  // const children = document.querySelector('.player')?.children as HTMLCollection;

  // if (e.target?.className == 'cell'){
  //   for (const child of children) {
  //     // if(children?.item(child) == e.target) console.log(1);
  //     console.log(child);
  //   }
  // }

  if (target.className) console.log(target.className);
});

waitForMove();

async function waitForMove(): Promise<void> {
  while (activeGame !== 5) {
    if (turn == 1) {
      const humansBoard = await human.playersGameboard.receiveAttack(1, 3);
      updateHumanBoard(humansBoard);
      turn = 2;
    } else {
      const robotsBoard = await robot.playersGameboard.receiveAttack(
        randomCoordinate(),
        randomCoordinate()
      );
      console.log(robotsBoard);
      updateComputerBoard(robotsBoard);
      updateComputerBoard(robot.playersGameboard.shipsBoard);
      turn = 1;
    }
    activeGame++;
  }
}

// function playerHit(): Promise<number> {
//   let field = 0;
//   document.querySelector('.player')?.addEventListener('click', (e) => {
//     e.target?.querySelector('.cell').style.backgroundColor = 'red';
//   });
//   return new Promise((resolve) => {
//     resolve();
//   });
// }

// let result: boolean = robot.makeMove(
//   randomCoordinate(),
//   randomCoordinate(),
//   human.movesBoard,
//   human.playersGameboard
// );

export { human };
