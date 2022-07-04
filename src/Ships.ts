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
  hit(parameter: number): void;
  isSunk(): boolean;
} {
  return {
    length: length,
    whereHit: new Array(length).fill(""),
    sunk: false,
    coordinateX: coordinateX,
    coordinateY: coordinateY,
    hit(cell: number) {
      cell < this.length ? (this.whereHit[cell] = 'x') : alert('error');
      this.sunk = this.whereHit.every((cell) => cell === this.whereHit[0]);
    },
    isSunk() {
      return this.sunk;
    },
  };
}

export { Ships };
