type Ship = {
  length: number;
  position: string;
  whereHit: string[];
  sunk: boolean;
  coordinateX: number;
  coordinateY: number;
  area: number[];
  hit(hitX: number, hitY: number): void;
  isSunk(): boolean;
};

export { Ship };
