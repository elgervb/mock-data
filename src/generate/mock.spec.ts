import { randomGuid } from '../random/guid';
import { randomNumber } from '../random/number';
import { randomString } from '../random/string';
import { generate } from './mock';

interface TestMock {
  asdf?: string;
  count?: number;
  guid?: string;
  bool: boolean;
}

describe('mock', () => {

  it('generates a mock for string', () => {
    const stringLength = 10;
    const mock = generate<TestMock>({ asdf: () => randomString(stringLength) });

    expect(mock).toHaveProperty('asdf');
    expect(typeof mock.asdf).toBe('string');
    expect(mock.asdf).toHaveLength(stringLength);
  });

  it('generates a mock for number', () => {
    const mock = generate<TestMock>({ count: () => randomNumber(25, 150) });

    expect(mock).toHaveProperty('count');
    expect(typeof mock.count).toBe('number');
    expect(mock.count).toBeGreaterThanOrEqual(0);
    expect(mock.count).toBeLessThanOrEqual(Number.MAX_SAFE_INTEGER);
  });

  it('generates a mock for guid', () => {
    const mock = generate<TestMock>({ guid: randomGuid });

    expect(mock).toHaveProperty('guid');
    expect(typeof mock.guid).toBe('string');
    expect(mock.guid).toMatch(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);
  });

  it('generated with defaults', () => {
    const mock = generate<TestMock>({ guid: randomGuid }, { asdf: 'asdf' });
    expect(mock.asdf).toBe('asdf');
  });

  it('generated with defaults override blueprint', () => {
    const mock = generate<TestMock>({ guid: randomGuid }, { guid: 'asdf' });
    expect(mock.guid).toBe('asdf');
  });

  it('generated with defaults override blueprint when falsy', () => {
    const mock = generate<TestMock>({ guid: randomGuid }, { count: 0, bool: false });
    expect(mock.count).toBe(0);
    expect(mock.bool).toBe(false);
  });

  it('generates a mock for multiple properties (string, number, guid)', () => {
    const mock = generate<TestMock>({
      asdf: () => randomString(10),
      count: () => randomNumber(),
      guid: randomGuid,
    });

    expect(mock).toHaveProperty('asdf');
    expect(typeof mock.asdf).toBe('string');
    expect(mock.asdf).toHaveLength(10);

    expect(mock).toHaveProperty('count');
    expect(typeof mock.count).toBe('number');
    expect(mock.count).toBeGreaterThanOrEqual(0);
    expect(mock.count).toBeLessThanOrEqual(Number.MAX_SAFE_INTEGER);

    expect(mock).toHaveProperty('guid');
    expect(typeof mock.guid).toBe('string');
    expect(mock.guid).toMatch(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);
  });
});
