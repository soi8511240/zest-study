const add = require('../add');

describe('add', () => {
  it('adds two numbers', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
    expect(add(-5, -5)).toBe(-10);
  });
});
