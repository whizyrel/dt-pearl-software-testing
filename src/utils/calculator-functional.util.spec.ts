import { add, subtract } from './calculator-functional.util';
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
  it('should implement "subtract"', () => {
    const args = [1, 2, 3].reverse();
    const total = 0;

    const value = subtract(args);

    expect(value).toBeDefined();
    expect(value).toEqual(total);
  });

  it('"subtract" should be defined', () => {
    expect(subtract).toBeDefined();
  });

  it.skip('should implement "add" and call toNumber at least once', () => {
    const args = ['1', '2', '3'];
    const total = args.reduce((acc, curr) => acc + +curr, 0);

    const value = add(args);

    //   expect toNumber to be called
    expect(toNumber).toHaveBeenCalled();
    // expect(isNumber).toHaveBeenCalledTimes(args.length);
    expect(value).toBeDefined();
    expect(value).toEqual(total);
  });

  it('should implement "add"', () => {
    const args = [1, 2, 3];
    const total = args.reduce((acc, curr) => acc + curr, 0);

    const value = add(args);

    expect(isNumber).toHaveBeenCalled();
    expect(isNumber).toHaveBeenCalledTimes(args.length);
    expect(value).toBeDefined();
    expect(value).toEqual(total);
  });

  it('"add" should be defined', () => {
    expect(add).toBeDefined();
  });
});
