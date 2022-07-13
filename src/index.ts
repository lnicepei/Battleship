import { createHumanBoard, updateComputerBoard, updateHumanBoard } from './DOMInteraction';
import { randomCoordinate } from './Gameboard';
import { createPlayer } from './Player';
import './style.css';
/* eslint-disable  @typescript-eslint/no-non-null-assertion */

// console.log('hello');

let turn = 1;

const human = createPlayer('Dmitry');
const robot = createPlayer('robot');
createHumanBoard(human.playersGameboard.shipsBoard);
const activeGame =
  human.playersGameboard.checkShipsAlive() && robot.playersGameboard.checkShipsAlive();

// playerHit();

// document.addEventListener('click', (e) => {
//   const target = e.target as HTMLElement;
//   // const children = document.querySelector('.player')?.children as HTMLCollection;

//   // if (e.target?.className == 'cell'){
//   //   for (const child of children) {
//   //     // if(children?.item(child) == e.target) console.log(1);
//   //     console.log(child);
//   //   }
//   // }

//   // if (target.className) console.log(target.className);
// });

waitForMove();

async function waitForMove(): Promise<void> {
  // document.body.addEventListener('click', playerHit);
  while (activeGame) {
    if (turn == 1) {
      // const [hitX, hitY] = await playerHit();
      const humansBoard = human.playersGameboard.receiveAttack(
        randomCoordinate(),
        randomCoordinate()
      );
      setTimeout(() => {
        updateHumanBoard(humansBoard);
      }, 50);
      turn = 2;
    } else {
      const coordinates = await playerHit();
      console.log(coordinates);
      //playerHit().then((coordinates) => {
      const robotsBoard = robot.playersGameboard.receiveAttack(coordinates[0], coordinates[1]);
      // console.log(robotsBoard);
      updateComputerBoard(robotsBoard);
      updateComputerBoard(robot.playersGameboard.shipsBoard);
      turn = 1;
      // }).catch(error => console.log(error));
    }
    // activeGame++;
  }
  if(human.playersGameboard.checkShipsAlive() == false){
    alert("computer won");
  } else if (robot.playersGameboard.checkShipsAlive() == false) {
    alert("player won");
  }
}
// playerHit();

async function playerHit(): Promise<number[]> {
  return new Promise((resolve) => {
    let hitX: number, hitY: number;
    document.querySelector('.computer')?.addEventListener('click', (e) => {
      const target = e.target as Element;
      if (target.className == 'cell') {
        const parent = target!.parentNode;
        const attackField = Array.prototype.indexOf.call(parent!.children, target);
        hitX = attackField % 10;
        hitY = Math.floor(attackField / 10);
        // console.log(hitX, hitY);
        resolve([hitX, hitY]);
      }
      // });
      // return new Promise((resolve) => {
      //   resolve(hitX);
    });
  });
}

// let result: boolean = robot.makeMove(
//   randomCoordinate(),
//   randomCoordinate(),
//   human.movesBoard,
//   human.playersGameboard
// );

export { human };
