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
    switch (number) {
      case 0:
        return `${capitalize(this.quantity(number))} ${this.container(number)} of beer on the wall, ${this.quantity(number)} ${this.container(number)} of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`
      default:
        return `${capitalize(this.quantity(number))} ${this.container(number)} of beer on the wall, ${this.quantity(number)} ${this.container(number)} of beer.
Take ${this.pronoun(number)} down and pass it around, ${this.quantity(number - 1)} ${this.container(number - 1)} of beer on the wall.`
    }
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

  song() {
    return this.verses(99, 0);
  }
}