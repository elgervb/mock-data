import { generate } from './mock';

interface TestMock {
  asdf?: string;
  count?: number;
  guid?: string;
}

describe('mock', () => {

  it('generates a mock for string', () => {
    const mock = generate<TestMock>({ asdf: 'string' });

    expect(mock).toHaveProperty('asdf');
    expect(typeof mock.asdf).toBe('string');
    expect(mock.asdf).toHaveLength(10);
  });

  it('generates a mock for number', () => {
    const mock = generate<TestMock>({ count: 'number' });

    expect(mock).toHaveProperty('count');
    expect(typeof mock.count).toBe('number');
    expect(mock.count).toBeGreaterThanOrEqual(0);
    expect(mock.count).toBeLessThanOrEqual(Number.MAX_SAFE_INTEGER);
  });

  it('generates a mock for guid', () => {
    const mock = generate<TestMock>({ guid: 'guid' });

    expect(mock).toHaveProperty('guid');
    expect(typeof mock.guid).toBe('string');
    expect(mock.guid).toMatch(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);
  });

  it('generates a mock for multiple properties (string, number, guid)', () => {
    const mock = generate<TestMock>({
      asdf: 'string',
      count: 'number',
      guid: 'guid',
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
