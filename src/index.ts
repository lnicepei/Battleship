type Ship = {
  length: number;
  width: number;
  height: number;
  position: string;
  whereHit: string[];
  sunk: boolean;
  coordinateX: number;
  coordinateY: number;
  hit(hitX: number, hitY: number): void;
  isSunk(): boolean;
};

export { Ship };
