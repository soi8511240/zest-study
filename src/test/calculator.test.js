const Calculator = require('../calculator.js');

describe('Calculator', () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
    jest.clearAllMocks();
  });

  it('inits with 0', () => {
    expect(calculator.value).toBe(0);
  });

  it('sets', () => {
    calculator.set(5);
    expect(calculator.value).toBe(5);
  });

  it('clear', () => {
    calculator.clear();
    expect(calculator.value).toBe(0);
  });

  describe('add', () => {
    it('adds', () => {
      calculator.set(5);
      calculator.add(10);
      expect(calculator.value).toBe(15);
    });
    it('add should throw error if value is greater than 100', () => {
      expect(() => calculator.add(101)).toThrow(
        'Value can not be greater than 100'
      );
    });
  });

  it('subtracts', () => {
    calculator.set(5);
    calculator.subtract(10);
    expect(calculator.value).toBe(-5);
  });

  it('multiplies', () => {
    calculator.set(5);
    calculator.multiply(10);
    expect(calculator.value).toBe(50);
  });

  describe('divides', () => {
    it('0 / 0 === NaN', () => {
      calculator.divide(0);
      expect(calculator.value).toBe(NaN);
    });
    it('1 / 0 === Infinity', () => {
      calculator.set(1);
      calculator.divide(0);
      expect(calculator.value).toBe(Infinity);
    });
    it('4 / 4 === 1', () => {
      calculator.set(4);
      calculator.divide(4);
      expect(calculator.value).toBe(1);
    });
  });
});
