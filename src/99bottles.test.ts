describe('99 Bottles', () => {
  test('First verse', () => {
    expect((new Bottles()).verse(99))
      .toBe('99 bottles of beer on the wall, 99 bottles of beer.\n\
    Take one down and pass it around, 98 bottles of beer on the wall.');
  });
});
