function Ships(
  length: number,
  wasHit: boolean,
  sunk: boolean
): { length: number; wasHit: boolean; sunk: boolean; } {
  return {
    length: length,
    wasHit: wasHit,
    sunk: sunk,
    hit() {
      return (this.wasHit = true);
    },
  };
}

export { Ships };
