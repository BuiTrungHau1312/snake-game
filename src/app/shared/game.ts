import { GameSettings } from './app.constant';
import Food from './food';

export class Game {
  private food: Food | undefined;
  private settings: GameSettings | undefined;
  private context: CanvasRenderingContext2D | undefined;

  constructor(canvas: HTMLCanvasElement) {

  }


}
