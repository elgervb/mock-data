import { arrayFrom, register } from './';

interface TestMock {
  asdf?: string;
  count?: number;
  guid?: string;
}

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

  it('generates an array with defaults', () => {
    const mocks = arrayFrom<TestMock>(mockName, 10, { count: 365 });

    mocks.forEach(mock => {
      expect(typeof mock.count).toBe('number');
      expect(mock.count).toBe(365);
      expect(mock.count).toBeLessThanOrEqual(Number.MAX_SAFE_INTEGER);
    });

  });
});
