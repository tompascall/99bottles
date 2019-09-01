import { range } from 'lodash';

export type Pronoun = 'one' | 'it';

export type Container = 'bottle' | 'bottles';

export type Quantity = 'no more' | string;

const capitalize = (q: Quantity) => {
  const [head, ...rest] = q;
  return `${head.toUpperCase()}${rest.join('')}`;
};

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
    if (number === 1) {
      return 'bottle';
    }
    return 'bottles';
  }

  pronoun(number: number): Pronoun {
    if (number === 1) {
      return 'it';
    }
    return 'one';
  }

  quantity(number: number): Quantity {
    if (number === 0) {
      return 'no more'
    }
    return String(number);
  }

  action(number: number): string {
    if (number === 0) {
      return 'Go to the store and buy some more';
    }
    return `Take ${this.pronoun(number)} down and pass it around`;
  }

  successor(number: number): number {
    if (number === 0) {
      return 99;
    }
    return number - 1;
  }

  song() {
    return this.verses(99, 0);
  }
}