import { range } from 'lodash';

export type Pronoun = 'one' | 'it';

export type Container = 'bottle' | 'bottles';

export class Bottles {
  verse(number: number) {
    switch (number) {
      case 0:
        return `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`
      case 1:
        return `${number} ${this.container(number)} of beer on the wall, ${number} ${this.container(number)} of beer.
Take ${this.pronoun(number)} down and pass it around, no more bottles of beer on the wall.`
      default:
        return `${number} ${this.container(number)} of beer on the wall, ${number} ${this.container(number)} of beer.
Take ${this.pronoun(number)} down and pass it around, ${number - 1} ${this.container(number - 1)} of beer on the wall.`
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

  song() {
    return this.verses(99, 0);
  }
}