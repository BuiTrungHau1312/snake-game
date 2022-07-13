export abstract class Random {
  // tslint:disable-next-line:typedef
  static Generate(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.ceil(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
