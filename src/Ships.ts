function Ships(
  length: number,
  position: string,
  coordinateX: number,
  coordinateY: number
): {
  length: number;
  position: string;
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
    position: position,
    whereHit: new Array(length).fill(''),
    sunk: false,
    coordinateX: coordinateX,
    coordinateY: coordinateY,
    area: [coordinateX, coordinateY, coordinateX + length, coordinateY + 1],
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
