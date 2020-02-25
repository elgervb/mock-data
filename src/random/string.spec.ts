import { randomString } from './string';

describe('string', () => {

  it('generates a random string', () => {
    expect(randomString(10)).toHaveLength(10);
  });

  it('throws when length is not a number', () => {
    // tslint:disable-next-line: no-any
    expect(() => randomString('asdf' as any)).toThrowError('randomString must have a length argument');
  });
});
