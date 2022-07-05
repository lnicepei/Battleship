function Ships(
  length: number,
  coordinateX: number,
  coordinateY: number
): {
  length: number;
  whereHit: string[];
  sunk: boolean;
  coordinateX: number;
  coordinateY: number;
  area: number[];
  hit(hitX: number, hitY: number): void;
  isSunk(): boolean;
} {
  return {
    length: length,
    whereHit: new Array(length).fill(''),
    sunk: false,
    coordinateX: coordinateX,
    coordinateY: coordinateY,
    area: [coordinateX - 1, coordinateY - 1, coordinateX - 1 + length, coordinateY - 1 + length],
    hit(hitX: number, hitY: number): void {
      if (hitY == coordinateY && coordinateX <= hitX && hitX < coordinateX + this.length)
        this.whereHit[hitX - coordinateX] = 'x';
      this.sunk = this.whereHit.every((cell) => cell === 'x');
    },
    isSunk() {
      return this.sunk;
    },
  };
}

export { Ships };
