const { Card } = require('../card');

test('Creating valid card', () => {
  const testCard = new Card('square', 1);
  expect(testCard.number).toEqual(1);
});

test('Creating invalid card', () => {
  expect(() => new Card('triangle', 9)).toThrow(Error);
});
