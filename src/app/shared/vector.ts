export default class Vector {
  x: number | undefined;
  y: number | undefined;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  set(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }

  equals(vector: Vector): boolean {
    return this.x === vector.x && this.y === vector.y;
  }
}
