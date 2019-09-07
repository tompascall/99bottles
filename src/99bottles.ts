import { range } from 'lodash';

export type Pronoun = 'one' | 'it';

export type Container = 'bottle' | 'bottles';

export type Quantity = 'no more' | string;

const capitalize = (s: string) => {
  const [head, ...rest] = s;
  return `${head.toUpperCase()}${rest.join('')}`;
};

class BottleNumber {
  constructor(
    private number: number,
  ) {}

  container(): Container {
    if (this.number === 1) {
      return 'bottle';
    }
    return 'bottles';
  }

  pronoun(): Pronoun {
    if (this.number === 1) {
      return 'it';
    }
    return 'one';
  }

  quantity(): Quantity {
    if (this.number === 0) {
      return 'no more'
    }
    return String(this.number);
  }

  action(): string {
    if (this.number === 0) {
      return 'Go to the store and buy some more';
    }
    return `Take ${this.pronoun()} down and pass it around`;
  }

  successor(): number {
    if (this.number === 0) {
      return 99;
    }
    return this.number - 1;
  }

  toString(): string {
    return `${this.quantity()} ${this.container()}`;
  }
}

export class Bottles {
  verse(number: number) {
    const bottleNumber = new BottleNumber(number);
    const nextBottleNumber = new BottleNumber(bottleNumber.successor());

    return capitalize(`${bottleNumber}`) + ` of beer on the wall, ${bottleNumber} of beer.
${bottleNumber.action()}, ${nextBottleNumber} of beer on the wall.`
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