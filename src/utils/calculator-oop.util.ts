import { isNumber, toNumber } from './general-functional.util';

export class Calculator {
  public add<T = number>(args: T[]) {
    const numbers = args.map((el) => {
      if (isNumber(el)) {
        return el;
      } else {
        return toNumber(el);
      }
    });

    return numbers.reduce((acc, curr) => acc + (curr as any), 0);
  }

  public subtract<T = any>(args: T[]) {
    return args.reduce(
      (acc, curr) => acc - (curr as any),
      args.reduce((acc, curr) => acc + (curr as any), 0),
    );
  }
}
