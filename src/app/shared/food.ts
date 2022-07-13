import { Scalable } from './scalable';
import Vector from './vector';

export default class Food extends Scalable {
  constructor(scale: number, position: Vector) {
    super(scale, position);
  }

  draw(context: CanvasRenderingContext2D): void {
    context.fillStyle = '#ec0f36';
    super.draw(context);
  }
}
