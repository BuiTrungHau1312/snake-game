import Vector from './vector';

export class Scalable {
  scale: number;
  position: Vector;

  constructor(scale: number, position: Vector) {
    this.scale = scale;
    this.position = position;
  }

  draw(context: CanvasRenderingContext2D): void {
    context.fillRect(
      80 * this.scale,
      80 * this.scale,
      this.scale,
      this.scale
    );
  }
}

