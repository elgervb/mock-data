import { from, register } from './blueprint';

interface TestMock {
  asdf?: string;
  count?: number;
  guid?: string;
}

describe('mock', () => {

  it('registers a blueprint', () => {
    register<TestMock>('mock', {
      asdf: 'string',
      count: 'number',
      guid: 'guid',
    });

    const mock = from<TestMock>('mock');

    expect(mock).toBeTruthy();
    expect(typeof mock.asdf).toBe('string');
    expect(typeof mock.count).toBe('number');
    expect(typeof mock.guid).toBe('string');
  });

});
