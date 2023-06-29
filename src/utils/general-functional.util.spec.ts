import { isNumber, toNumber } from './general-functional.util';

describe('General Util - Functional', () => {
  it('"toNumber" should return a value of type "number"', () => {
    const arg = '13';

    const value = toNumber(arg);

    expect(typeof value).toEqual(typeof 1);
  });

  it('"toNumber" should return a value that is defined', () => {
    const arg = '13';

    const value = toNumber(arg);

    expect(value).toBeDefined();
  });

  it('"toNumber" should be defined', () => {
    expect(toNumber).toBeDefined();
  });

  it('"isNumber" should return a "true"', () => {
    const arg = 1;

    const value = isNumber(arg);

    expect(value).toBeDefined();
    expect(typeof value).toEqual(typeof true);
    expect(value).toEqual(true);
  });

  // TODO TO RETURN A BOOLEAN
  it('"isNumber" should return a boolean', () => {
    const arg = '1';

    const value = isNumber(arg);

    expect(value).toBeDefined();
    expect(typeof value).toEqual(typeof true);
  });

  // TODO TO BE DEFINED
  it('"isNumber" should be defined', () => {
    expect(isNumber).toBeDefined();
  });
});
