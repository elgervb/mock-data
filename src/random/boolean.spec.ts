import { randomBoolean } from './boolean';

describe('boolean', () => {

  it('generates a random boolean', () => {
    expect(typeof randomBoolean()).toBe('boolean');
  });
});
