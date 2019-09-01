"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const capitalize = (q) => {
    const [head, ...rest] = q;
    return `${head.toUpperCase()}${rest.join('')}`;
};
class Bottles {
    verse(number) {
        switch (number) {
            case 0:
                return `${capitalize(this.quantity(number))} ${this.container(number)} of beer on the wall, ${this.quantity(number)} ${this.container(number)} of beer.
${this.action(number)}, 99 bottles of beer on the wall.`;
            default:
                return `${capitalize(this.quantity(number))} ${this.container(number)} of beer on the wall, ${this.quantity(number)} ${this.container(number)} of beer.
${this.action(number)}, ${this.quantity(number - 1)} ${this.container(number - 1)} of beer on the wall.`;
        }
    }
    verses(from, to) {
        return lodash_1.range(from, to - 1)
            .map(i => this.verse(i))
            .join('\n\n');
    }
    container(number) {
        if (number === 1) {
            return 'bottle';
        }
        return 'bottles';
    }
    pronoun(number) {
        if (number === 1) {
            return 'it';
        }
        return 'one';
    }
    quantity(number) {
        if (number === 0) {
            return 'no more';
        }
        return String(number);
    }
    action(number) {
        if (number === 0) {
            return 'Go to the store and buy some more';
        }
        return `Take ${this.pronoun(number)} down and pass it around`;
    }
    song() {
        return this.verses(99, 0);
    }
}
exports.Bottles = Bottles;
