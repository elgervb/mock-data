import { Blueprint } from '../blueprint/blueprint';

import { generateArray } from './mock-array';

interface TestMock {
  asdf?: string;
  count?: number;
  guid?: string;
}

describe('mock-array', () => {

  const blueprint: Blueprint<TestMock> = {
    asdf: 'string',
    count: 'number',
    guid: 'guid',
  };

  it('generates an array', () => {
    const mocks = generateArray<TestMock>(blueprint, 10);

    expect(mocks.length).toBe(10);
    mocks.forEach(mock => {
      expect(typeof mock.asdf).toBe('string');
      expect(typeof mock.count).toBe('number');
      expect(typeof mock.guid).toBe('string');
    });

  });
});
