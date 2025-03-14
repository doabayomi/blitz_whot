/* global test, expect */
const { Card } = require('../card');

let count = 0;
const testAction = (game = null) => { count += 1; };

test('Creating valid card', () => {
  const testCard = new Card('square', 1);
  expect(testCard.number).toEqual(1);
  expect(testCard.action).toEqual(null);
});

test('Creating invalid card', () => {
  expect(() => new Card('triangle', 9)).toThrow(Error);
});

test('Creating valid action card', () => {
  const testCard = new Card('circle', 2, testAction);
  count = 0;
  testCard.action();
  expect(count).toBe(1);
});

test('Card creation case autoAssignAction is true but action is given',
  () => {
    count = 0;
    const testCard = new Card('circle', 2, testAction, true);
    testCard.action();
    expect(count).toBe(1);
  }
)
