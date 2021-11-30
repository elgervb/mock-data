import { register, retrieve } from './';

interface TestMock {
  asdf?: string;
  count?: number;
  guid?: string;
}

describe('register', () => {

  it('registers a blueprint template', () => {
    register<TestMock>('TestMock', {
      asdf: () => 'asdf',
      count: () => 10,
      guid: () => 'guid',
    });

    const mock = retrieve<TestMock>('TestMock');
    expect(mock).toBeTruthy();
    expect(typeof mock?.asdf).toBe('function');
    expect(typeof mock?.count).toBe('function');
    expect(typeof mock?.guid).toBe('function');

    const asdfFactory = mock?.asdf;
    if (asdfFactory) {
      expect(asdfFactory()).toBe('asdf');
    }

    const countFactory = mock?.count;
    if (countFactory) {
      expect(countFactory()).toBe(10);
    }

    const guidFactory = mock?.guid;
    if (guidFactory) {
      expect(guidFactory()).toBe('guid');
    }
  });

});
