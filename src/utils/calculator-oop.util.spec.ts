import { Calculator } from './calculator-oop.util';
import { isNumber, toNumber } from './general-functional.util';

jest.mock('./general-functional.util.ts', () => {
  const originalValue = jest.requireActual('./general-functional.util.ts');

  return {
    __esModule: true,
    ...originalValue,
    isNumber: jest.fn(() => true),
    toNumber: jest.fn((value) => +value),
  };
});

describe('Calculator Util - Functional', () => {
  let instance: Calculator;

  beforeEach(() => {
    instance = new Calculator();
  });

  it('should implement "subtract"', () => {
    const args = [1, 2, 3].reverse();
    const total = 0;

    const value = instance.subtract(args);

    expect(value).toBeDefined();
    expect(value).toEqual(total);
  });

  it('"subtract" should be defined', () => {
    expect(instance.subtract).toBeDefined();
  });

  it.skip('should implement "add" and call toNumber at least once', () => {
    const args = ['1', '2', '3'];
    const total = args.reduce((acc, curr) => acc + +curr, 0);

    const value = instance.add(args);

    //   expect toNumber to be called
    expect(toNumber).toHaveBeenCalled();
    // expect(isNumber).toHaveBeenCalledTimes(args.length);
    expect(value).toBeDefined();
    expect(value).toEqual(total);
  });

  it('should implement "add"', () => {
    const args = [1, 2, 3];
    const total = args.reduce((acc, curr) => acc + curr, 0);

    const value = instance.add(args);

    expect(isNumber).toHaveBeenCalled();
    expect(isNumber).toHaveBeenCalledTimes(args.length);
    expect(value).toBeDefined();
    expect(value).toEqual(total);
  });

  it('"add" should be defined', () => {
    expect(instance.add).toBeDefined();
  });

  it('should be defined', () => {
    expect(instance).toBeDefined();
  });
});
