import { range } from 'lodash';

export type Pronoun = 'one' | 'it';

export type Container = 'bottle' | 'bottles';

export type Quantity = 'no more' | string;

const capitalize = (s: string) => {
  const [head, ...rest] = s;
  return `${head.toUpperCase()}${rest.join('')}`;
};

export class BottleNumber {
  static for(number: number): BottleNumber {
    switch (number) {
      case 0:
        return new BottleNumber0(number);
      case 1:
        return new BottleNumber1(number);
      default:
        return new BottleNumber(number);
    }
  }

  constructor(
    protected number: number,
  ) {}

  container(): Container {
    return 'bottles';
  }

  pronoun(): Pronoun {
    return 'one';
  }

  quantity(): Quantity {
    return String(this.number);
  }

  action(): string {
    return `Take ${this.pronoun()} down and pass it around`;
  }

  successor(): BottleNumber {
    return BottleNumber.for(this.number - 1);
  }

  toString(): string {
    return `${this.quantity()} ${this.container()}`;
  }
}


export class BottleNumber0 extends BottleNumber {
  constructor(number: number) {
    super(number);
  }

  quantity(): Quantity {
    return 'no more';
  }

  action(): string {
    return 'Go to the store and buy some more';
  }

  successor(): BottleNumber {
    return BottleNumber.for(99);
  }
}

export class BottleNumber1 extends BottleNumber {
  constructor(number: number) {
    super(number);
  }

  container(): Container {
    return 'bottle';
  }

  pronoun(): Pronoun {
    return 'it';
  }
}

export class Bottles {
  verse(number: number) {
    const bottleNumber = BottleNumber.for(number);

    return capitalize(`${bottleNumber}`) + ` of beer on the wall, ${bottleNumber} of beer.
${bottleNumber.action()}, ${bottleNumber.successor()} of beer on the wall.`
  }

  verses(from: number, to: number) {
    return range(from, to - 1)
      .map(i => this.verse(i))
      .join('\n\n');
  }

  song() {
    return this.verses(99, 0);
  }
}