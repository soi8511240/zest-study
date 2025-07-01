const Stack = require('../stack');

describe('Stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it('is created empty', () => {
    expect(stack.size()).toBe(0);
  });

  it('allow to push item ', () => {
    stack.push('banana');
    expect(stack.size()).toBe(1);
  });

  describe('pop', () => {
    it('is not allow where empty', () => {
      expect(() => {
        stack.pop();
      }).toThrow('Stack is empty');
    });

    it('returns the last pushed item and remove it from the stack', () => {
      stack.push('banana');
      stack.push('apple');
      expect(stack.pop()).toBe('apple');
      expect(stack.size()).toBe(1);
    });
  });

  describe('peek', () => {
    it('is not allow where empty', () => {
      expect(() => {
        stack.peek();
      }).toThrow('Stack is empty');
    });

    it('returns the last pushed item and kepp it from the stack', () => {
      stack.push('banana');
      stack.push('apple');
      expect(stack.peek()).toBe('apple');
      expect(stack.size()).toBe(2);
    });
  });
});
