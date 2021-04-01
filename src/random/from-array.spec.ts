import { transform } from '../generate/transform';

import { randomFromArray } from './from-array';

describe('from-array', () => {

  it('returns a random item', () => {
    const array = [1, 2, 10];
    const random = randomFromArray(array);
    expect(array.some(item => item === random)).toBeTruthy();
  });

  it('can handle empty array', () => {
    expect(randomFromArray([])).toBeUndefined();
  });

  it('can handle wrong types', () => {
    const array = transform<undefined, string[]>(undefined);
    expect(() => randomFromArray(array)).toThrowError('randomFromArray must be an array');
  });
});
