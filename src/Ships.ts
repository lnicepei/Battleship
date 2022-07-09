function Ships(
  length: number,
  position: string,
  coordinateX: number,
  coordinateY: number
): {
  length: number;
  width: number;
  height: number;
  position: string;
  whereHit: string[];
  sunk: boolean;
  coordinateX: number;
  coordinateY: number;
  // area: number[];
  hit(hitX: number, hitY: number): void;
  isSunk(): boolean;
} {
  let width, height;
  if (position === 'vertical') {
    width = 1;
    height = length;
  } else {
    width = length;
    height = 1;
  }
  return {
    length: length,
    width: width,
    height: height,
    position: position,
    whereHit: new Array(length).fill(''),
    sunk: false,
    coordinateX: coordinateX,
    coordinateY: coordinateY,
    hit(hitX: number, hitY: number): string[] {
      if (hitY == coordinateY && coordinateX <= hitX && hitX < coordinateX + this.length)
        this.whereHit[hitX - coordinateX] = 'x';
      this.sunk = this.whereHit.every((cell) => cell === 'x');
      return this.whereHit;
    },
    isSunk() {
      return this.sunk;
    },
  };
}

export { Ships };
