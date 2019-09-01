"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
class Bottles {
    verse(number) {
        switch (number) {
            case 0:
                return `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
            case 1:
                return `${number} ${this.container(number)} of beer on the wall, ${number} ${this.container(number)} of beer.
Take it down and pass it around, no more bottles of beer on the wall.`;
            default:
                return `${number} ${this.container(number)} of beer on the wall, ${number} ${this.container(number)} of beer.
Take one down and pass it around, ${number - 1} ${this.container(number - 1)} of beer on the wall.`;
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
    song() {
        return this.verses(99, 0);
    }
}
exports.Bottles = Bottles;
