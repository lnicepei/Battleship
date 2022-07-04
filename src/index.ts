type Ship = {
  length: number;
  coordinateX: number;
  coordinateY: number;
  whereHit: string[];
  sunk: boolean;
  hit(parameter: number): void;
  isSunk(): void;
};

export { Ship };