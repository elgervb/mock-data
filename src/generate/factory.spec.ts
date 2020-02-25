import { factory } from './factory';

describe('factory', () => {

  it('has default factory for string', () => {
    expect(typeof factory('string')).toBe('function');
  });

  it('has default factory for number', () => {
    expect(typeof factory('number')).toBe('function');
  });

  it('has default factory for guid', () => {
    expect(typeof factory('guid')).toBe('function');
  });

  it('should throw when factory cannot be resolved', () => {
    expect(() => factory('bogus...')).toThrowError('no generator found for bogus...');
  });

  it('has default factory for day', () => {
    expect(typeof factory('day')).toBe('function');
  });

  it('has default factory for month', () => {
    expect(typeof factory('month')).toBe('function');
  });

  it('has default factory for date', () => {
    expect(typeof factory('date')).toBe('function');
  });
});
