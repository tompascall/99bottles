import { range } from 'lodash';

export type Pronoun = 'one' | 'it';

export type Container = 'bottle' | 'bottles';

export type Quantity = 'no more' | string;

const capitalize = (q: Quantity) => {
  const [head, ...rest] = q;
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
}

export class Bottles {
  verse(number: number) {
      return `${capitalize(this.quantity(number))} ${this.container(number)} of beer on the wall, ${this.quantity(number)} ${this.container(number)} of beer.
${this.action(number)}, ${this.quantity(this.successor(number))} ${this.container(this.successor(number))} of beer on the wall.`
  }

  verses(from: number, to: number) {
    return range(from, to - 1)
      .map(i => this.verse(i))
      .join('\n\n');
  }
  container(number: number): Container {
    return new BottleNumber(number).container();
  }

  pronoun(number: number): Pronoun {
    return new BottleNumber(number).pronoun();
  }

  quantity(number: number): Quantity {
    return new BottleNumber(number).quantity();
  }

  action(number: number): string {
    return new BottleNumber(number).action();
  }

  successor(number: number): number {
    return new BottleNumber(number).successor();
  }

  song() {
    return this.verses(99, 0);
  }
}