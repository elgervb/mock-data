import { from, register } from './';

interface TestMock {
  asdf?: string;
  count?: number;
  guid?: string;
}

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
