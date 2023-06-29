export const isNumber = <T = any>(value: T) => {
  return typeof value === 'number';
};

export const toNumber = <T = any>(value: T) => {
  return +value;
};
