import { arrayFrom, from, register } from './blueprint';

interface TestMock {
  asdf?: string;
  count?: number;
  guid?: string;
}

describe('register', () => {

  it('registers a blueprint template', () => {
    register<TestMock>('mock', {
      asdf: () => 'asdf',
      count: () => 10,
      guid: () => 'guid',
    });

    const mock = from<TestMock>('mock');
    expect(mock).toBeTruthy();
    expect(mock.asdf).toBe('asdf');
    expect(mock.count).toBe(10);
    expect(mock.guid).toBe('guid');
  });

});

describe('from', () => {

  const mockName = 'mock';

  beforeEach(() => {
    register<TestMock>(mockName, {
      asdf: () => 'string',
      count: () => 42,
      guid: () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',
    });
  });

  it('throws when blueprint could not be found', () => {
    expect(() => from('non-existing-name')).toThrowError('Cannot find blueprint for name non-existing-name');
  });

  it('retrieves a registered mock', () => {
    const mock = from<TestMock>(mockName);

    expect(mock).toBeTruthy();
    expect(typeof mock.asdf).toBe('string');
    expect(typeof mock.count).toBe('number');
    expect(typeof mock.guid).toBe('string');
  });

});

describe('arrayFrom', () => {

  const mockName = 'mock';

  beforeEach(() => {
    register<TestMock>(mockName, {
      asdf: () => 'string',
      count: () => 42,
      guid: () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',
    });
  });

  it('generates an array', () => {
    const mocks = arrayFrom<TestMock>(mockName, 10);
    expect(mocks).toBeTruthy();
    expect(mocks.length).toBe(10);
    expect(mocks[0].count).toBeGreaterThanOrEqual(0);
    expect(mocks[0].count).toBeLessThanOrEqual(Number.MAX_SAFE_INTEGER);

    mocks.forEach(mock => {
      expect(typeof mock.count).toBe('number');
      expect(mock.count).toBeGreaterThanOrEqual(0);
      expect(mock.count).toBeLessThanOrEqual(Number.MAX_SAFE_INTEGER);
    });

  });
});
