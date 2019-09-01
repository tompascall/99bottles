export declare type Pronoun = 'one' | 'it';
export declare type Container = 'bottle' | 'bottles';
export declare class Bottles {
    verse(number: number): string;
    verses(from: number, to: number): string;
    container(number: number): Container;
    pronoun(number: number): Pronoun;
    song(): string;
}
