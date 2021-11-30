import { Blueprint } from '../blueprint/blueprint';
import { randomGuid } from '../random/guid';
import { randomNumber } from '../random/number';
import { randomString } from '../random/string';

import { generateArray } from './mock-array';

interface TestMock {
  asdf?: string;
  count?: number;
  guid?: string;
}

describe('mock-array', () => {

  const blueprint: Blueprint<TestMock> = {
    asdf: () => randomString(10),
    count: () => randomNumber(25, 100),
    guid: randomGuid,
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
